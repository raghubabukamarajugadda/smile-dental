"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  FaPlay,
  FaStar,
  FaUsers,
  FaGoogle,
  FaHeartPulse,
  FaCalendarCheck,
  FaArrowRightLong,
} from "react-icons/fa6";
import { LuQuote, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Header from "@/components/Header/Header";

import TestimonialImg1 from "../../../public/img/guntur_review.png";
import TestimonialImg2 from "../../../public/img/sambasiva.png";
import TestimonialImg3 from "../../../public/img/sravya.png";
import TestimonialImg4 from "../../../public/img/vvv.png";
import TestimonialImg5 from "../../../public/img/jj.png";

const filters = [
  "All Testimonials",
  "Dental Implants",
  "Braces & Aligners",
  "Root Canal",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Teeth Cleaning",
  "Crowns & Bridges",
];

const videos = [
  {
    cat: "Dental Implants",
    title: "Restored my confidence to smile again",
    img: "/img/sd-implants-hero.jpg",
    dur: "2:14",
  },
  {
    cat: "Braces & Aligners",
    title: "My smile transformation journey",
    img: "/img/sd-braces-hero.jpg",
    dur: "1:52",
  },
  {
    cat: "Pediatric Dentistry",
    title: "A positive dental experience for my child",
    img: "/img/sd-pediatric-hero.jpg",
    dur: "1:36",
  },
  {
    cat: "Cosmetic Dentistry",
    title: "Natural looking and beautiful results",
    img: "/img/sd-cosmetic-hero.jpg",
    dur: "2:06",
  },
];

const reviews = [
  {
    img: TestimonialImg1,
    name: "Narendra Yalamarthi",
    city: "Guntur Branch",
    text: "Excellent care and a very professional team. My orthodontic treatment was painless, well planned, and the results are amazing. Highly recommended!",
  },
  {
    img: TestimonialImg4,
    name: "Madhu Vannam",
    city: "Nellore Branch",
    text: "The go-to place in Nellore for ortho treatment. Comprehensive care and personal attention throughout my journey. The results are remarkable.",
  },
  {
    img: TestimonialImg2,
    name: "Sambasiva Rao",
    city: "Guntur Branch",
    text: "One of the best dental clinics in Guntur. Doctors are helpful, diagnosis is clear, and hygiene standards are very high. I strongly recommend a visit.",
  },
  {
    img: TestimonialImg3,
    name: "Sravya Puppala",
    city: "Hyderabad Branch",
    text: "The way patients are received is really good, the clinic is hygienic and clean, and all precautions are taken seriously. The ambience is just wow.",
  },
  {
    img: TestimonialImg5,
    name: "Jhansi Charvita",
    city: "Nellore Branch",
    text: "Visited on a friend's suggestion for a decayed tooth. Excellent services with no difference between EHS and private treatment. Wonderful doctors and staff.",
  },
];

const smiles = [
  { img: "/img/tm-smile-1.jpg", alt: "Senior patient smiling" },
  { img: "/img/tm-smile-2.jpg", alt: "Young woman smiling" },
  { img: "/img/tm-smile-3.jpg", alt: "Schoolboy smiling" },
  { img: "/img/tm-smile-4.jpg", alt: "Senior woman smiling" },
  { img: "/img/tm-smile-5.jpg", alt: "Middle-aged man smiling" },
  { img: "/img/tm-smile-6.jpg", alt: "Woman smiling" },
];

const heroStats = [
  { icon: FaUsers, num: "50,000+", label: "Happy Patients" },
  { icon: FaGoogle, num: "4.7/5", label: "Google Reviews" },
  { icon: FaHeartPulse, num: "25+", label: "Years of Trusted Care" },
];

export default function TestimonialsClient() {
  const [filter, setFilter] = useState("All Testimonials");
  const visibleVideos =
    filter === "All Testimonials"
      ? videos
      : videos.filter((v) => v.cat === filter);

  return (
    <div className="sh-tm-page">
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: "url(/img/tm-hero.jpg)" }}
            role="img"
            aria-label="Happy patient smiling in a dental chair"
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <strong>Testimonials</strong>
            </nav>
            <div className="sh-sd-hero__text">
              <span className="sh-appt__eyebrow">Patient Testimonials</span>
              <h1>
                Real Stories <span>Brighter Smiles</span>
              </h1>
              <p>
                Watch and read how our patients across India and Kuwait have
                transformed their smiles and lives with the care and expertise
                at Dr. Kiran&apos;s Smile Group.
              </p>
              <div className="sh-tm__hero-stats">
                {heroStats.map(({ icon: Icon, num, label }) => (
                  <div className="sh-tm__hero-stat" key={label}>
                    <span className="sh-tm__hero-ic">
                      <Icon />
                    </span>
                    <div>
                      <strong>{num}</strong>
                      <small>{label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section className="sh-tm__filters">
        <div className="sh-container">
          <div className="sh-tm__pill-row">
            {filters.map((f) => (
              <button
                type="button"
                key={f}
                className={`sh-tm__pill${filter === f ? " is-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="sh-tm__videos">
        <div className="sh-container">
          <div className="sh-tm__sec-head">
            <div>
              <h2>Video Testimonials</h2>
              <p>Hear directly from our patients about their experience with us.</p>
            </div>
            <div className="sh-tm__sec-arrows">
              <button type="button" aria-label="Previous">
                <LuChevronLeft />
              </button>
              <button type="button" aria-label="Next">
                <LuChevronRight />
              </button>
            </div>
          </div>
          <div className="sh-tm__video-grid">
            {visibleVideos.length > 0 ? (
              visibleVideos.map((v) => (
                <div className="sh-tm__video" key={v.cat}>
                  <div className="sh-tm__video-media">
                    <img src={v.img} alt={v.title} />
                    <span className="sh-tm__play">
                      <FaPlay />
                    </span>
                    <span className="sh-tm__dur">{v.dur}</span>
                  </div>
                  <h4>{v.cat}</h4>
                  <p>{v.title}</p>
                </div>
              ))
            ) : (
              <div className="sh-tm__video-empty">
                <p>
                  Patient stories for {filter} are coming soon — explore
                  &quot;All Testimonials&quot; for now.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Written reviews */}
      <section className="sh-tm__reviews">
        <div className="sh-container">
          <div className="sh-tm__sec-head">
            <div>
              <h2>What Our Patients Say</h2>
              <p>Real reviews from our valued patients.</p>
            </div>
            <div className="sh-tm__sec-actions">
              <span className="sh-tm__google-badge">
                <FaGoogle className="sh-tm__google-ic" />
                <span>
                  <strong>4.7</strong>
                  <span className="sh-tm__stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                  <small>Rated on Google</small>
                </span>
              </span>
              <Link href="/contact" className="sh-tm__sec-link">
                View All Reviews <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <Swiper
            className="sh-tm__review-slider"
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              700: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="sh-tm__review">
                  <div className="sh-tm__review-top">
                    <LuQuote className="sh-tm__review-quote" />
                    <span className="sh-tm__stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  </div>
                  <p className="sh-tm__review-text">{r.text}</p>
                  <div className="sh-tm__review-foot">
                    <Image
                      src={r.img}
                      alt={r.name}
                      width={42}
                      height={42}
                      className="sh-tm__avatar"
                    />
                    <div>
                      <strong>{r.name}</strong>
                      <small>{r.city}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Patient smiles */}
      <section className="sh-tm__smiles">
        <div className="sh-container">
          <div className="sh-tm__sec-head">
            <div>
              <h2>Our Patients&apos; Smiles</h2>
              <p>Real people, real smiles, real confidence.</p>
            </div>
          </div>
          <div className="sh-tm__smile-grid">
            {smiles.map((s) => (
              <div className="sh-tm__smile" key={s.img}>
                <img src={s.img} alt={s.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sh-svc-banner">
        <div className="sh-container">
          <div className="sh-svc-banner__card">
            <div>
              <h2>Ready to Start Your Own Smile Story?</h2>
              <p>
                Book an appointment with our experts and take the first step
                towards a healthier, brighter smile.
              </p>
            </div>
            <Link href="/appointment" className="sh-svc-banner__btn">
              <FaCalendarCheck /> Book Appointment
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
