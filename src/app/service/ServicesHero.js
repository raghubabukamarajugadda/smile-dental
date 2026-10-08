import Link from "next/link";
import {
  LuSearch,
  LuCalendar,
  LuLayoutGrid,
  LuSparkles,
  LuSmile,
  LuBaby,
  LuShieldCheck,
} from "react-icons/lu";

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

function ImplantIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c-3.4 0-4.8 2.2-4.8 4 0 1.1.4 1.9.8 2.5h8c.4-.6.8-1.4.8-2.5 0-1.8-1.4-4-4.8-4z" />
      <path d="M9 11.5v2l1 8h4l1-8v-2" />
      <path d="M9.5 14h5" />
      <path d="M9.8 17h4.4" />
    </svg>
  );
}

const pills = [
  { icon: LuLayoutGrid, label: "All Services", href: "#services", active: true },
  { icon: ToothIcon, label: "General Dentistry", href: "#svc-cleaning" },
  { icon: LuShieldCheck, label: "Restorative", href: "#svc-crowns" },
  { icon: LuSparkles, label: "Cosmetic", href: "#svc-cosmetic" },
  { icon: LuSmile, label: "Orthodontics", href: "#svc-braces" },
  { icon: ImplantIcon, label: "Implant Dentistry", href: "#svc-implants" },
  { icon: LuBaby, label: "Children", href: "#svc-pediatric" },
];

export default function ServicesHero() {
  return (
    <section className="sh-docs-hero sh-svc-hero">
      <div className="sh-container sh-docs-hero__inner">
        <div className="sh-docs-hero__text">
          <nav className="sh-docs-hero__crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <strong>Dental Services</strong>
          </nav>
          <span className="sh-docs-hero__eyebrow">Dental Services</span>
          <h1>
            Complete Dental Care,
            <span>All in One Place</span>
          </h1>
          <p>
            From preventive care to advanced treatments, our specialists provide
            personalized dental care for patients of all ages.
          </p>
          <div className="sh-docs-hero__actions">
            <Link href="#services" className="sh-docs-hero__btn sh-docs-hero__btn--primary">
              <LuSearch />
              Find a Treatment
            </Link>
            <Link href="/appointment" className="sh-docs-hero__btn sh-docs-hero__btn--orange">
              <LuCalendar />
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="sh-docs-hero__media">
          <img src="/img/servicesHero.png" alt="Dentist treating a patient" />
        </div>
      </div>

      <div className="sh-container">
        <div className="sh-svc-pills">
          {pills.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`sh-svc-pill${active ? " sh-svc-pill--active" : ""}`}
            >
              <Icon />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
