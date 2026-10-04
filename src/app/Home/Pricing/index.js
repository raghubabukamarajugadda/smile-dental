import Link from "next/link";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";

const points = [
  "Clear & Transparent Pricing",
  "Quality Treatment at Affordable Rates",
  "No Hidden Costs",
  "Easy EMI Options Available",
];

export default function Pricing() {
  return (
    <section className="sh-pricing">
      <div className="sh-container">
        <div className="sh-pricing__grid">
          <div className="sh-pricing__media">
            <img src="/img/pricing.png" alt="Affordable dental care pricing" />
          </div>
          <div className="sh-pricing__content">
            <h2 className="sh-pricing__title">
              Affordable, Transparent Pricing for Exceptional Dental Care
            </h2>
            <p className="sh-pricing__sub">
              We believe quality dental care should be accessible to everyone.
              Explore our competitive pricing for a wide range of treatments, from
              routine checkups to advanced procedures.
            </p>
            <div className="sh-pricing__points">
              {points.map((point) => (
                <div className="sh-pricing__point" key={point}>
                  <LuCircleCheck />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="sh-btn sh-btn--blue sh-pricing__cta">
              View Treatment Costs
              <LuArrowRight className="sh-btn__arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
