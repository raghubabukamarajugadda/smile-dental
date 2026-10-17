import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const HERO = `Create a premium, photorealistic hero image for the appointment booking page of Dr. Kiran's Smile Group of Dental Hospitals, a professional dental healthcare brand serving India and Kuwait.

**Visual style:** Modern international dental hospital, realistic clinical photography, bright white and soft ice-blue palette, subtle navy-blue accents, natural skin tones, premium lighting, clean and reassuring atmosphere, high-end healthcare website aesthetic.

**Subject:** A friendly Indian female dentist in a white coat consulting a smiling woman patient, holding a clipboard, seated in a bright modern clinic reception.

**Composition:** Extra-wide 16:9 landscape image, approximately 1920 x 1080 pixels. Place the dentist and patient on the **right 55-60%** of the image. Keep the **left 40-45%** uncluttered with a softly lit pale-blue or white clinic background, subtle depth of field, and plenty of negative space for website headline text. Make the main subjects large, clear, and visually compelling.

**Restrictions:** No text, no typography, no captions, no watermarks, no borders, no website UI, no logos, and no extra fingers or distorted anatomy. Output only the finished image.`;

const LANDMARK = (what) =>
  `Photorealistic photograph of ${what}, bright daylight, clear blue sky, professional travel photography, landscape composition, sharp details, no text, no watermark, no logos`;

const jobs = [
  ["appt-hero", HERO],
  ["clinic-ap", LANDMARK("a beautiful South Indian temple gopuram in Andhra Pradesh, ornate carved tower")],
  ["clinic-telangana", LANDMARK("Charminar monument in Hyderabad Telangana India")],
  ["clinic-karnataka", LANDMARK("Mysore Palace in Karnataka India, grand illuminated architecture")],
  ["clinic-kuwait", LANDMARK("Kuwait Towers landmark at dusk, Kuwait City skyline")],
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
