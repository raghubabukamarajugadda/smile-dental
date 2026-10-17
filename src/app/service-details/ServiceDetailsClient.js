"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaTrophy,
  FaHospital,
  FaUserGroup,
  FaEarthAsia,
  FaPhone,
  FaWhatsapp,
  FaCalendarCheck,
} from "react-icons/fa6";
import { LuPlus, LuMinus, LuInfo } from "react-icons/lu";
import services, { whyChooseUs } from "@/data/serviceDetails";
import Header from "@/components/Header/Header";

const stats = [
  { icon: FaTrophy, title: "25+", sub: "Years of Experience" },
  { icon: FaUserGroup, title: "25+", sub: "Specialists" },
  { icon: FaHospital, title: "8+", sub: "Clinics Across AP & Kuwait" },
  { icon: FaEarthAsia, title: "India & Kuwait", sub: "Quality Dental Care" },
];

export default function ServiceDetailsClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("service");
  const svc = services.find((s) => s.id === id) || services[0];
  const slug = svc.id.replace("svc-", "");
  const [open, setOpen] = useState(0);

  const related = services.filter((s) => s.id !== svc.id).slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: `url(/img/sd-${slug}-hero.jpg)` }}
            role="img"
            aria-label={svc.title}
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <Link href="/service">Services</Link>
              <span>&gt;</span>
              <strong>{svc.title}</strong>
            </nav>
            <div className="sh-sd-hero__text">
              <span className="sh-sd-hero__chip">{svc.chip}</span>
              <h1>{svc.tagline}</h1>
              <p>{svc.intro}</p>
              <div className="sh-sd-hero__actions">
                <Link
                  href="/appointment"
                  className="sh-docs-hero__btn sh-docs-hero__btn--orange"
                >
                  <FaCalendarCheck /> Book Appointment
                </Link>
                <Link
                  href="/doctors"
                  className="sh-docs-hero__btn sh-docs-hero__btn--primary"
                >
                  Talk to a dentist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="sh-svc-stats sh-sd-stats">
        <div className="sh-container">
          <div className="sh-docs-hero__stats sh-svc-stats__card">
            {stats.map(({ icon: Icon, title, sub }) => (
              <div className="sh-docs-hero__stat" key={sub}>
                <Icon className="sh-docs-hero__stat-icon" />
                <div>
                  <h4>{title}</h4>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="sh-sd-body">
        <div className="sh-container">
          <div className="sh-sd-body__grid">
            {/* LEFT */}
            <div className="sh-sd-main">
              <div className="sh-sd-about">
                <div>
                  <h2 className="sh-sd-h2">{svc.aboutTitle}</h2>
                  <p className="sh-sd-p">{svc.about}</p>
                </div>
                <div className="sh-sd-img">
                  <img
                    src={`/img/sd-${slug}-about.jpg`}
                    alt={svc.title}
                    onError={(e) => {
                      e.currentTarget.src = `/img/${svc.image}`;
                    }}
                  />
                </div>
              </div>

              <h2 className="sh-sd-h2">When Might {svc.title} Be an Option?</h2>
              <div className="sh-sd-opts">
                {svc.options.map(({ icon: Icon, title, text }) => (
                  <div className="sh-sd-opt" key={title}>
                    <span className="sh-sd-opt__icon">
                      <Icon />
                    </span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <h2 className="sh-sd-h2">Your Treatment Journey</h2>
              <div className="sh-sd-journey">
                {svc.journey.map((step, i) => (
                  <div className="sh-sd-step" key={step.title}>
                    <div className="sh-sd-step__media">
                      <img src={`/img/${step.img}`} alt={step.title} />
                      <span className="sh-sd-step__num">{i + 1}</span>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="sh-sd-note">
                <LuInfo />
                <p>
                  The suitability of {svc.title.toLowerCase()} depends on an
                  accurate examination and your dentist&apos;s professional
                  advice.
                </p>
              </div>

              <h2 className="sh-sd-h2">Benefits of {svc.title}</h2>
              <div className="sh-sd-benefits">
                {svc.benefits.map(({ icon: Icon, title, text }) => (
                  <div className="sh-sd-benefit" key={title}>
                    <span className="sh-sd-benefit__icon">
                      <Icon />
                    </span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <div className="sh-sd-faqhead">
                <h2 className="sh-sd-h2">Frequently Asked Questions</h2>
                <span>
                  Have more questions?{" "}
                  <Link href="/contact">Talk to our team</Link>
                </span>
              </div>
              <div className="sh-sd-faq">
                {svc.faqs.map((f, i) => (
                  <div
                    className={`sh-faq__item${open === i ? " is-open" : ""}`}
                    key={f.q}
                  >
                    <button
                      type="button"
                      className="sh-faq__q"
                      onClick={() => setOpen(open === i ? -1 : i)}
                      aria-expanded={open === i}
                    >
                      <span>{f.q}</span>
                      {open === i ? <LuMinus /> : <LuPlus />}
                    </button>
                    <div className="sh-faq__a">
                      <p>{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sh-sd-faqhead sh-sd-related__head">
                <h2 className="sh-sd-h2">Related Dental Treatments</h2>
                <span>You may also be interested in these treatments</span>
              </div>
              <div className="sh-sd-related">
                {related.map((r) => (
                  <Link
                    href={`/service-details?service=${r.id}`}
                    className="sh-sd-rel"
                    key={r.id}
                  >
                    <div className="sh-sd-rel__media">
                      <img src={`/img/${r.image}`} alt={r.title} />
                    </div>
                    <div className="sh-sd-rel__body">
                      <h4>{r.title}</h4>
                      <p>{r.intro}</p>
                    </div>
                    <span className="sh-sd-rel__arrow">
                      <FaArrowRightLong />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT sidebar */}
            <aside className="sh-sd-aside">
              <div className="sh-sd-card sh-sd-help">
                <div className="sh-sd-help__media">
                  <img
                    src="/img/help-coordinator.jpg"
                    alt="Smile Dental care coordinator"
                  />
                  <div className="sh-sd-help__overlay">
                    <h3>Need help choosing?</h3>
                    <p>
                      Not sure which treatment you need? We&apos;ll help guide
                      you.
                    </p>
                  </div>
                </div>
                <a href="tel:+918149781447" className="sh-sd-help__call">
                  <FaPhone /> +91 814978 1447
                </a>
                <a
                  href="https://wa.me/918149781447"
                  target="_blank"
                  rel="noreferrer"
                  className="sh-sd-help__wa"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <div className="sh-sd-help__steps">
                  <h4>What happens next?</h4>
                  <div className="sh-sd-help__step">
                    <span>1</span> Send your request
                  </div>
                  <div className="sh-sd-help__step">
                    <span>2</span> Our team contacts you
                  </div>
                  <div className="sh-sd-help__step">
                    <span>3</span> Confirm your visit
                  </div>
                </div>
              </div>

              <div className="sh-sd-card sh-sd-why">
                <h3>Why Choose Us?</h3>
                {whyChooseUs.map(({ icon: Icon, title, text }) => (
                  <div className="sh-sd-why__row" key={title}>
                    <span className="sh-sd-why__ic">
                      <Icon />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="sh-svc-banner">
        <div className="sh-container">
          <div className="sh-svc-banner__card">
            <div>
              <h2>Let&apos;s Plan Your Next Step Toward a Healthier Smile</h2>
              <p>
                Speak with our dental team and get personalised advice for your
                smile.
              </p>
            </div>
            <Link href="/appointment" className="sh-svc-banner__btn">
              Book Appointment
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
