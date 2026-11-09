import fs from "node:fs";
import sharp from "sharp";

const W = 1080;
const H = 1350;
const NAVY = "#0d2f66";
const GOLD = "#f5b942";
const ORANGE = "#e8712a";

const bg = sharp("public/img/diwali-bg.jpg").resize(W, H, { fit: "cover" });

const logoMeta = await sharp("public/img/logo_smile.png").metadata();
const logoW = 430;
const logoH = Math.round((logoMeta.height / logoMeta.width) * logoW);
const logo = await sharp("public/img/logo_smile.png")
  .resize(logoW, logoH)
  .png()
  .toBuffer();

// white panel behind logo (logo has white bg)
const pad = 26;
const panelW = logoW + pad * 2;
const panelH = logoH + pad * 2;
const panelX = (W - panelW) / 2;
const panelY = 44;
const logoX = (W - logoW) / 2;
const logoY = panelY + pad;

const bandTop = panelY + panelH; // headline zone sits between panel and diya band

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ctaGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f07b2c"/>
      <stop offset="1" stop-color="#e05a10"/>
    </linearGradient>
    <linearGradient id="fadeUp" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${NAVY}" stop-opacity="0"/>
      <stop offset="1" stop-color="${NAVY}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>

  <!-- logo panel -->
  <rect x="${panelX}" y="${panelY}" width="${panelW}" height="${panelH}"
        rx="26" fill="#ffffff" opacity="0.97"/>

  <!-- headline -->
  <text x="${W / 2}" y="${bandTop + 52}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-weight="bold"
        font-size="64" fill="${GOLD}" letter-spacing="1">Happy Diwali</text>
  <text x="${W / 2}" y="${bandTop + 92}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-style="italic"
        font-size="26" fill="#ffe9c4">May your smile shine brighter than the diyas</text>

  <!-- bottom info zone -->
  <rect x="0" y="${H - 250}" width="${W}" height="250" fill="url(#fadeUp)"/>
  <rect x="0" y="${H - 150}" width="${W}" height="150" fill="${NAVY}"/>

  <rect x="${(W - 660) / 2}" y="${H - 238}" width="660" height="62" rx="31"
        fill="url(#ctaGrad)"/>
  <text x="${W / 2}" y="${H - 199}" text-anchor="middle"
        font-family="'Segoe UI', Arial, sans-serif" font-weight="bold"
        font-size="26" fill="#ffffff">Book Your Festive Dental Check-Up Today</text>

  <text x="${W / 2}" y="${H - 108}" text-anchor="middle"
        font-family="'Segoe UI', Arial, sans-serif" font-weight="600"
        font-size="22" fill="${GOLD}">Guntur  •  Nellore  •  Kukatpally  •  Bachupally  •  Thubrahalli  •  Bellandur  •  Kuwait</text>

  <text x="${W / 2}" y="${H - 62}" text-anchor="middle"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="22" fill="#dce8fb">+91 84978 14447   |   drkiranssmilegroup.com   |   8+ Clinics  •  Since 1999</text>
</svg>`;

await sharp(await bg.toBuffer())
  .composite([
    { input: Buffer.from(svg), top: 0, left: 0 },
    { input: logo, top: logoY, left: logoX },
  ])
  .jpeg({ quality: 92 })
  .toFile("public/img/diwali-poster.jpg");

console.log("composed diwali-poster.jpg", { logoW, logoH, bandTop });
