import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const prompt = `Create an ultra-high-definition, photorealistic hero image for the dental articles page of Dr. Kiran's Smile Group of Dental Hospitals, a professional dental healthcare brand serving India and Kuwait.

**Visual style:** Modern international dental hospital, realistic clinical photography, bright white and soft ice-blue palette, subtle navy-blue accents, natural skin tones, premium lighting, crisp 4K-level detail, clean and reassuring atmosphere, high-end healthcare website aesthetic.

**Subject:** A happy young Indian woman patient with long dark wavy hair reclining in a modern dental chair, smiling broadly with beautiful natural teeth, bright modern dental operatory softly blurred behind her.

**Composition:** Extra-wide 16:9 landscape image, approximately 1920 x 1080 pixels, maximum resolution and sharpness. Place the patient on the **right 55-60%** of the image. Keep the **left 40-45%** uncluttered with a softly lit pale-blue or white clinic background, subtle depth of field, and plenty of negative space for website headline text.

**Restrictions:** No text, no typography, no captions, no watermarks, no borders, no website UI, no logos, and no extra fingers or distorted anatomy. Output only the finished image.`;

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
  fs.writeFileSync(path.join(OUT, "art-hero.jpg"), Buffer.from(img.inlineData.data, "base64"));
  console.log("saved art-hero.jpg");
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
