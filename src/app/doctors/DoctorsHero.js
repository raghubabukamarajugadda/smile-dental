import Link from "next/link";
import { LuUsers, LuBuilding, LuAward, LuGlobe } from "react-icons/lu";

const stats = [
  { icon: LuUsers, value: "25+", label: "Specialists" },
  { icon: LuBuilding, value: "8+", label: "Modern Clinics" },
  { icon: LuAward, value: "25+", label: "Years of Dental Care" },
  { icon: LuGlobe, value: "India & Kuwait", label: "Our Presence" },
];

export default function DoctorsHero() {
  return (
    <section className="sh-docs-hero">
      <div className="sh-container sh-docs-hero__inner">
        <div className="sh-docs-hero__text">
          <span className="sh-story__eyebrow">Our Specialist Team</span>
          <h1>Meet the People Behind Your Smile</h1>
          <p>
            Our team of experienced dentists and specialists work together to
            provide world-class dental care for you and your family across India
            and Kuwait.
          </p>
          <div className="sh-docs-hero__actions">
            <Link href="#team" className="sh-about-btn sh-about-btn--outline">
              Find a Specialist
            </Link>
            <Link href="/appointment" className="sh-about-btn sh-about-btn--orange">
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="sh-docs-hero__media">
          <img src="/img/ourdoccover.png" alt="Smile Group dental clinic" />
        </div>
      </div>

      <div className="sh-container">
        <div className="sh-docs-hero__stats">
          {stats.map(({ icon: Icon, value, label }) => (
            <div className="sh-docs-hero__stat" key={label}>
              <Icon className="sh-docs-hero__stat-icon" />
              <div>
                <h4>{value}</h4>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
