"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  LuBaby,
  LuShieldCheck,
  LuSparkles,
  LuSyringe,
  LuStethoscope,
  LuHeartPulse,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

function ToothIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C7.5 2 5.5 6.5 5.5 9c0 2.5 1 4 1.5 5.5.5 1.5.5 4.5 1.5 5.5s2-1 2.5-2.5c.5-1.5 1-2 1.5-2s1 .5 1.5 2c.5 1.5 1.5 3.5 2.5 2.5s1-4 1.5-5.5c.5-1.5 1.5-3 1.5-5.5 0-2.5-2-7-7-7z" />
    </svg>
  );
}

function BracesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8c1.6 6.4 4.8 9.5 9 9.5S19.4 14.4 21 8" />
      <rect x="4" y="7" width="4.5" height="4.5" rx="1" />
      <rect x="9.75" y="11.5" width="4.5" height="4.5" rx="1" />
      <rect x="15.5" y="7" width="4.5" height="4.5" rx="1" />
    </svg>
  );
}

function ImplantIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c-3.4 0-4.8 2.2-4.8 4 0 1.1.4 1.9.8 2.5h8c.4-.6.8-1.4.8-2.5 0-1.8-1.4-4-4.8-4z" />
      <path d="M9 11.5v2l1 8h4l1-8v-2" />
      <path d="M9.5 14h5" />
      <path d="M9.8 17h4.4" />
    </svg>
  );
}

const specialties = [
  { icon: ToothIcon, title: "Prosthodontics", desc: "Restorations, crowns & bridges" },
  { icon: BracesIcon, title: "Orthodontics", desc: "Braces & aligners" },
  { icon: LuStethoscope, title: "General Dentistry", desc: "Comprehensive dental care" },
  { icon: LuBaby, title: "Pediatric Dentistry", desc: "Dental care for children" },
  { icon: ImplantIcon, title: "Implant Dentistry", desc: "Dental implants & replacements" },
  { icon: LuShieldCheck, title: "Preventive Care", desc: "Cleanings, checkups & oral health" },
  { icon: ToothIcon, title: "Endodontics", desc: "Root canal treatments" },
  { icon: LuSparkles, title: "Cosmetic Dentistry", desc: "Smile design & whitening" },
  { icon: LuHeartPulse, title: "Periodontics", desc: "Gum care & treatments" },
  { icon: LuSyringe, title: "Oral Surgery", desc: "Extractions & surgical care" },
];

export default function Specialties() {
  return (
    <div className="sh-specialty">
      <div className="sh-specialty__head">
        <div>
          <span className="sh-docs-hero__eyebrow">Find by Specialty</span>
          <h2>Find the Right Specialist for You</h2>
        </div>
        <p>
          Our team covers all major areas of dentistry to provide complete care
          for you and your family.
        </p>
      </div>

      <div className="sh-specialty__slider">
        <button
          type="button"
          className="sh-specialty__nav sh-specialty__nav--prev"
          aria-label="Previous specialties"
        >
          <LuChevronLeft />
        </button>
        <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".sh-specialty__nav--prev",
          nextEl: ".sh-specialty__nav--next",
        }}
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1440: { slidesPerView: 6 },
        }}
      >
          {specialties.map(({ icon: Icon, title, desc }) => (
            <SwiperSlide key={title}>
              <div className="sh-specialty-card">
                <span className="sh-specialty-card__icon">
                  <Icon />
                </span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className="sh-specialty__nav sh-specialty__nav--next"
          aria-label="Next specialties"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
}
