import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const OUT = "public/img";

const STYLE =
  "photorealistic premium dental healthcare photography, bright clean modern dental clinic in blue and white tones, natural expressions, professional photography, sharp focus, realistic Indian people where shown, no text, no logos, no watermark, single image";

const jobs = [
  ["j-consult", `An Indian dentist examining a patient chairside with a dental mirror, first consultation and oral examination, ${STYLE}`],
  ["j-plan", `An Indian dentist reviewing digital dental scans and X-rays on a monitor while planning treatment, ${STYLE}`],
  ["j-treatment", `Close-up of a dentist's gloved hands performing a dental procedure with instruments on a reclined patient in a dental chair, ${STYLE}`],
  ["j-recovery", `A happy Indian patient looking at her smile in a hand mirror at the dental clinic during a follow-up visit, ${STYLE}`],
  ["j-home", `A toothbrush, toothpaste and dental floss neatly arranged on a clean bathroom counter, home oral care, ${STYLE}`],
  ["j-lab", `A dental technician carefully crafting a ceramic crown at a laboratory bench with an articulator and precision tools, ${STYLE}`],
  ["j-align", `An Indian orthodontist fitting a transparent aligner onto a patient's teeth, close-up of the fitting, ${STYLE}`],
  ["j-surgery", `An Indian dental surgeon performing a minor oral surgical procedure on a patient, gloved hands and surgical instruments, focused and clean, ${STYLE}`],
  ["j-shade", `An Indian dentist holding a tooth shade guide beside a patient for color matching, cosmetic consultation, ${STYLE}`],
];

async function gen(prompt, file) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent`,
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
