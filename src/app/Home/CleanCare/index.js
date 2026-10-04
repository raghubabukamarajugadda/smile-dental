import { PiTooth, PiSprayBottle, PiShieldCheck, PiHandSoap } from "react-icons/pi";
import { LuPhone, LuSparkles } from "react-icons/lu";

const rules = [
  { icon: PiSprayBottle, label: "Sterilized Instruments" },
  { icon: PiShieldCheck, label: "Advanced Infection Control" },
  { icon: PiHandSoap, label: "Regular Sanitization" },
  { icon: LuSparkles, label: "Safe & Clean Environment" },
];

export default function CleanCare() {
  return (
    <section className="sh-clean">
      <div className="sh-container">
        <div className="sh-emergency">
          <div className="sh-emergency__left">
            <span className="sh-emergency__icon">
              <PiTooth />
            </span>
            <div className="sh-emergency__info">
              <strong>Need Emergency Dental Care?</strong>
              <span className="sh-emergency__phone">Call +91 84978 14447</span>
            </div>
          </div>
          <p className="sh-emergency__text">
            Experiencing severe tooth pain or a dental injury? Our emergency team
            is available 24/7 to provide immediate relief and protect your smile.
            Trusted by thousands across India and Kuwait.
          </p>
          <a href="tel:+918497814447" className="sh-emergency__btn">
            <LuPhone /> Call Now
          </a>
        </div>

        <div className="sh-clean__grid">
          <div className="sh-clean__media">
            <img src="/img/sterilization.png" alt="Sterile clinical environment at Smile Group" />
          </div>
          <div className="sh-clean__content">
            <h3 className="sh-clean__title">
              We Maintain Cleanliness Rules Inside Our Hospital
            </h3>
            <p className="sh-clean__sub">
              <em>Strict</em> hygiene protocols for a safe, clean and worry-free
              dental experience.
            </p>
            <div className="sh-clean__cards">
              {rules.map(({ icon: Icon, label }) => (
                <div className="sh-clean__card" key={label}>
                  <span className="sh-clean__card-icon">
                    <Icon />
                  </span>
                  <span className="sh-clean__card-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
