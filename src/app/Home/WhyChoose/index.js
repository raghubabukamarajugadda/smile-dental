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
                title="Comprehensive Dental Care for Lifelong Smiles"
                desc="Combining advanced technology with compassionate care, we deliver personalized solutions for all your oral health needs."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
              <h3>Our Dental Legacy</h3>
              <p>
                  Established in 1999, Dr. Kiran's Smile Group has grown from a single clinic to a network of 8+ 
                  state-of-the-art dental hospitals across India and Kuwait. Our team of 25+ specialists brings 
                  global expertise to every treatment, ensuring world-class care close to home.
                </p>
                <p>
                  We prioritize pain-free dentistry using cutting-edge technologies like digital scans, laser treatments, 
                  and premium implants, making dental visits comfortable for patients of all ages.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>Maecenas vitae
                        luctus nibh.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Duis massa massa.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Aliquam feugiat
                        interdum.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i>Maecenas vitae
                        luctus nibh.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Duis massa massa.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Aliquam feugiat
                        interdum.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
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
