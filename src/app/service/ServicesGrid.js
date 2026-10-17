import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function ToothIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C7.5 2 5.5 6.5 5.5 9c0 2.5 1 4 1.5 5.5.5 1.5.5 4.5 1.5 5.5s2-1 2.5-2.5c.5-1.5 1-2 1.5-2s1 .5 1.5 2c.5 1.5 1.5 3.5 2.5 2.5s1-4 1.5-5.5c.5-1.5 1.5-3 1.5-5.5 0-2.5-2-7-7-7z" />
    </svg>
  );
}

const services = [
  {
    id: "svc-implants",
    image: "dental-implants.jpg",
    title: "Dental Implants",
    desc: "Replace missing teeth with durable, natural-looking implant solutions.",
  },
  {
    id: "svc-braces",
    image: "braces-aligners.jpg",
    title: "Braces & Aligners",
    desc: "Straighten teeth and improve your smile with modern orthodontic options.",
  },
  {
    id: "svc-rootcanal",
    image: "root-canal-treatment.jpg",
    title: "Root Canal Treatment",
    desc: "Treat infected teeth and relieve pain with modern, comfortable RCT.",
  },
  {
    id: "svc-cleaning",
    image: "teeth-cleaning-scaling.jpg",
    title: "Dental Cleaning & Scaling",
    desc: "Professional cleaning to protect healthy teeth and gums.",
  },
  {
    id: "svc-cosmetic",
    image: "cosmetic-dentistry.jpg",
    title: "Cosmetic Dentistry",
    desc: "Enhance the appearance of your smile with personalised cosmetic care.",
  },
  {
    id: "svc-pediatric",
    image: "pediatric-dentistry.jpg",
    title: "Pediatric Dentistry",
    desc: "Gentle, child-friendly dental care for growing smiles.",
  },
  {
    id: "svc-crowns",
    image: "crowns-bridges.jpg",
    title: "Crowns & Bridges",
    desc: "Restore damaged or missing teeth with natural-looking crowns and bridges.",
  },
  {
    id: "svc-gum",
    image: "gum-treatment.jpg",
    title: "Gum Treatment",
    desc: "Care for gum disease and bleeding with advanced treatments.",
  },
  {
    id: "svc-dentures",
    image: "dentures.jpg",
    title: "Dentures",
    desc: "Comfortable full & partial tooth replacement options.",
  },
  {
    id: "svc-wisdom",
    image: "wisdom-tooth-removal.jpg",
    title: "Wisdom Tooth Removal",
    desc: "Safe assessment and removal of problematic wisdom teeth.",
  },
  {
    id: "svc-xray",
    image: "digital-xray-diagnostics.jpg",
    title: "Digital X-Ray & Diagnostics",
    desc: "Accurate imaging to support quick diagnosis and treatment planning.",
  },
  {
    id: "svc-rehab",
    image: "full-mouth-rehabilitation.jpg",
    title: "Full Mouth Rehabilitation",
    desc: "Comprehensive restoration of oral function, comfort and aesthetics.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="sh-svc-grid" id="services">
      <div className="sh-container">
        <div className="sh-svc-grid__head">
          <span className="sh-docs-hero__eyebrow">Our Services</span>
          <h2>Explore Our Dental Services</h2>
          <p>Advanced treatments. Personalized care. A healthier, brighter smile.</p>
        </div>

        <div className="sh-svc-grid__cards">
          {services.map((s) => (
            <article className="sh-svc-card" id={s.id} key={s.id}>
              <div
                className={`sh-svc-card__media${
                  s.contain ? " sh-svc-card__media--contain" : ""
                }`}
              >
                <img src={`/img/${s.image}`} alt={s.title} />
              </div>
              <div className="sh-svc-card__body">
                <span className="sh-svc-card__icon">
                  <ToothIcon />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link
                  href={`/service-details?service=${s.id}`}
                  className="sh-svc-card__link"
                >
                  Learn More <FaArrowRightLong />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
