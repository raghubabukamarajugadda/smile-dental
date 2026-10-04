import Link from "next/link";
import { FaUsers, FaArrowRightLong } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { BsChatDotsFill } from "react-icons/bs";
import { PiTooth, PiUsersThree, PiShieldCheck, PiHeart } from "react-icons/pi";

const features = [
  { icon: PiTooth, lines: ["Advanced", "Technology"] },
  { icon: PiUsersThree, lines: ["Experienced", "Team"] },
  { icon: PiShieldCheck, lines: ["Safe & Hygienic", "Environment"] },
  { icon: PiHeart, lines: ["Personalized", "Care"] },
];

const highlights = [
  "Advanced Dental Care",
  "Experienced Specialists",
  "Modern Technology",
  "Compassionate Approach",
];

export default function Sliders() {
  return (
    <section className="sh-hero">
      {/* Background artwork: slider.png keeps its 3:1 ratio, anchored right */}
      <div className="sh-hero__art">
        <div className="sh-hero__img" role="img" aria-label="Happy family with Dr. Kiran at Smile Dental" />

        <div className="sh-hero__script" aria-hidden="true">
          <span>Expert Care</span>
          <span>Comfortable Experience</span>
          <span>Beautiful Smiles</span>
          <svg className="sh-hero__smile" viewBox="0 0 90 34" fill="none">
            <path d="M4 8 C 20 30, 56 32, 80 10" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M68 7 L81 9 L77 21" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="sh-hero__doctor">
          <h5>Dr. Kiran</h5>
          <p>MDS - Prosthodontist</p>
          <p>Founder &amp; Chief Dentist</p>
        </div>
      </div>

      <div className="sh-container sh-hero__content">
        <div className="sh-hero__text">
          <span className="sh-hero__badge">
            <FaUsers /> Trusted by 50,000+ Happy Patients
          </span>
          <h1 className="sh-hero__title">
            Healthy Smiles
            <br />
            <span>for a Brighter</span>
            <br />
            Tomorrow
          </h1>
          <p className="sh-hero__subtitle">
            {highlights.map((item, i) => (
              <span key={item}>
                {item}
                {i < highlights.length - 1 && <i className="sh-hero__pipe">|</i>}
                {i === 1 && <br />}
              </span>
            ))}
          </p>
          <div className="sh-hero__actions">
            <Link href="/appointment" className="sh-btn sh-btn--orange sh-btn--lg">
              <LuCalendarDays className="sh-btn__icon" />
              Book Appointment
              <FaArrowRightLong className="sh-btn__arrow" />
            </Link>
            <Link href="/doctors" className="sh-btn sh-btn--outline sh-btn--lg">
              <BsChatDotsFill className="sh-btn__icon sh-btn__icon--blue" />
              Consult a Dentist
            </Link>
          </div>
        </div>
      </div>

      <div className="sh-hero__features">
        <div className="sh-container">
          <ul className="sh-hero__features-list">
            {features.map(({ icon: Icon, lines }) => (
              <li key={lines.join(" ")}>
                <span className="sh-hero__feature-icon">
                  <Icon />
                </span>
                <span className="sh-hero__feature-text">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
