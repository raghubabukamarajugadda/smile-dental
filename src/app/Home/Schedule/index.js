import Link from "next/link";

export default function Schedule() {
  return (
    <>
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance"></i>
                    </div>
                    <div className="single-content">
                      <span>Dental Emergencies? We’re Here to Help!</span>
                      <h4>Emergency Cases</h4>
                      <p>
                        Toothaches, broken crowns, or sudden injuries? Our
                        expert team provides immediate care, 24/7, to relieve
                        pain and protect your smile.
                      </p>
                      <Link href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Schedule Smart</span>
                      <h4>Doctors Timetable</h4>
                      <p>
                        Our experienced specialists
                        are available Monday to Saturday, with flexible hours to
                        suit your busy schedule.
                      </p>
                      <Link href="/appointment">
                        BOOK APPOINTMENT <i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span>Convenient Hours</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Saturday <span>8:00 AM - 8:00 PM</span>
                        </li>
                        <li className="day">
                          Sunday <span>Closed (Emergencies Only)</span>
                        </li>
                      </ul>
                      <p>
                        Above timetable is applicable for all our branches throught India.
                      </p>
                      <Link href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </Link>
                    </div>
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
