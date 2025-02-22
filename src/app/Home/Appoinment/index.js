import Image from "next/image";
import SectionHead from "@/components/SectionHead";

import ContactImg from "../../../../public/img/contact-img.png";
import DateInput from "./DateInput";

export default function Appoinment() {
  return (
    <>
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Your Smile Deserves the Best Care. Book An Appointment Today!"
                desc="Schedule your visit with our expert dental team for personalized, pain-free treatments tailored to your needs."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Your Name" />
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
                      <select
                        aria-label="Default select example"
                        className="form-select"
                      >
                        <option>Select Branch</option>
                        <option value="1">Guntur</option>
                        <option value="2">Nellore</option>
                        <option value="3">Hyderabad</option>
                        <option value="4">Bellandur</option>
                        <option value="5">Thubrahalli</option>
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
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>(We will confirm your appointment via SMS or Email)</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="appointment-image">
                <Image
                  src={ContactImg}
                  alt="Book an Appointment"
                  width={522}
                  height={523}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
