import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer f-link">
          <h2>Quick Links</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <ul>
                <li>
                  <Link href="/">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>Our
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tnc">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Tnc
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
