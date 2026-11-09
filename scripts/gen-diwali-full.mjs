import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const logo = fs.readFileSync("public/img/logo_smile.png").toString("base64");

const prompt = `Using the provided logo image, create a premium festive Diwali social media poster for the dental clinic "Dr. Kiran's Smile Group of Dental Hospitals".

**Layout (portrait 4:5, edge-to-edge full bleed):**
- Deep navy-blue night background with warm golden-orange festive glow
- TOP: place the provided logo exactly as it is, centered on a clean white rounded card
- HEADLINE: "Happy Diwali" in large glowing golden serif letters, with italic sub-line "May your smile shine brighter than the diyas"
- CENTER: beautiful arrangement of glowing clay diyas with orange flames, marigold flowers, golden sparkles and bokeh, with one bright stylized white tooth glowing among them, rangoli flourishes in corners
- CTA: a warm-orange rounded pill button reading "Book Your Festive Dental Check-Up Today"
- BOTTOM NAVY BAND: branch locations in gold text "Guntur • Nellore • Kukatpally • Bachupally • Thubrahalli • Bellandur • Kuwait" and below in white "+91 84978 14447  |  drkiranssmilegroup.com  |  8+ Clinics • Since 1999"

**Style:** Premium festival advertisement poster, rich contrast navy + gold + orange, elegant professional typography, clear hierarchy, salesy but tasteful, high-end healthcare branding.

**Restrictions:** Use ONLY the text listed above — no other words, no prices, no watermarks. Reproduce the provided logo faithfully — do not redraw or modify it. Full bleed, no mockup frames.`;

async function gen() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: { "x-goog-api-key": KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
              { inlineData: { mimeType: "image/png", data: logo } },
            ],
          },
        ],
      }),
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
    path.join(OUT, "diwali-poster-v2.jpg"),
    Buffer.from(img.inlineData.data, "base64")
  );
  console.log("saved diwali-poster-v2.jpg");
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
