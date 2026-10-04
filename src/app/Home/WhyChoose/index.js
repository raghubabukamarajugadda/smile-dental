import Link from "next/link";
import {
  LuTrophy,
  LuHeartPulse,
  LuBriefcaseMedical,
  LuLanguages,
  LuArrowRight,
} from "react-icons/lu";
import { PiHospital, PiUsersThree } from "react-icons/pi";

import Video from "./Video";

const features = [
  { icon: LuTrophy, label: "25+ Years Expertise", tint: "blue" },
  { icon: LuHeartPulse, label: "Pain-Free Technology", tint: "pink" },
  { icon: PiHospital, label: "8 Modern Clinics", tint: "cyan" },
  { icon: PiUsersThree, label: "Child-Friendly Care", tint: "navy" },
  { icon: LuBriefcaseMedical, label: "24/7 Emergency Service", tint: "red" },
  { icon: LuLanguages, label: "Multilingual Support", tint: "purple" },
];

export default function WhyChoose() {
  return (
    <>
      <section className="why-choose section">
        <div className="sh-container">
          <div className="row align-items-stretch">
            <div className="col-lg-6 col-12">
              <div className="sh-legacy">
                <h3 className="sh-legacy__title">Our Dental Legacy</h3>
                <p className="sh-legacy__text">
                  Established in 1999, Dr. Kiran&apos;s Smile Group has grown from a single clinic to a network of 8+
                  state-of-the-art dental hospitals across India and Kuwait. Our team of 25+ specialists brings
                  global expertise to every treatment, ensuring world-class care close to home.
                </p>
                <p className="sh-legacy__text">
                  We prioritize pain-free dentistry using cutting-edge technologies like digital scans, laser treatments,
                  and premium implants, making dental visits comfortable for patients of all ages.
                </p>
                <div className="sh-legacy__grid">
                  {features.map(({ icon: Icon, label, tint }) => (
                    <div className="sh-legacy__item" key={label}>
                      <span className={`sh-legacy__icon sh-legacy__icon--${tint}`}>
                        <Icon />
                      </span>
                      <span className="sh-legacy__label">{label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="sh-btn sh-btn--blue sh-legacy__cta">
                  Learn More About Us
                  <LuArrowRight className="sh-btn__arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="sh-legacy__media">
                <img
                  src="/img/dental_legacy.png"
                  alt="Dr. Kiran's Smile Group clinic reception"
                />
                <Video />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
