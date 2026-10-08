import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuCalendarDays, LuHeadphones, LuClipboardList } from "react-icons/lu";

const cards = [
  {
    icon: LuCalendarDays,
    tone: "blue",
    title: "Book an Appointment",
    desc: "Schedule your visit at a time that suits you. We're here to make your dental care convenient and comfortable.",
    cta: "Book Now",
    href: "/appointment",
    filled: true,
  },
  {
    icon: LuHeadphones,
    tone: "orange",
    title: "Need Assistance?",
    desc: "Our team is available to answer your questions and guide you with the right treatment options.",
    cta: "Talk to Our Team",
    href: "tel:+919943430443",
    filled: false,
  },
  {
    icon: LuClipboardList,
    tone: "green",
    title: "For Referrals & Collaborations",
    desc: "Dental professionals and partners can reach out to us for referrals, collaborations and other enquiries.",
    cta: "Contact Us",
    href: "mailto:info@drkiransmilegroup.com",
    filled: false,
  },
];

export default function ContactHelp() {
  return (
    <section className="sh-contact-help">
      <div className="sh-container">
        <div className="sh-contact-help__grid">
          {cards.map(({ icon: Icon, tone, title, desc, cta, href, filled }) => (
            <div className="sh-contact-help__card" key={title}>
              <span className={`sh-contact-help__icon sh-contact-help__icon--${tone}`}>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link
                href={href}
                className={`sh-contact-help__btn${
                  filled ? " sh-contact-help__btn--filled" : ""
                }`}
              >
                {cta}
                <FaArrowRightLong />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
