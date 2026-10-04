import Link from "next/link";
import { FaLocationDot, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";

const branches = ["Andhra Pradesh", "Telangana", "Karnataka", "Kuwait"];

const socials = [
  { label: "Facebook", href: "#", icon: FaFacebook, className: "is-facebook" },
  { label: "Instagram", href: "#", icon: FaInstagram, className: "is-instagram" },
  { label: "YouTube", href: "#", icon: FaYoutube, className: "is-youtube" },
  { label: "Google Maps", href: "#", icon: SiGooglemaps, className: "is-maps" },
];

export default function Topbar() {
  return (
    <div className="topbar sh-topbar">
      <div className="sh-container sh-topbar__row">
        <div className="sh-topbar__branches">
          <FaLocationDot className="sh-topbar__pin" />
          <strong>Our Branches:</strong>
          {branches.map((branch, i) => (
            <span key={branch} className="sh-topbar__branch">
              {i > 0 && <span className="sh-topbar__sep">|</span>}
              {branch}
            </span>
          ))}
        </div>
        <div className="sh-topbar__contact">
          <Link href="tel:+918497814447">
            <FaPhone className="sh-topbar__icon" /> +91 84978 14447
          </Link>
          <Link href="mailto:contact@drkiranssmilegroup.com">
            <FaEnvelope className="sh-topbar__icon" /> contact@drkiranssmilegroup.com
          </Link>
          <div className="sh-topbar__socials">
            {socials.map(({ label, href, icon: Icon, className }) => (
              <Link key={label} href={href} aria-label={label} className={className}>
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
