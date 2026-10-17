import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const HERO = `Create a premium, photorealistic hero image for the patient testimonials page of Dr. Kiran's Smile Group of Dental Hospitals, a professional dental healthcare brand serving India and Kuwait.

**Visual style:** Modern international dental hospital, realistic clinical photography, bright white and soft ice-blue palette, subtle navy-blue accents, natural skin tones, premium lighting, clean and reassuring atmosphere, high-end healthcare website aesthetic.

**Subject:** A happy young Indian woman patient with long dark hair reclining in a modern blue dental chair, smiling broadly with beautiful natural white teeth, looking relaxed and confident, modern bright dental operatory in soft-focus background.

**Composition:** Extra-wide 16:9 landscape image, approximately 1920 x 1080 pixels. Place the patient on the **right 55-60%** of the image. Keep the **left 40-45%** uncluttered with a softly lit pale-blue or white clinic background, subtle depth of field, and plenty of negative space for website headline text. Make the subject large, clear, and visually compelling.

**Restrictions:** No text, no typography, no captions, no watermarks, no borders, no website UI, no logos, and no extra fingers or distorted anatomy. Output only the finished image.`;

const PORTRAIT = (who) =>
  `Photorealistic head-and-shoulders portrait photograph of ${who}, India. Genuine warm natural smile showing healthy teeth, relaxed confident expression, natural skin texture with realistic detail, soft diffused daylight, clean softly blurred light-blue or neutral background, professional healthcare photography, square composition, sharp focus on the face, no text, no watermark, no logos, no distorted anatomy.`;

const jobs = [
  ["tm-hero", HERO],
  ["tm-smile-1", PORTRAIT("a distinguished Indian senior man around 65 with grey hair and a moustache, wearing a light casual shirt")],
  ["tm-smile-2", PORTRAIT("a cheerful young Indian woman around 24 with long dark hair, wearing a simple pastel kurti")],
  ["tm-smile-3", PORTRAIT("a happy Indian schoolboy around 10 years old in a school uniform")],
  ["tm-smile-4", PORTRAIT("a graceful Indian senior woman around 60 with grey-streaked hair, wearing a traditional saree and bindi")],
  ["tm-smile-5", PORTRAIT("a confident Indian man around 35 with a short beard, wearing a casual blue shirt")],
  ["tm-smile-6", PORTRAIT("a friendly Indian woman around 45 with shoulder-length hair, wearing a teal top")],
];

async function gen(prompt, file) {
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
  fs.writeFileSync(path.join(OUT, file), Buffer.from(img.inlineData.data, "base64"));
  console.log("saved", file);
}

for (const [name, prompt] of jobs) {
  const file = `${name}.jpg`;
  if (fs.existsSync(path.join(OUT, file))) {
    console.log("skip", file);
    continue;
  }
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await gen(prompt, file);
      break;
    } catch (e) {
      console.log(`retry ${attempt} ${file}:`, e.message);
      if (attempt === 3) console.log("FAILED", file);
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
  await new Promise((r) => setTimeout(r, 1200));
}
console.log("done");
