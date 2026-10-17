const API_KEY = process.env.OPENAI_API_KEY;
const res = await fetch("https://api.openai.com/v1/models", {
  headers: { Authorization: `Bearer ${API_KEY}` },
});
if (!res.ok) {
  console.log("AUTH FAIL:", res.status, (await res.text()).slice(0, 300));
  process.exit(1);
}
const data = await res.json();
console.log(
  "auth OK. image-capable models:",
  (data.data || [])
    .map((m) => m.id)
    .filter((id) => /image|dall/i.test(id))
    .join(", ") || "(none listed)"
);
