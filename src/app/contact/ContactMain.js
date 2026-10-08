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

const locations = [
  { name: "Guntur", addr: "Arundelpet, Guntur, Andhra Pradesh" },
  { name: "Vijayawada", addr: "Moghalrajapuram, Vijayawada, Andhra Pradesh" },
  { name: "Kakinada", addr: "Rama Rao Peta, Kakinada, Andhra Pradesh" },
  { name: "Rajahmundry", addr: "Morampudi, Rajahmundry, Andhra Pradesh" },
  { name: "Ongole", addr: "Mangamuru Road, Ongole, Andhra Pradesh" },
  { name: "Chennai", addr: "Poonamallee, Chennai, Tamil Nadu" },
  { name: "Kuwait", addr: "Fahaheel, Kuwait" },
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
            <iframe
              title="Smile Group clinic locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.19250436279!2d80.41859207576356!3d16.3131052328618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a757cd1e93281%3A0x175c834c89696b1f!2sSmile%20Dental%20Clinics%20-%20Best%20Dental%20Hospital%20in%20Guntur%20for%20RCT%2C%20Dental%20Implants%20and%20Oral%20Health%20Care!5e0!3m2!1sen!2sin!4v1741255258215!5m2!1sen!2sin"
              loading="lazy"
            />
          </div>

          <div className="sh-contact-card sh-contact-locs">
            <h3>Our Locations</h3>
            <p>Visit us at our conveniently located clinics.</p>
            <ul>
              {locations.map((l) => (
                <li key={l.name}>
                  <span className="sh-contact-locs__pin">
                    <LuMapPin />
                  </span>
                  <div>
                    <strong>{l.name}</strong>
                    <span>{l.addr}</span>
                  </div>
                  <LuChevronRight className="sh-contact-locs__chev" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
