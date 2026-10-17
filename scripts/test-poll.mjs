const prompt =
  "Professional photo of a friendly Indian female dentist in a white coat consulting a smiling patient in a modern bright dental clinic, blue and white interior, soft daylight, photorealistic";
const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
  prompt
)}?width=1024&height=768&model=flux&nologo=true&seed=42`;
const res = await fetch(url);
if (!res.ok) {
  console.log("FAIL", res.status, (await res.text()).slice(0, 300));
  process.exit(1);
}
const fs = await import("node:fs/promises");
await fs.writeFile(
  "public/img/ai-dentist-consult.png",
  Buffer.from(await res.arrayBuffer())
);
console.log("OK — saved public/img/ai-dentist-consult.png");
