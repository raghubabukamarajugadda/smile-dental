export default function Newsletter() {
  return (
    <section className="newsletter section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="subscribe-text">
              <h6>Join Our Smile Community</h6>
              <p className="">
                Stay updated with the latest dental tips, exclusive offers, and
                <br /> expert advice to keep your smile healthy and bright.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="subscribe-form">
              <form
                action="mail/mail.php"
                method="get"
                className="newsletter-inner"
              >
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  className="common-input"
                  required=""
                  type="email"
                />
                <button className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
