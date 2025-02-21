import Link from "next/link";

export default function CallAction() {
  return (
    <>
      <section className="call-action overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Need Emergency Dental Care? Call @ +91 84978 14447</h2>
                <p>
                  Experiencing severe tooth pain or a dental injury? Our
                  emergency team is available 24/7 to provide immediate relief
                  and protect your smile. Trusted by thousands across India and
                  Kuwait.
                </p>
                <div className="button">
                  <Link href="/contact" className="btn">
                    Book Immediate Care
                  </Link>
                  <Link href="/emergency-services" className="btn second">
                    Learn About Emergencies{" "}
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
