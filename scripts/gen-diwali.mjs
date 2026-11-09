import fs from "node:fs";
import path from "node:path";

const cfg = JSON.parse(fs.readFileSync(".devin/mcp_config.local.json", "utf8"));
const KEY = cfg.mcpServers.imagegen.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image";
const OUT = "public/img";

const prompt = `Create a premium, festive Diwali greeting poster for a dental clinic brand called "Dr. Kiran's Smile Group of Dental Hospitals".

**Composition (portrait 4:5 social media poster):**
- Deep navy-blue night background with a warm golden-orange festive glow
- Top: elegant text "Happy Diwali" in large glowing golden serif lettering, with a smaller line "May your smile shine brighter than the diyas" beneath it
- Center: a beautiful arrangement of glowing traditional clay diyas (oil lamps) with warm orange flames, scattered golden sparkles, bokeh lights, and a few marigold flowers
- A bright stylized white tooth subtly glowing among the diya light — cheerful and premium, not cartoonish
- Bottom: exactly ONE line of white text "Dr. Kiran's Smile Group of Dental Hospitals", then a small warm-orange call-to-action pill button: "This Diwali, gift yourself a brighter smile — Book your dental check-up today"

**Style:** Premium festival advertising poster, rich contrast, warm orange/gold glow against deep navy blue, elegant, salesy but tasteful, high-end healthcare branding, crisp professional typography.

**Restrictions:** Only the exact text listed above — no other words, no phone numbers, no prices, no watermarks, no logos other than subtle tooth imagery. Clean, uncluttered layout with clear hierarchy. The artwork must be FULL BLEED, edge-to-edge — do NOT render it as a framed poster, mockup, or card on a colored background.`;

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
  fs.writeFileSync(path.join(OUT, "diwali-poster.jpg"), Buffer.from(img.inlineData.data, "base64"));
  console.log("saved diwali-poster.jpg");
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
