import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const prompt = `Create a clean, minimal, premium healthcare illustration for a dental clinic branches page hero.

**Content:** A stylized soft light-blue map of South Asia showing India clearly with the Arabian Sea and a small view of the Gulf region (Kuwait area) on the left edge. Four glowing blue location pin markers placed across the map — one in the Gulf area, and three across India (south-east coast, south-central, and south India). Subtle dotted route lines connecting the pins.

**Style:** Flat modern vector-style illustration, soft ice-blue and white palette with navy-blue map outlines, small bright blue teardrop map pins with subtle glow, clean minimal aesthetic matching a premium healthcare website, lots of white/very-light-blue background space, professional and airy.

**Composition:** Wide 16:9 landscape. The map occupies the right 60-65% of the image. Keep the left 35-40% plain very-light-blue or white gradient, completely empty for website text.

**Restrictions:** No text, no labels, no letters, no numbers, no city names, no watermarks, no borders, no logos. Output only the finished image.`;

async function gen() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: { "x-goog-api-key": KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 160)}`);
  const json = await res.json();
  const img = (json.candidates?.[0]?.content?.parts || []).find((p) => p.inlineData?.data);
  if (!img) throw new Error("no image in response");
  fs.writeFileSync(path.join(OUT, "branches-hero.jpg"), Buffer.from(img.inlineData.data, "base64"));
  console.log("saved branches-hero.jpg");
}

for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    await gen();
    break;
  } catch (e) {
    console.log(`retry ${attempt}:`, e.message);
    if (attempt === 3) console.log("FAILED");
    await new Promise((r) => setTimeout(r, 3000));
  }
}
