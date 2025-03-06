import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";

export default function Contact() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Contact Us" menuText="Contact Us" />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.19250436279!2d80.41859207576356!3d16.3131052328618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a757cd1e93281%3A0x175c834c89696b1f!2sSmile%20Dental%20Clinics%20-%20Best%20Dental%20Hospital%20in%20Guntur%20for%20RCT%2C%20Dental%20Implants%20and%20Oral%20Health%20Care!5e0!3m2!1sen!2sin!4v1741255258215!5m2!1sen!2sin">

                      </iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Contact Us</h2>
                  <p>
                    Have questions or need to schedule an appointment? Reach out
                    to us—we’re here to help!
                  </p>
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Send Message
                          </button>
                        </div>
                        <div className="checkbox">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Subscribe to our newsletter for updates and
                              offers.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              {/* Guntur Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smile Dental Clinics - Guntur</h3>
                    <p>Brindavan Gardens, Opp. Ayyappa Swamy Temple</p>
                    <p>Phone: 0863-2329444, +91 95502 31862</p>
                  </div>
                </div>
              </div>

              {/* Nellore Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smile Super Speciality Dental Hospital - Nellore</h3>
                    <p>Kandukuri Shopping Mall, opposite Road, Ramesh Reddy Nagar, Nellore, Andhra Pradesh 524003</p>
                    <p>Phone: +91 92464 34447 , 0861-2330949</p>
                  </div>
                </div>
              </div>

              {/* Hyderabad Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smile Dental Clinic Hyderabad - Kukatpally</h3>
                    <p>#416A, Allwyn Colony Phase 1, Pipeline Road, Kukatpally - 500072</p>
                    <p>Phone: +91 +91 72889 94441 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              {/* Kuwait Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smile Dental Clinics Hyderabad - Kukatpally</h3>
                    <p>#2-23-483, HMT Hills, Ramalayam Temple Backside, Pragathi Nagar, Kukatpally - 500085</p>
                    <p>Phone: +91 80963 34447</p>
                  </div>
                </div>
              </div>

              {/* Bengaluru Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smile Dental Clinics - Hyderabad - Bachupally</h3>
                    <p>D.No. 2-62/94/HRCP/S-3/A/1, HRC Pride, Nizampet, Bachupally, Hyderabad - 500090 </p>
                    <p>Phone: +91 80963 34447 </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smilax Dental - Bellandur </h3>
                    <p>78/11 old sy. no 78/3, opp: Bangalore Central Mall, behind Bhagini, Bellandur, Bengaluru, Karnataka 560103</p>
                    <p>Phone: +91 73537 24447 , 084978 14447  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="row">
              {/* Kuwait Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Smilax Dental Clinic - Thubrahalli </h3>
                    <p>Bus Stop, No 2, 2nd Floor, Varthur Rd, near Thubrahalli, Thubarahalli, Thub, Bengaluru, Karnataka 560066 </p>
                    <p>Phone: +91 73537 24447 , 08548 54447</p>
                  </div>
                </div>
              </div>

              {/* Bengaluru Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>E l Joun Medical Center - Kuwait</h3>
                    <p>Edaillia, Kuwait </p>
                    <p>Phone: +91 73537 24447</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Hawally Poly Clinic - Kuwait</h3>
                    <p>B. Clinic, Modern Arab Dental Centre, 8th Floor, B. Tower, Salmiya  </p>
                    <p>Phone: 0965 52224155 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
