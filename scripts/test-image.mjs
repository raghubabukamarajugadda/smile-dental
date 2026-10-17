// quick one-off test of the Gemini image API
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash-image";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const res = await fetch(url, {
  method: "POST",
  headers: {
    "x-goog-api-key": API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    contents: [
      {
        parts: [
          {
            text: "A friendly tooth mascot character waving, flat vector illustration, blue and white color scheme, clean minimal style, white background",
          },
        ],
      },
    ],
    generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
  }),
});

if (!res.ok) {
  console.log("HTTP", res.status, await res.text());
  process.exit(1);
}
const data = await res.json();
const parts = data?.candidates?.[0]?.content?.parts || [];
const img = parts.find((p) => p?.inlineData?.data);
if (img) {
  const fs = await import("node:fs/promises");
  await fs.writeFile(
    "public/img/ai-test-tooth.png",
    Buffer.from(img.inlineData.data, "base64")
  );
  console.log("OK — saved public/img/ai-test-tooth.png,", img.inlineData.mimeType);
} else {
  console.log("NO IMAGE:", JSON.stringify(data).slice(0, 500));
}
