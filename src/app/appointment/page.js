import Breadcrumbs from "@/components/Breadcrumbs";
import DateInput from "../Home/Appoinment/DateInput";
import WorkHour from "./WorkHour";
import Header from "@/components/Header/Header";

export default function Appointment() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Get Your Appointment" menuText=" Appointment" />

      <section className="appointment single-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12">
              <div className="appointment-inner">
                <div className="title">
                  <h3>Book Your Appointment</h3>
                  <p>We will confirm your appointment within 2 hours</p>
                </div>
                <form className="form" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <select
                          aria-label="Default select example"
                          className="form-select"
                        >
                          <option>Select Branch</option>
                          <option value="1">Guntur - Brindavan Gardens</option>
                          <option value="2">Hyderabad - Kukatpally</option>
                          <option value="3">Bengaluru - Bellandur</option>
                          <option value="4">
                            Nellore - Ramesh Reddy Nagar
                          </option>
                          <option value="5">
                            Kuwait - Hawally Poly Clinic
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <select
                          aria-label="Default select example"
                          className="form-select"
                        >
                          <option>Select Department</option>
                          <option value="1">General Dentistry</option>
                          <option value="2">Orthodontics</option>
                          <option value="3">Cosmetic Dentistry</option>
                          <option value="4">Pediatric Dentistry</option>
                          <option value="5">Dental Implants</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <DateInput />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Tell us about your dental concerns..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <div className="button">
                          <button type="submit" className="btn">
                            Book An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <WorkHour />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
