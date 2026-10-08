import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaTrophy,
  FaHospital,
  FaUserGroup,
  FaEarthAsia,
} from "react-icons/fa6";

const stats = [
  { icon: FaTrophy, title: "25+", sub: "Years of Expertise" },
  { icon: FaUserGroup, title: "25+", sub: "Specialists" },
  { icon: FaHospital, title: "8+", sub: "Clinics" },
  { icon: FaEarthAsia, title: "India & Kuwait", sub: "Our Presence" },
];

export default function ServicesBottom() {
  return (
    <>
      <section className="sh-svc-help">
        <div className="sh-container">
          <div className="sh-svc-help__card">
            <div className="sh-svc-help__media">
              <img
                src="/img/service-details-bg.jpg"
                alt="Dentist guiding a patient"
              />
            </div>
            <div className="sh-svc-help__body">
              <span className="sh-docs-hero__eyebrow">
                Need Help Choosing a Treatment?
              </span>
              <h2>Not sure what you need?</h2>
              <p>Our team can guide you after an examination.</p>
              <div className="sh-svc-help__actions">
                <Link
                  href="/contact"
                  className="sh-docs-hero__btn sh-docs-hero__btn--primary"
                >
                  Talk to a Dentist
                </Link>
                <Link
                  href="/appointment"
                  className="sh-docs-hero__btn sh-docs-hero__btn--orange"
                >
                  Book Appointment
                </Link>
              </div>
              <span className="sh-svc-help__script">
                Your Smile, Our Priority
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="sh-svc-stats">
        <div className="sh-container">
          <div className="sh-docs-hero__stats sh-svc-stats__card">
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

      <section className="sh-svc-banner">
        <div className="sh-container">
          <div className="sh-svc-banner__card">
            <div>
              <h2>Ready to Get a Healthier, Brighter Smile?</h2>
              <p>
                Book appointment with our experienced team and take the first
                step towards better oral health.
              </p>
            </div>
            <Link href="/appointment" className="sh-svc-banner__btn">
              Book Appointment
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
