"use client";

import {
  LuUser,
  LuPhone,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuChevronRight,
} from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

import dynamic from "next/dynamic";

// Leaflet accesses window at import time — must never render on the server
const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => <div className="sh-contact-map__leaflet" />,
});

const locations = [
  {
    name: "Smile Dental Clinics - Guntur",
    addr: "Opp. Ayyappa Swamy Temple, Brindavan Gardens, Guntur, Andhra Pradesh 522006",
  },
  {
    name: "Smile Super Specialty Dental Hospital - Nellore",
    addr: "Kandukuri Shopping Mall, Ramesh Reddy Nagar, Nellore, Andhra Pradesh 524003",
  },
  {
    name: "Smilax Dental Clinic - Thubrahalli",
    addr: "No 2, Varthur Main Rd, near Thubrahalli Bus Stop, Bengaluru, Karnataka 560066",
  },
  {
    name: "Smilax Dental Clinics - Bellandur",
    addr: "Sy. No 78, Soul Space Spirit Central Mall, Bellandur, Bengaluru, Karnataka 560103",
  },
];

export default function ContactMain() {
  return (
    <section className="sh-contact-main">
      <div className="sh-container">
        <div className="sh-contact-main__grid">
          <div className="sh-contact-card">
            <h3>Send Us a Message</h3>
            <p>Fill in your details and we&apos;ll get back to you as soon as possible.</p>
            <form
              className="sh-contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="sh-contact-form__row">
                <label className="sh-contact-form__field">
                  <LuUser />
                  <input type="text" placeholder="Your Name*" required />
                </label>
                <label className="sh-contact-form__field">
                  <LuPhone />
                  <input type="tel" placeholder="Phone Number*" required />
                </label>
              </div>
              <div className="sh-contact-form__row">
                <label className="sh-contact-form__field">
                  <LuMail />
                  <input type="email" placeholder="Email Address*" required />
                </label>
                <label className="sh-contact-form__field">
                  <LuMapPin />
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select Location*
                    </option>
                    {locations.map((l) => (
                      <option key={l.name} value={l.name}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="sh-contact-form__field sh-contact-form__field--area">
                <LuMessageSquare />
                <textarea placeholder="Your Message*" rows={4} required />
              </label>
              <button type="submit" className="sh-contact-form__btn">
                Send Message
                <FaArrowRightLong />
              </button>
            </form>
          </div>

          <div className="sh-contact-card sh-contact-map">
            <ContactMap />
          </div>

          <div className="sh-contact-card sh-contact-locs">
            <h3>Our Locations</h3>
            <p>Visit us at our conveniently located clinics.</p>
            <ul>
              {locations.map((l) => (
                <li key={l.name}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${l.name}, ${l.addr}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sh-contact-locs__link"
                  >
                    <span className="sh-contact-locs__pin">
                      <LuMapPin />
                    </span>
                    <div>
                      <strong>{l.name}</strong>
                      <span>{l.addr}</span>
                    </div>
                    <LuChevronRight className="sh-contact-locs__chev" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
