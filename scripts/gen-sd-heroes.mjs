import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const TEMPLATE = (serviceName, subject) => `Create a premium, photorealistic hero image for the dental service **${serviceName}** for Dr. Kiran's Smile Group of Dental Hospitals, a professional dental healthcare brand serving India and Kuwait.

**Visual style:** Modern international dental hospital, realistic clinical photography, bright white and soft ice-blue palette, subtle navy-blue accents, natural skin tones, premium lighting, clean and reassuring atmosphere, high-end healthcare website aesthetic.

**Subject:** ${subject}

**Composition:** Extra-wide 16:9 landscape image, approximately 1920 x 1080 pixels. Place the main dentist, patient, dental procedure, or relevant dental model on the **right 55-60%** of the image. Keep the **left 40-45%** uncluttered with a softly lit pale-blue or white clinic background, subtle depth of field, and plenty of negative space for website headline text. Make the main subject large, clear, anatomically accurate, and visually compelling.

**Medical accuracy:** Show the specific treatment or equipment relevant to ${serviceName}. Use realistic dental anatomy, correct instruments, natural-looking teeth and gums, appropriate protective equipment, and a clean clinical environment. Avoid graphic blood, exaggerated results, artificial-looking smiles, or misleading treatment depictions.

**Consistency:** Match the visual quality, lighting, color grading, and composition across every service page so the images look like one cohesive brand campaign.

**Restrictions:** No text, no typography, no captions, no watermarks, no borders, no website UI, no buttons, no logos, no split-screen before-and-after comparisons, and no extra fingers or distorted anatomy. Output only the finished image.`;

const jobs = [
  ["implants", "Dental Implants", "An Indian dentist in a white coat explaining a titanium dental implant on a realistic jaw model to an attentive patient at a consultation desk"],
  ["braces", "Braces & Aligners", "An Indian orthodontist showing a transparent clear aligner to a smiling young adult patient seated in a modern dental chair"],
  ["rootcanal", "Root Canal Treatment", "An Indian endodontist in surgical mask and gloves performing root canal treatment with a dental microscope on a reclined patient"],
  ["cleaning", "Teeth Cleaning & Scaling", "An Indian dental hygienist performing professional ultrasonic scaling on a comfortable patient reclined in a dental chair"],
  ["cosmetic", "Cosmetic Dentistry", "An Indian cosmetic dentist holding a porcelain veneer shade guide beside a smiling woman patient for shade matching"],
  ["pediatric", "Pediatric Dentistry", "A friendly female Indian pediatric dentist gently examining a happy young child seated in a dental chair"],
  ["crowns", "Crowns & Bridges", "An Indian dentist showing a natural ceramic crown on a dental model to a patient during a consultation"],
  ["gum", "Gum Treatment", "An Indian periodontist carefully examining a patient's gum line with a periodontal probe, patient reclined in a dental chair"],
  ["dentures", "Dentures", "An Indian dentist consulting a smiling senior patient with a natural-looking denture model on the desk between them"],
  ["wisdom", "Wisdom Tooth Removal", "An Indian dentist pointing at a panoramic dental X-ray on a monitor showing an impacted wisdom tooth while explaining to a patient"],
  ["xray", "Digital X-Ray & Diagnostics", "A patient standing at a modern panoramic digital dental X-ray machine while an Indian dental technician positions the equipment"],
  ["rehab", "Full Mouth Rehabilitation", "An Indian senior dentist discussing a complete smile rehabilitation plan with a mature patient, dental models and scans on the desk"],
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

for (const [svc, name, subject] of jobs) {
  const file = `sd-${svc}-hero.jpg`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await gen(TEMPLATE(name, subject), file);
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
