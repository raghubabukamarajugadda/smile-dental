import Link from "next/link";
import { LuSearch, LuCalendar } from "react-icons/lu";
import {
  FaUserGroup,
  FaHospital,
  FaTrophy,
  FaEarthAsia,
} from "react-icons/fa6";

const stats = [
  { icon: FaUserGroup, title: "25+", sub: "Specialists" },
  { icon: FaHospital, title: "8+", sub: "Modern Clinics" },
  { icon: FaTrophy, title: "25+", sub: "Years of Dental Care" },
  { icon: FaEarthAsia, title: "India & Kuwait", sub: "Our Presence" },
];

export default function DoctorsHero() {
  return (
    <section className="sh-docs-hero">
      <div className="sh-container sh-docs-hero__inner">
        <div className="sh-docs-hero__text">
          <nav className="sh-docs-hero__crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <strong>Our Doctors</strong>
          </nav>
          <span className="sh-docs-hero__eyebrow">Our Dental Team</span>
          <h1>
            Meet the People
            <span>Behind Your Smile</span>
          </h1>
          <p>
            Our team of experienced dentists and specialists work together to
            provide personalised, high-quality dental care for you and your
            family across India and Kuwait.
          </p>
          <div className="sh-docs-hero__actions">
            <Link href="#team" className="sh-docs-hero__btn sh-docs-hero__btn--primary">
              <LuSearch />
              Find a Specialist
            </Link>
            <Link href="/appointment" className="sh-docs-hero__btn sh-docs-hero__btn--orange">
              <LuCalendar />
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
          {stats.map(({ icon: Icon, title, sub }) => (
            <div className="sh-docs-hero__stat" key={sub}>
              <Icon className="sh-docs-hero__stat-icon" />
              <div>
                <h4>{title}</h4>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
