"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FaCalendarCheck,
  FaCalendarDays,
  FaPhone,
  FaWhatsapp,
  FaUserDoctor,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaLink,
  FaArrowRightLong,
} from "react-icons/fa6";
import {
  LuClock,
  LuPlus,
  LuMinus,
  LuListChecks,
  LuInfo,
  LuBadgeCheck,
  LuQuote,
} from "react-icons/lu";
import { articles, getArticle } from "@/data/articles";
import Header from "@/components/Header/Header";

const topics = [
  "Teeth Cleaning",
  "Dental Implants",
  "Braces",
  "Teeth Whitening",
  "Root Canal",
  "Pediatric Care",
  "Gum Treatment",
  "Wisdom Tooth",
  "Oral Hygiene",
  "Cosmetic Dentistry",
];

export default function ArticleClient() {
  const params = useSearchParams();
  const art = getArticle(params.get("article"));
  const [open, setOpen] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector(".sh-artd-sheet");
      if (!el) return;
      const top = el.offsetTop;
      const total = el.offsetHeight - window.innerHeight;
      const done = Math.min(Math.max((window.scrollY - top + 80) / total, 0), 1);
      setProgress(done * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toc = (art.body || [])
    .filter((b) => b.title)
    .map((b, i) => ({ title: b.title, id: `sec-${i}` }))
    .concat([{ title: "Frequently Asked Questions", id: "faqs" }]);

  const related = articles.filter((a) => a.slug !== art.slug).slice(0, 3);
  const moreRelated = articles.filter((a) => a.slug !== art.slug).slice(0, 4);

  const sectionIndex = (blockIndex) => {
    let n = -1;
    (art.body || []).forEach((b, i) => {
      if (b.title && i <= blockIndex) n += 1;
    });
    return n;
  };

  return (
    <div className="sh-artd-page">
      <div className="sh-artd-progress" style={{ width: `${progress}%` }} />
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: `url(${art.heroImg || art.img})` }}
            role="img"
            aria-label={art.title}
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <Link href="/blog-grid">Articles</Link>
              <span>&gt;</span>
              <strong>{art.catLabel}</strong>
            </nav>
            <div className="sh-sd-hero__text sh-artd-hero-text">
              <span className="sh-artd-tag">{art.catLabel}</span>
              <h1>{art.title}</h1>
              <p>{art.desc}</p>
              <div className="sh-artd-meta">
                <span className="sh-artd-author">
                  <span className="sh-artd-author-ic">
                    <FaUserDoctor />
                  </span>
                  Dr. Kiran&apos;s Smile Group Dental Team
                </span>
                <span className="sh-artd-meta-item">
                  <FaCalendarDays /> {art.date}
                </span>
                <span className="sh-artd-meta-item">
                  <LuClock /> {art.read}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="sh-artd-main">
        <div className="sh-container">
          <div className="sh-artd-grid">
            {/* Article sheet */}
            <article className="sh-artd-sheet">
              <p className="sh-artd-lead">{art.intro}</p>

              {art.takeaway && (
                <blockquote className="sh-artd-takeaway">
                  <span className="sh-artd-takeaway-label">Key Takeaway</span>
                  <p>{art.takeaway}</p>
                </blockquote>
              )}

              <nav className="sh-artd-toc">
                <h3 className="sh-artd-toc-title">
                  <LuListChecks /> In this article
                </h3>
                <ol>
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`}>{t.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {(art.body || []).map((b, i) => {
                const sid = b.title ? `sec-${sectionIndex(i)}` : undefined;
                if (b.type === "section")
                  return (
                    <div className="sh-artd-block" id={sid} key={i}>
                      <div className="sh-artd-sec">
                        <div className="sh-artd-sec-text">
                          <h2 className="sh-artd-h2">{b.title}</h2>
                          <p className="sh-artd-p">{b.text}</p>
                        </div>
                        {b.img && (
                          <img
                            src={b.img}
                            alt={b.title}
                            className="sh-artd-sec-img"
                          />
                        )}
                      </div>
                    </div>
                  );
                if (b.type === "p")
                  return (
                    <div className="sh-artd-block" id={sid} key={i}>
                      <h2 className="sh-artd-h2">{b.title}</h2>
                      <p className="sh-artd-p">{b.text}</p>
                    </div>
                  );
                if (b.type === "list")
                  return (
                    <div className="sh-artd-block" id={sid} key={i}>
                      <h2 className="sh-artd-h2">{b.title}</h2>
                      <ul className="sh-artd-list">
                        {b.items.map((it) => {
                          const [head, ...rest] = it.split(" — ");
                          return (
                            <li key={it}>
                              <strong>{head}</strong>
                              {rest.length > 0 && ` — ${rest.join(" — ")}`}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                if (b.type === "table")
                  return (
                    <div className="sh-artd-block" id={sid} key={i}>
                      <h2 className="sh-artd-h2">{b.title}</h2>
                      <div className="sh-artd-table-wrap">
                        <table className="sh-artd-table">
                          <thead>
                            <tr>
                              {b.head.map((h) => (
                                <th key={h}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((r) => (
                              <tr key={r[0]}>
                                {r.map((c, ci) => (
                                  <td key={ci}>{c}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                if (b.type === "cards2")
                  return (
                    <div className="sh-artd-cards2" key={i}>
                      {b.cards.map((c) => (
                        <div className="sh-artd-minicard" key={c.title}>
                          <h3>{c.title}</h3>
                          <p>{c.text}</p>
                        </div>
                      ))}
                    </div>
                  );
                if (b.type === "callout")
                  return (
                    <div className="sh-artd-note" key={i}>
                      <LuInfo />
                      <p>{b.text}</p>
                    </div>
                  );
                return null;
              })}

              {/* FAQs */}
              {art.faqs?.length > 0 && (
                <div className="sh-artd-block" id="faqs">
                  <h2 className="sh-artd-h2">Frequently Asked Questions</h2>
                  <div className="sh-artd-faqs">
                    {art.faqs.map((f, i) => (
                      <div
                        className={`sh-artd-faq${open === i ? " is-open" : ""}`}
                        key={f.q}
                      >
                        <button
                          type="button"
                          className="sh-artd-faq-q"
                          onClick={() => setOpen(open === i ? -1 : i)}
                          aria-expanded={open === i}
                        >
                          <span>{f.q}</span>
                          <span className="sh-artd-faq-ic">
                            {open === i ? <LuMinus /> : <LuPlus />}
                          </span>
                        </button>
                        <div className="sh-artd-faq-a">
                          <p>{f.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviewed + share */}
              <div className="sh-artd-foot">
                <div className="sh-artd-reviewed">
                  <div className="sh-artd-reviewed-avatar">
                    <FaUserDoctor />
                  </div>
                  <div>
                    <span className="sh-artd-reviewed-tag">
                      <LuBadgeCheck /> Reviewed by Our Experts
                    </span>
                    <h4>Dr. Kiran&apos;s Smile Group Dental Team</h4>
                    <p>
                      Medically reviewed for accuracy by our experienced dental
                      specialists.
                    </p>
                  </div>
                </div>
                <div className="sh-artd-share">
                  <span>Share:</span>
                  <a href="#" aria-label="Share on Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Share on X">
                    <FaXTwitter />
                  </a>
                  <a href="#" aria-label="Share on LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(art.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <button
                    type="button"
                    aria-label="Copy link"
                    onClick={() =>
                      navigator.clipboard?.writeText(window.location.href)
                    }
                  >
                    <FaLink />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="sh-artd-aside">
              <div className="sh-sd-card sh-sd-help">
                <div className="sh-sd-help__media">
                  <img
                    src="/img/help-coordinator.jpg"
                    alt="Smile Dental care coordinator"
                  />
                  <div className="sh-sd-help__overlay">
                    <h3>Need help choosing?</h3>
                    <p>Our team will guide you to the right treatment.</p>
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
                <Link href="/appointment" className="sh-artd-book">
                  <FaCalendarCheck /> Book an Appointment
                </Link>
              </div>

              <div className="sh-sd-card sh-artd-related">
                <h3>
                  Related Articles
                  <Link href="/blog-grid">View All</Link>
                </h3>
                {related.map((r) => (
                  <Link
                    href={`/blog-single?article=${r.slug}`}
                    className="sh-artd-rel"
                    key={r.slug}
                  >
                    <img src={r.img} alt={r.title} />
                    <div>
                      <h4>{r.title}</h4>
                      <span>
                        {r.date} · {r.read}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sh-artd-cta-card">
                <img src={art.heroImg || art.img} alt="" />
                <div className="sh-artd-cta-overlay">
                  <LuQuote />
                  <h3>Start Your Smile Journey</h3>
                  <p>Get expert guidance from our dental specialists today.</p>
                  <Link href="/appointment" className="sh-artd-cta-btn">
                    Book an Appointment <FaArrowRightLong />
                  </Link>
                </div>
              </div>

              <div className="sh-sd-card sh-artd-topics">
                <h3>Popular Topics</h3>
                <div className="sh-artd-topic-row">
                  {topics.map((t) => (
                    <span className="sh-artd-topic" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="sh-artd-more">
        <div className="sh-container">
          <div className="sh-tm__sec-head">
            <div>
              <h2>Keep Reading</h2>
              <p>More guides and tips from our dental team.</p>
            </div>
            <Link href="/blog-grid" className="sh-tm__sec-link">
              View All Articles <FaArrowRightLong />
            </Link>
          </div>
          <div className="sh-artd-more-grid">
            {moreRelated.map((r) => (
              <Link
                href={`/blog-single?article=${r.slug}`}
                className="sh-art__card"
                key={r.slug}
              >
                <div className="sh-art__card-media">
                  <img src={r.img} alt={r.title} />
                </div>
                <div className="sh-art__card-body">
                  <span className="sh-art__card-cat">{r.catLabel}</span>
                  <h3>{r.title}</h3>
                  <div className="sh-art__card-meta">
                    <span>
                      <FaCalendarDays /> {r.date}
                    </span>
                    <span>
                      <LuClock /> {r.read}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="sh-svc-banner">
        <div className="sh-container">
          <div className="sh-svc-banner__card">
            <div>
              <h2>Have Questions About Your Smile?</h2>
              <p>
                Book a consultation with our dental experts and get personalised
                treatment advice.
              </p>
            </div>
            <Link href="/appointment" className="sh-svc-banner__btn">
              <FaCalendarCheck /> Book an Appointment
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
