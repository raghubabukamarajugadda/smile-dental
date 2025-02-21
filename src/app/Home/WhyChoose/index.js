import SectionHead from "@/components/SectionHead";

import Video from "./Video";

export default function WhyChoose() {
  return (
    <>
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Where Exceptional Dental Care Meets Compassion"
                desc="For over two decades, we've combined cutting-edge technology with personalized care to transform smiles across India and Kuwait."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>Pioneers in Dental Excellence</h3>
                <p>
                  Established in 1999, Dr. Kiran's Smile Group has grown from a
                  single clinic in Andhra Pradesh to a network of 8+
                  state-of-the-art dental hospitals. Our journey has been guided
                  by a simple philosophy: every smile deserves expert care and
                  lasting solutions.
                </p>
                <p>
                  From routine check-ups to complex smile makeovers, our team of
                  25+ specialists leverages advanced digital imaging, painless
                  laser treatments, and implant technologies to deliver results
                  that exceed expectations.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>25+ Years of
                        Expertise
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Pain-Free Treatment
                        Protocols
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>8 Modern Clinics
                        Nationwide
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>Child-Friendly
                        Dental Care
                      </li>
                      <li>
                        <i className="fa-caret-right"></i>24/7 Emergency
                        Services
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Multilingual
                        Support Team
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              {/* Video component remains unchanged */}
              <div className="choose-right">
                <div className="video-image">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                  <Video />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
