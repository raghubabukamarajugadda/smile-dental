import { LuMailOpen } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Newsletter() {
  return (
    <section className="sh-newsletter">
      <div className="sh-container">
        <div className="sh-newsletter__inner">
          <div className="sh-newsletter__text">
            <span className="sh-newsletter__icon">
              <LuMailOpen />
            </span>
            <div>
              <h2>Join Our Smile Community</h2>
              <p>
                Stay updated with the latest dental tips, exclusive offers, and
                expert advice to keep your smile healthy and bright.
              </p>
            </div>
          </div>
          <form
            action="mail/mail.php"
            method="get"
            className="sh-newsletter__form"
          >
            <input
              name="EMAIL"
              placeholder="Your email address"
              required
              type="email"
            />
            <button type="submit" className="sh-btn sh-btn--orange">
              Subscribe <FaArrowRightLong className="sh-btn__arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
