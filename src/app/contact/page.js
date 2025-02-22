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
                      src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
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
                    <h3>Guntur</h3>
                    <p>Brindavan Gardens, Opp. Ayyappa Swamy Temple</p>
                    <p>Phone: +91 95502 31862</p>
                  </div>
                </div>
              </div>

              {/* Nellore Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Nellore</h3>
                    <p>Kandukuri Shopping Mall, Ramesh Reddy Nagar</p>
                    <p>Phone: +91 92464 34447</p>
                  </div>
                </div>
              </div>

              {/* Hyderabad Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Hyderabad</h3>
                    <p>Pipeline Road, Kukatpally</p>
                    <p>Phone: +91 80963 34447</p>
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
                    <h3>Kuwait</h3>
                    <p>Hawally Poly Clinic, Salmiya</p>
                    <p>Phone: +965 52224155</p>
                  </div>
                </div>
              </div>

              {/* Bengaluru Branch */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>Bengaluru</h3>
                    <p>Opposite Bangalore Central Mall, Bellandur</p>
                    <p>Phone: +91 73537 24447</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Opening Hours</h3>
                    <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
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
