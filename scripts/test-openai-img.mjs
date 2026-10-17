const API_KEY = process.env.OPENAI_API_KEY;
const res = await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "dall-e-2",
    prompt: "a simple blue tooth icon",
    size: "256x256",
    n: 1,
  }),
});
if (!res.ok) {
  console.log("FAIL:", res.status, (await res.text()).slice(0, 400));
  process.exit(1);
}
const data = await res.json();
console.log("OK — image URL:", data.data?.[0]?.url?.slice(0, 80) || JSON.stringify(data.data?.[0]));
