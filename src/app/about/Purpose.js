import { LuTarget, LuEye, LuHeart } from "react-icons/lu";
import {
  FaUserDoctor,
  FaMicroscope,
  FaShieldHeart,
  FaTags,
  FaUserGroup,
} from "react-icons/fa6";

const purpose = [
  {
    icon: LuTarget,
    title: "Our Mission",
    variant: "blue",
    text: "To provide high-quality, ethical and affordable dental care using advanced technology and a patient-first approach.",
  },
  {
    icon: LuEye,
    title: "Our Vision",
    variant: "orange",
    text: "To be a trusted and preferred dental care provider, known for clinical excellence, innovation and compassionate care.",
  },
  {
    icon: LuHeart,
    title: "Our Values",
    variant: "blue",
    list: [
      "Patient-first care",
      "Clinical excellence",
      "Transparency and integrity",
      "Continuous learning",
      "Accessible and affordable care",
    ],
  },
];

const differentiators = [
  { Icon: FaUserDoctor, title: "Experienced Specialists", text: "A team of 25+ specialists across all dental fields." },
  { Icon: FaMicroscope, title: "Advanced Technology", text: "Digital scans, laser treatments and modern equipment." },
  { Icon: FaShieldHeart, title: "Safe & Hygienic Environment", text: "Strict sterilization and cleanliness protocols." },
  { Icon: FaTags, title: "Affordable Pricing", text: "Quality dental care that is accessible." },
  { Icon: FaUserGroup, title: "Family-Friendly Care", text: "Comfortable care for patients of all ages." },
];

export default function Purpose() {
  return (
    <section className="sh-purpose">
      <div className="sh-container">
        <div className="sh-purpose__head">
          <span className="sh-story__eyebrow">Our Purpose</span>
          <h2>Guided by a Clear Vision</h2>
        </div>

        <div className="sh-purpose__grid">
          {purpose.map(({ icon: Icon, title, variant, text, list }) => (
            <div className={`sh-purpose-card sh-purpose-card--${variant}`} key={title}>
              <span className="sh-purpose-card__icon">
                <Icon />
              </span>
              <div className="sh-purpose-card__body">
                <h3>{title}</h3>
                {text ? (
                  <p>{text}</p>
                ) : (
                  <ul>
                    {list.map((item) => (
                      <li key={item}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="16"
                          height="16"
                          aria-hidden="true"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="sh-purpose__head sh-purpose__head--second">
          <span className="sh-story__eyebrow">What Makes Us Different</span>
          <h2>More Than Just a Dental Clinic</h2>
        </div>

        <div className="sh-different">
          {differentiators.map(({ Icon, title, text }, idx, arr) => (
            <div className="sh-different__item" key={title}>
              <Icon className="sh-different__icon" />
              <h4>{title}</h4>
              <p>{text}</p>
              {idx !== arr.length - 1 && <span className="sh-different__line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
