"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  LuMapPin,
  LuPlus,
  LuMinus,
  LuCalendarCheck,
  LuPhone,
  LuMail,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

const branches = [
  { city: "Guntur", state: "Andhra Pradesh", img: "/img/branch-guntur.jpg" },
  { city: "Nellore", state: "Andhra Pradesh", img: "/img/branch-nellore.jpg" },
  { city: "Kukatpally", state: "Hyderabad, Telangana", img: "/img/branch-kukatpally.jpg" },
  { city: "Bachupally", state: "Hyderabad, Telangana", img: "/img/branch-bachupally.jpg" },
  { city: "Thubrahalli", state: "Bengaluru, Karnataka", img: "/img/branch-bengaluru.jpg" },
  { city: "Bellandur", state: "Bengaluru, Karnataka", img: "/img/branch-bellandur.jpg" },
  { city: "Kuwait", state: "Kuwait", img: "/img/branch-kuwait.jpg" },
];

const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a dental check-up and professional cleaning every 6 months. Regular visits help detect problems early and keep your smile healthy.",
  },
  {
    q: "Are dental treatments painful?",
    a: "No. We use modern, pain-free techniques and gentle anesthesia to ensure your complete comfort during every procedure.",
  },
  {
    q: "Do you offer EMI or payment plans?",
    a: "Yes, easy EMI options are available for all major treatments. Speak to our front desk to choose a plan that suits you.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Professional teeth whitening performed by our dentists is completely safe and effective, with long-lasting results and no damage to your enamel.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately at +91 84978 14447. Our emergency team is available 24/7 for toothaches, injuries, and urgent cases.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely! Our pediatric dentistry specialists provide gentle, friendly care designed to make children feel comfortable and safe.",
  },
];

export default function BranchFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="sh-branches">
        <div className="sh-container">
          <div className="sh-sec-head">
            <div className="sh-sec-head__text">
              <h2>
                <LuMapPin className="sh-sec-head__pin" /> Our Branches
              </h2>
              <p>
                With <em>8+ modern clinics</em> across <strong>Andhra
                Pradesh, Telangana, Karnataka and Kuwait</strong>, expert
                dental care is always <em>close to you</em>.
              </p>
            </div>
            <Link href="/contact" className="sh-sec-head__link">
              View All Branches <FaArrowRightLong />
            </Link>
          </div>

          <div className="sh-branches__slider">
            <button
              type="button"
              className="sh-services__nav sh-branches__nav sh-branches__nav--prev"
              aria-label="Previous branches"
            >
              <LuChevronLeft />
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".sh-branches__nav--prev",
                nextEl: ".sh-branches__nav--next",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              spaceBetween={14}
              slidesPerView={1}
              breakpoints={{
                560: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                1400: { slidesPerView: 5 },
              }}
            >
              {branches.map((b) => (
                <SwiperSlide key={b.city}>
                  <div className="sh-branch-card">
                    <div className="sh-branch-card__media">
                      <img src={b.img} alt={`${b.city} branch`} />
                      <span className="sh-branch-card__pin">
                        <LuMapPin />
                      </span>
                    </div>
                    <div className="sh-branch-card__body">
                      <h4>{b.city}</h4>
                      <span>{b.state}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              type="button"
              className="sh-services__nav sh-branches__nav sh-branches__nav--next"
              aria-label="Next branches"
            >
              <LuChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section className="sh-faq">
        <div className="sh-container">
          <div className="sh-sec-head">
            <div className="sh-sec-head__text">
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to common questions about our dental care services.
              </p>
            </div>
            <Link href="/faq" className="sh-sec-head__link">
              View All FAQs <FaArrowRightLong />
            </Link>
          </div>

          <div className="sh-faq__grid">
            {faqs.map((f, i) => (
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
        </div>
      </section>

      <section className="sh-cta">
        <div className="sh-container">
          <div className="sh-cta__inner">
            <div className="sh-cta__text">
              <span className="sh-cta__icon">
                <LuCalendarCheck />
              </span>
              <div>
                <h2>Book Your Appointment Today</h2>
                <p>Take the first step towards a healthier, brighter smile.</p>
              </div>
            </div>
            <div className="sh-cta__actions">
              <Link href="/appointment" className="sh-btn sh-btn--orange">
                Book Appointment <FaArrowRightLong className="sh-btn__arrow" />
              </Link>
              <a href="tel:+918497814447" className="sh-cta__contact">
                <LuPhone />
                <span>
                  Call Us
                  <br />
                  <strong>+91 84978 14447</strong>
                </span>
              </a>
              <a
                href="mailto:contact@drkiranssmilegroup.com"
                className="sh-cta__contact"
              >
                <LuMail />
                <span>
                  Email Us
                  <br />
                  <strong>contact@drkiranssmilegroup.com</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
