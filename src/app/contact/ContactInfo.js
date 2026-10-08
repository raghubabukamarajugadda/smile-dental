import { FaPhone, FaWhatsapp, FaEnvelope, FaRegClock } from "react-icons/fa6";

const items = [
  {
    icon: FaPhone,
    tone: "blue",
    title: "Call Us",
    lines: ["+91 99434 30443", "+91 93981 19643"],
    href: "tel:+919943430443",
  },
  {
    icon: FaWhatsapp,
    tone: "green",
    title: "WhatsApp",
    lines: ["+91 99434 30443", "Quick response"],
    href: "https://wa.me/919943430443",
  },
  {
    icon: FaEnvelope,
    tone: "blue",
    title: "Email Us",
    lines: ["info@drkiransmilegroup.com", "We'll get back to you soon"],
    href: "mailto:info@drkiransmilegroup.com",
  },
  {
    icon: FaRegClock,
    tone: "orange",
    title: "Working Hours",
    lines: ["Mon - Sat : 9:00 AM - 8:00 PM", "Sunday : 9:00 AM - 2:00 PM"],
  },
];

export default function ContactInfo() {
  return (
    <div className="sh-container">
      <div className="sh-contact-info">
        {items.map(({ icon: Icon, tone, title, lines, href }) => {
          const content = (
            <>
              <span className={`sh-contact-info__icon sh-contact-info__icon--${tone}`}>
                <Icon />
              </span>
              <div>
                <h4>{title}</h4>
                {lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </>
          );
          return href ? (
            <a key={title} href={href} className="sh-contact-info__item">
              {content}
            </a>
          ) : (
            <div key={title} className="sh-contact-info__item">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
