import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(
  fs.readFileSync(".devin/mcp_config.local.json", "utf8")
);
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const OUT = "public/img";

const STYLE =
  "photorealistic, premium dental healthcare photography, bright clean dental clinic, blue and white palette, soft clinical lighting, sharp focus, high detail, no people faces visible, no text, no logos, no watermark, no borders, single image";

// 2 images per service: wide hero + about detail
const jobs = [
  {
    svc: "implants",
    hero: `Wide 16:9 landscape photo: dental implant treatment setup, titanium implant posts and surgical guide arranged beside a jaw model on a clean dental tray, ${STYLE}`,
    about: `Close-up photograph of a titanium dental implant post with a natural ceramic crown seated in a realistic jaw model with healthy pink gums, ${STYLE}`,
  },
  {
    svc: "braces",
    hero: `Wide 16:9 landscape photo: orthodontic treatment scene, a transparent clear aligner and a dental model with metal braces on a bright clinic desk, ${STYLE}`,
    about: `Macro photograph of neat metal braces brackets and archwire on a dental model, realistic enamel detail, ${STYLE}`,
  },
  {
    svc: "rootcanal",
    hero: `Wide 16:9 landscape photo: endodontic treatment setup, fine root canal files and a tooth cross-section model arranged on a clean tray, ${STYLE}`,
    about: `Realistic 3D medical visualization of a molar showing enamel, dentin, pulp chamber and root canals with a fine endodontic instrument inside one canal, ${STYLE}`,
  },
  {
    svc: "cleaning",
    hero: `Wide 16:9 landscape photo: professional dental hygiene setup, ultrasonic scaler, mouth mirror and polishing cup on a sterile tray in a bright operatory, ${STYLE}`,
    about: `Close-up photograph of freshly cleaned, polished teeth on a dental model, smooth enamel and healthy gum line, ${STYLE}`,
  },
  {
    svc: "cosmetic",
    hero: `Wide 16:9 landscape photo: cosmetic dentistry shade selection, a porcelain veneer shade guide held beside a white tooth model on a clinic desk, ${STYLE}`,
    about: `Macro photograph of ultra-thin natural-looking porcelain veneers arranged beside a smile model, realistic enamel translucency, ${STYLE}`,
  },
  {
    svc: "pediatric",
    hero: `Wide 16:9 landscape photo: bright child-friendly dental operatory with a blue dental chair, small colorful details and a gentle welcoming atmosphere, ${STYLE}`,
    about: `Close-up photograph of a small dental mirror and child-sized dental tools arranged neatly beside a model of baby teeth, ${STYLE}`,
  },
  {
    svc: "crowns",
    hero: `Wide 16:9 landscape photo: a natural ceramic dental crown held in precision tweezers above a prepared tooth model on a dental lab bench, ${STYLE}`,
    about: `Macro photograph of a zirconia ceramic crown seated on a prepared tooth on a realistic dental model, lifelike enamel translucency, ${STYLE}`,
  },
  {
    svc: "gum",
    hero: `Wide 16:9 landscape photo: periodontal examination setup, a periodontal probe and dental mirror beside a teeth and gums model on a clean tray, ${STYLE}`,
    about: `Close-up photograph of a healthy pink gum line and clean tooth surfaces on a detailed dental model, ${STYLE}`,
  },
  {
    svc: "dentures",
    hero: `Wide 16:9 landscape photo: a full denture and a partial denture displayed on a clean reflective white surface in a dental laboratory, ${STYLE}`,
    about: `Macro photograph of denture teeth and realistic pink acrylic gum base showing fine prosthetic detail, ${STYLE}`,
  },
  {
    svc: "wisdom",
    hero: `Wide 16:9 landscape photo: a monitor displaying a realistic panoramic dental X-ray of a jaw with an impacted wisdom tooth, dark diagnostic room, ${STYLE}`,
    about: `Medically accurate 3D visualization of a lower jaw showing an impacted wisdom tooth angled behind the second molar, blue-gray tones, ${STYLE}`,
  },
  {
    svc: "xray",
    hero: `Wide 16:9 landscape photo: a modern digital panoramic dental X-ray machine in a bright clean diagnostic room, ${STYLE}`,
    about: `Close-up photograph of a high-resolution monitor displaying a realistic panoramic dental scan of teeth and jaw, ${STYLE}`,
  },
  {
    svc: "rehab",
    hero: `Wide 16:9 landscape photo: a complete restored dental arch model mounted on a dental articulator in a modern prosthetic lab, ${STYLE}`,
    about: `Macro photograph of a full restored dental arch with natural-looking ceramic crowns and veneers on a model, healthy gum detail, ${STYLE}`,
  },
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
  const parts = json.candidates?.[0]?.content?.parts || [];
  const img = parts.find((p) => p.inlineData?.data);
  if (!img) throw new Error("no image in response");
  fs.writeFileSync(path.join(OUT, file), Buffer.from(img.inlineData.data, "base64"));
  console.log("saved", file);
}

for (const j of jobs) {
  for (const kind of ["hero", "about"]) {
    const file = `sd-${j.svc}-${kind}.jpg`;
    if (fs.existsSync(path.join(OUT, file))) {
      console.log("skip", file);
      continue;
    }
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await gen(j[kind], file);
        break;
      } catch (e) {
        console.log(`retry ${attempt} ${file}:`, e.message);
        if (attempt === 3) console.log("FAILED", file);
        await new Promise((r) => setTimeout(r, 3000));
      }
    }
    await new Promise((r) => setTimeout(r, 1200));
  }
}
console.log("done");
