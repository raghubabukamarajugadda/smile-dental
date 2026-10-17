"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaTooth,
  FaTeethOpen,
  FaFaceSmile,
  FaStethoscope,
  FaBaby,
  FaHeartPulse,
  FaBookOpen,
  FaCalendarDays,
  FaEnvelope,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import {
  LuLayoutGrid,
  LuSparkles,
  LuClock,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuSend,
} from "react-icons/lu";
import Header from "@/components/Header/Header";
import { articles } from "@/data/articles";

const categories = [
  { id: "all", label: "All Articles", icon: LuLayoutGrid },
  { id: "general", label: "General Dentistry", icon: FaTooth },
  { id: "implants", label: "Dental Implants", icon: FaTeethOpen },
  { id: "braces", label: "Braces & Aligners", icon: FaFaceSmile },
  { id: "rootcanal", label: "Root Canal", icon: FaStethoscope },
  { id: "cosmetic", label: "Cosmetic Dentistry", icon: LuSparkles },
  { id: "pediatric", label: "Pediatric Dentistry", icon: FaBaby },
  { id: "gum", label: "Gum Treatment", icon: FaHeartPulse },
  { id: "guide", label: "Patient Guide", icon: FaBookOpen },
];



const featured = [
  {
    title: "How to Maintain Healthy Gums for Life",
    img: "/img/sd-gum-about.jpg",
    date: "Aug 28, 2026",
    read: "5 min read",
  },
  {
    title: "Dental Implant Aftercare Tips for Long-Term Success",
    img: "/img/sd-implants-about.jpg",
    date: "Aug 20, 2026",
    read: "6 min read",
  },
  {
    title: "10 Easy Oral Hygiene Tips for Kids",
    img: "/img/sd-pediatric-about.jpg",
    date: "Aug 05, 2026",
    read: "5 min read",
  },
  {
    title: "Foods That are Good (and Bad) for Your Teeth",
    img: "/img/j-home.jpg",
    date: "Aug 05, 2026",
    read: "4 min read",
  },
];

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

export default function ArticlesClient() {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("latest");

  const list = useMemo(() => {
    let out = articles.filter(
      (a) =>
        (cat === "all" || a.cat === cat) &&
        a.title.toLowerCase().includes(query.toLowerCase())
    );
    if (sort === "oldest") out = [...out].sort((a, b) => a.stamp - b.stamp);
    if (sort === "az")
      out = [...out].sort((a, b) => a.title.localeCompare(b.title));
    return out;
  }, [cat, query, sort]);

  return (
    <div className="sh-art-page">
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: "url(/img/art-hero.jpg)" }}
            role="img"
            aria-label="Smiling patient in a dental chair"
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <strong>Articles</strong>
            </nav>
            <div className="sh-sd-hero__text">
              <span className="sh-appt__eyebrow">Dental Articles</span>
              <h1>
                Expert Advice for <span>Healthier Smiles</span>
              </h1>
              <p>
                Discover expert tips, treatment guides and oral health
                information from our experienced dentists. Learn how to take
                better care of your teeth and gums for a healthier, brighter
                smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sh-art__cats">
        <div className="sh-container">
          <div className="sh-art__cat-row">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                key={id}
                className={`sh-art__cat${cat === id ? " is-active" : ""}`}
                onClick={() => setCat(id)}
              >
                <span className="sh-art__cat-ic">
                  <Icon />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles + sidebar */}
      <section className="sh-art__main">
        <div className="sh-container">
          <div className="sh-art__grid">
            <div className="sh-art__content">
              <div className="sh-art__toolbar">
                <h2>Latest Articles</h2>
                <div className="sh-art__tools">
                  <label className="sh-art__sort">
                    Sort by:
                    <span className="sh-art__sort-box">
                      <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <option value="latest">Latest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="az">Title A-Z</option>
                      </select>
                      <LuChevronDown />
                    </span>
                  </label>
                  <label className="sh-art__search">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <FaMagnifyingGlass />
                  </label>
                </div>
              </div>

              {list.length > 0 ? (
                <div className="sh-art__cards">
                  {list.map((a) => (
                    <Link
                      href={`/blog-single?article=${a.slug}`}
                      className="sh-art__card"
                      key={a.title}
                    >
                      <div className="sh-art__card-media">
                        <img src={a.img} alt={a.title} />
                      </div>
                      <div className="sh-art__card-body">
                        <span className="sh-art__card-cat">{a.catLabel}</span>
                        <h3>{a.title}</h3>
                        <p>{a.desc}</p>
                        <div className="sh-art__card-meta">
                          <span>
                            <FaCalendarDays /> {a.date}
                          </span>
                          <span>
                            <LuClock /> {a.read}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="sh-art__empty">
                  No articles in this category yet — check back soon.
                </div>
              )}

              <div className="sh-art__pages">
                <span className="sh-art__page is-active">1</span>
                <span className="sh-art__page">2</span>
                <span className="sh-art__page">3</span>
                <span className="sh-art__page is-dots">…</span>
                <span className="sh-art__page">8</span>
                <span className="sh-art__page sh-art__page--next">
                  <LuChevronRight />
                </span>
              </div>
            </div>

            <aside className="sh-art__aside">
              <div className="sh-sd-card sh-art__featured">
                <h3>Featured Articles</h3>
                {featured.map((f) => (
                  <Link
                    href="/blog-single"
                    className="sh-art__feat"
                    key={f.title}
                  >
                    <img src={f.img} alt={f.title} />
                    <div>
                      <h4>{f.title}</h4>
                      <span>
                        <FaCalendarDays /> {f.date} · {f.read}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sh-sd-card sh-art__news">
                <span className="sh-art__news-ic">
                  <FaEnvelope />
                </span>
                <h3>Get Dental Tips in Your Inbox</h3>
                <p>
                  Subscribe to our newsletter for the latest articles, oral
                  health tips and clinic updates.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="sh-art__news-form"
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit">
                    Subscribe <LuSend />
                  </button>
                </form>
              </div>

              <div className="sh-sd-card sh-art__topics">
                <h3>Popular Topics</h3>
                <div className="sh-art__topic-row">
                  {topics.map((t) => (
                    <span className="sh-art__topic" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
