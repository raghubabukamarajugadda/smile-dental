import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const GEMINI_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL =
  process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";
const OPENAI_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";
const PROVIDER = process.env.IMAGE_PROVIDER; // cloudflare | openai | gemini | pollinations
const CF_ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID;
const CF_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CF_MODEL =
  process.env.CLOUDFLARE_IMAGE_MODEL || "@cf/black-forest-labs/flux-2-dev";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "img");

async function genOpenAI(prompt) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      prompt,
      size: "1024x1024",
      quality: "medium",
    }),
  });
  if (!res.ok) {
    throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (b64) return b64;
  const url = data?.data?.[0]?.url;
  if (!url) throw new Error("OpenAI returned no image");
  const img = await fetch(url);
  if (!img.ok) throw new Error(`Image download ${img.status}`);
  return Buffer.from(await img.arrayBuffer()).toString("base64");
}

async function genGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "x-goog-api-key": GEMINI_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
    }),
  });
  if (!res.ok) {
    throw new Error(`Gemini API ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const img = parts.find((p) => p?.inlineData?.data);
  if (!img) {
    const txt = parts.map((p) => p?.text).filter(Boolean).join(" ");
    throw new Error(
      `No image in response. ${txt || JSON.stringify(data).slice(0, 400)}`
    );
  }
  return img.inlineData.data;
}

async function genPollinations(prompt) {
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?width=1024&height=1024&model=flux&nologo=true&seed=${Math.floor(
    Math.random() * 999999
  )}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Pollinations ${res.status}: ${await res.text()}`);
  }
  return Buffer.from(await res.arrayBuffer()).toString("base64");
}

async function genCloudflare(prompt) {
  const fd = new FormData();
  fd.append("prompt", prompt);
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/ai/run/${CF_MODEL}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${CF_TOKEN}` },
      body: fd,
    }
  );
  if (!res.ok) {
    throw new Error(`Cloudflare ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const img = data?.result?.image;
  if (!img) throw new Error(`Cloudflare returned no image`);
  return img;
}

const server = new McpServer({ name: "imagegen", version: "1.0.0" });

server.tool(
  "generate_image",
  "Generate an image with AI and save it into this project's public/img folder. Uses OpenAI when OPENAI_API_KEY is set, otherwise Gemini.",
  {
    prompt: z
      .string()
      .describe(
        "Detailed description of the image to generate. Include style, subject, colors, and aspect/orientation hints."
      ),
    filename: z
      .string()
      .describe("Output filename inside public/img, e.g. hero-consult.png"),
  },
  async ({ prompt, filename }) => {
    const safe = path.basename(filename).replace(/[^\w.-]/g, "_");
    const run = async (p) => {
      if (p === "cloudflare" && CF_ACCOUNT && CF_TOKEN) {
        return { b64: await genCloudflare(prompt), provider: `Cloudflare ${CF_MODEL}` };
      }
      if (p === "openai" && OPENAI_KEY) {
        return { b64: await genOpenAI(prompt), provider: `OpenAI ${OPENAI_MODEL}` };
      }
      if (p === "gemini" && GEMINI_KEY) {
        return { b64: await genGemini(prompt), provider: `Gemini ${GEMINI_MODEL}` };
      }
      if (p === "pollinations") {
        return { b64: await genPollinations(prompt), provider: "Pollinations (FLUX, free)" };
      }
      throw new Error(`provider "${p}" has no key/config`);
    };

    const attempts = PROVIDER
      ? [PROVIDER]
      : [
          CF_ACCOUNT && CF_TOKEN ? "cloudflare" : null,
          OPENAI_KEY ? "openai" : null,
          GEMINI_KEY ? "gemini" : null,
          "pollinations",
        ].filter(Boolean);

    let b64;
    let provider;
    const tried = [];
    for (const p of attempts) {
      try {
        ({ b64, provider } = await run(p));
        break;
      } catch (e) {
        tried.push(`${p}: ${String(e.message).slice(0, 100)}`);
      }
    }
    if (!b64) {
      throw new Error(`All providers failed — ${tried.join(" | ")}`);
    }
    if (tried.length) {
      provider += ` (fallback after ${tried.join(", ")})`;
    }

    await fs.mkdir(OUT_DIR, { recursive: true });
    const out = path.join(OUT_DIR, safe);
    await fs.writeFile(out, Buffer.from(b64, "base64"));

    return {
      content: [
        {
          type: "text",
          text: `Image saved to ${out} via ${provider} — usable in code as /img/${safe}`,
        },
      ],
    };
  }
);

await server.connect(new StdioServerTransport());
