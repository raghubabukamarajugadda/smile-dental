import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const prompt = `Create a premium, festive Diwali background artwork for a dental clinic social media poster.

**Content:** Deep navy-blue night background with a warm golden-orange festive glow. In the lower-middle area, a beautiful arrangement of glowing traditional clay diyas (oil lamps) with warm orange flames, golden sparkles, bokeh lights, and marigold flowers. One bright stylized white tooth softly glowing among the diyas — cheerful and premium. Subtle golden rangoli flourishes in the corners.

**Composition:** Portrait 4:5, edge-to-edge full bleed. IMPORTANT: keep the TOP 25% of the image mostly clean deep navy with only soft bokeh/sparkle accents (space for a logo). Keep the BOTTOM 18% dark and clean (space for a text banner). The festive diya scene occupies the middle band.

**Style:** Premium festival advertisement backdrop, rich contrast, warm orange/gold glow against deep navy blue, elegant and high-end.

**Restrictions:** Absolutely NO text, no letters, no numbers, no logos, no watermarks, no borders, no frames. Output only the finished background artwork.`;

async function gen() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: { "x-goog-api-key": KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  );
  if (!res.ok)
    throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 160)}`);
  const json = await res.json();
  const img = (json.candidates?.[0]?.content?.parts || []).find(
    (p) => p.inlineData?.data
  );
  if (!img) throw new Error("no image in response");
  fs.writeFileSync(
    path.join(OUT, "diwali-bg.jpg"),
    Buffer.from(img.inlineData.data, "base64")
  );
  console.log("saved diwali-bg.jpg");
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
