import Link from "next/link";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import {
  FaTrophy,
  FaHospital,
  FaUserGroup,
  FaEarthAsia,
} from "react-icons/fa6";

const stats = [
  { icon: FaTrophy, title: "25+", sub: "Years of Expertise" },
  { icon: FaHospital, title: "8+", sub: "Modern Clinics" },
  { icon: FaUserGroup, title: "25+", sub: "Specialists" },
  { icon: FaEarthAsia, title: "India & Kuwait", sub: "Our Presence" },
];

export default function AboutHero() {
  return (
    <section className="sh-about-hero">
      <div className="sh-about-hero__frame">
        <div
          className="sh-about-hero__bg"
          role="img"
          aria-label="Dr. Kiran and Dr. Kavitha, founders of Smile Group"
        />
        <div className="sh-container sh-about-hero__inner">
          <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <strong>About Us</strong>
          </nav>

          <div className="sh-about-hero__text">
            <span className="sh-about-hero__eyebrow">
              About Dr. Kiran&apos;s Smile Group
            </span>
            <h1>
              A Legacy of
              <br />
              <span>Healthier Smiles</span>
              <br />
              Since 1999
            </h1>
            <p>
              Dr. Kiran&apos;s Smile Group was founded by{" "}
              <strong>Dr. Kiran and Dr. Kavitha</strong> with a simple belief —
              that everyone deserves high-quality, comfortable and affordable
              dental care. Today, we are a trusted network of{" "}
              <strong>8+ modern dental hospitals</strong> across India and
              Kuwait.
            </p>
            <div className="sh-about-hero__actions">
              <Link href="/appointment" className="sh-about-btn sh-about-btn--orange">
                Book Appointment
                <FaArrowRightLong />
              </Link>
              <Link href="#our-story" className="sh-about-btn sh-about-btn--outline">
                Our Story
                <span className="sh-about-btn__play">
                  <FaPlay />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="sh-about-hero__badge sh-about-hero__badge--kiran">
          <strong>Dr. Kiran</strong>
          <span>MDS - Prosthodontist</span>
          <span>Founder &amp; Chief Dentist</span>
        </div>
        <div className="sh-about-hero__badge sh-about-hero__badge--kavitha">
          <strong>Dr. Kavitha</strong>
          <span>MDS - General Dentistry</span>
          <span>Founder &amp; General Dentist</span>
        </div>
      </div>

      <div className="sh-container">
        <div className="sh-about-stats">
          {stats.map(({ icon: Icon, title, sub }) => (
            <div className="sh-about-stats__item" key={sub}>
              <Icon className="sh-about-stats__icon" />
              <div>
                <h4>{title}</h4>
                <p>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
