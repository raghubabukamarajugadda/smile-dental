export default function Newsletter() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer">
          <h2>Join Our Smile Community</h2>
          <p>
            Subscribe to our newsletter for the latest dental tips, exclusive
            offers, and expert advice to keep your smile healthy and bright.
          </p>
          <form
            action="mail/mail.php"
            method="get"
            className="newsletter-inner"
          >
            <input
              name="email"
              placeholder="Your email address"
              className="common-input"
              required=""
              type="email"
            />
            <button className="button">
              <i className="icofont icofont-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
