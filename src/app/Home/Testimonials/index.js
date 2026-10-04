import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import Sliders from "./Sliders";

export default function Testimonial() {
  return (
    <section className="sh-reviews">
      <div className="sh-container">
        <div className="sh-sec-head">
          <div className="sh-sec-head__text">
            <h2>What Our Patients Say</h2>
            <p>
              Real stories. Real smiles. Trusted by thousands across India and
              Kuwait.
            </p>
          </div>
          <Link href="/testimonials" className="sh-sec-head__link">
            View All Reviews <FaArrowRightLong />
          </Link>
        </div>

        <Sliders />
      </div>
    </section>
  );
}
