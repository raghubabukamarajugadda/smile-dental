import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

export default function AboutCta() {
  return (
    <section className="sh-about-cta">
      <div className="sh-container">
        <div className="sh-about-cta__banner">
          <div className="sh-about-cta__content">
            <div className="sh-about-cta__text">
              <span className="sh-about-cta__eyebrow">Your Smile Matters</span>
              <h2>Ready for a Healthier, Brighter Smile?</h2>
              <p>
                Visit our nearest clinic or book an appointment today. Our team is
                here to help you with personalized, professional and compassionate
                dental care.
              </p>
              <div className="sh-about-cta__actions">
                <Link
                  href="/appointment"
                  className="sh-about-cta__btn sh-about-cta__btn--orange"
                >
                  Book Appointment
                  <FaArrowRightLong />
                </Link>
                <a
                  href="tel:+918497814447"
                  className="sh-about-cta__btn sh-about-cta__btn--outline"
                >
                  <LuPhone />
                  Call +91 84978 14447
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
