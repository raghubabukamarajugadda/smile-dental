// Generate all 12 service card images via Cloudflare Workers AI (FLUX.1-schnell)
import fs from "node:fs/promises";

import path from "node:path";
import { fileURLToPath } from "node:url";

const cfg = JSON.parse(
  await fs.readFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "..", ".devin", "mcp_config.local.json"),
    "utf8"
  )
);
const env = cfg.mcpServers?.imagegen?.env || {};
const ACCOUNT = process.env.CLOUDFLARE_ACCOUNT_ID || env.CLOUDFLARE_ACCOUNT_ID;
const TOKEN = process.env.CLOUDFLARE_API_TOKEN || env.CLOUDFLARE_API_TOKEN;
if (!ACCOUNT || !TOKEN) throw new Error("Cloudflare credentials not found");
const MODEL = "@cf/black-forest-labs/flux-2-dev";

const JOBS = [
  ["dental-implants.jpg",
    "Photorealistic macro photograph of a premium titanium dental implant topped with a natural-looking ceramic crown, shown securely positioned in healthy pink gum tissue, adjacent natural teeth visible, clean modern dental clinic background softly blurred in cool blue and white tones, realistic tooth anatomy, soft studio-clinical lighting, sharp focus, premium dental healthcare advertising photography, no text, no logos, no watermark, single image."],
  ["braces-aligners.jpg",
    "Photorealistic close-up of a smiling young Indian adult demonstrating orthodontic treatment, with neat metal braces on the teeth and a transparent clear aligner held gently near the smile, natural lips and realistic teeth, modern dental clinic softly blurred in the background, bright blue-and-white clinical palette, professional orthodontic advertising photography, sharp details, natural skin texture, no text, no logos, no watermark, single image."],
  ["root-canal-treatment.jpg",
    "High-quality photorealistic 3D medical visualization of a human molar showing its enamel, dentin, pulp chamber, and root canals, with a fine endodontic instrument carefully positioned inside a root canal to illustrate treatment, realistic anatomical proportions, clean neutral background with subtle blue accents, soft clinical lighting, educational dental photography style, no blood, no text, no labels, no logos, no watermark, single image."],
  ["teeth-cleaning-scaling.jpg",
    "Photorealistic close-up of a professional dentist performing dental scaling and cleaning on an adult patient, gloved hands holding a dental scaler and mouth mirror near the teeth, realistic healthy gums and natural tooth surfaces, clean dental operatory, soft blue-and-white lighting, shallow depth of field, premium clinical photography, hygienic and reassuring atmosphere, no text, no logos, no watermark, single image."],
  ["cosmetic-dentistry.jpg",
    "Premium photorealistic close-up portrait of a smiling Indian woman showing natural-looking, well-shaped porcelain veneers, balanced tooth proportions, realistic enamel texture, healthy gums, elegant natural lips, softly blurred modern dental clinic background, bright neutral lighting with subtle cool-blue tones, refined cosmetic dentistry advertising photography, avoid unnaturally oversized or excessively white teeth, no text, no logos, no watermark, single image."],
  ["pediatric-dentistry.jpg",
    "Photorealistic scene of a friendly female pediatric dentist in a white coat gently examining a happy Indian child seated comfortably in a modern blue dental chair, child smiling naturally, dentist wearing gloves and using a small dental mirror, bright child-friendly clinic with subtle colorful details, reassuring interaction, natural facial features, soft professional lighting, premium healthcare photography, no text, no logos, no watermark, single image."],
  ["crowns-bridges.jpg",
    "Photorealistic macro dental photograph of a natural-looking ceramic dental crown fitted over a prepared tooth, with adjacent teeth and a realistic dental bridge visible for context, lifelike enamel translucency, healthy pink gum tissue, accurate tooth anatomy, clean neutral clinical background with soft blue highlights, high-end restorative dentistry photography, no text, no logos, no watermark, single image."],
  ["gum-treatment.jpg",
    "Photorealistic close-up of a dental professional carefully examining the gum line using a periodontal probe and dental mirror, realistic teeth and pink gum tissue in clear focus, gloved hands, clean modern dental clinic, soft blue-and-white lighting, medically accurate details, reassuring professional atmosphere, no graphic blood, no text, no logos, no watermark, single image."],
  ["dentures.jpg",
    "Photorealistic studio-clinical photograph of a well-crafted full denture and a partial denture displayed on a clean reflective white surface, realistic natural-looking artificial teeth and lifelike pink acrylic gum base, precise prosthetic detail, softly blurred modern dental laboratory background, cool blue-and-white palette, balanced lighting, premium dental restoration photography, no people, no text, no logos, no watermark, single image."],
  ["wisdom-tooth-removal.jpg",
    "High-resolution, medically accurate 3D visualization of a lower jaw showing an impacted wisdom tooth positioned at an angle behind the second molar, with surrounding roots and jawbone visible, realistic panoramic dental X-ray aesthetic with subtle blue-gray tones and a restrained highlight around the impacted tooth, clean educational medical visualization, no surgical instruments, no blood, no text, no labels, no logos, no watermark, single image."],
  ["digital-xray-diagnostics.jpg",
    "Photorealistic image of a modern digital dental panoramic X-ray machine in a bright, clean diagnostic room, a high-resolution monitor displaying a realistic panoramic view of the teeth and jaw, sleek white equipment with blue accents, uncluttered cabinetry, soft clinical lighting, professional healthcare technology photography, realistic scale and proportions, no readable screen text, no logos, no watermark, single image."],
  ["full-mouth-rehabilitation.jpg",
    "Premium photorealistic close-up of a mature adult smiling with a complete, harmonious set of natural-looking restored teeth, balanced bite, realistic enamel texture and healthy gums, subtle natural tooth variation rather than artificial whiteness, clean modern dental clinic background softly blurred in cool blue and white, professional restorative dentistry photography, no before-and-after split, no text, no logos, no watermark, single image."],
];

for (const [name, prompt] of JOBS) {
  const t0 = Date.now();
  try {
    const fd = new FormData();
    fd.append("prompt", prompt);
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/ai/run/${MODEL}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        body: fd,
      }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const data = await res.json();
    if (!data?.result?.image) throw new Error("no image in response");
    const buf = Buffer.from(data.result.image, "base64");
    await fs.writeFile(`public/img/${name}`, buf);
    console.log(`${name} saved (${(buf.length / 1024).toFixed(0)}KB) in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  } catch (e) {
    console.log(`${name} FAILED: ${e.message}`);
  }
}
console.log("done");
