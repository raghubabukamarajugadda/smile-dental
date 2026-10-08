import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="sh-about-hero sh-contact-hero">
      <div className="sh-about-hero__frame">
        <div
          className="sh-about-hero__bg sh-contact-hero__bg"
          role="img"
          aria-label="Smile Group clinic reception"
        />
        <div className="sh-container sh-about-hero__inner">
          <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <strong>Contact Us</strong>
          </nav>

          <div className="sh-about-hero__text">
            <span className="sh-docs-hero__eyebrow">Contact Us</span>
            <h1>
              We&apos;re Here
              <br />
              <span>to Help You Smile</span>
            </h1>
            <p>
              Get in touch with our team for appointments, enquiries or any
              assistance. We&apos;re happy to help you at any of our clinics
              across India and Kuwait.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
