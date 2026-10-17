"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import doctors from "@/data/doctors";

const specialty = {
  "dr.-kiran-golla": "Prosthodontist & Implant Specialist",
  "dr.-kavitha-reddy": "Preventive & Family Dentistry",
  "dr.-manasa-reddy": "Full-Mouth Rehabilitation",
  "dr.-venkatesh": "Braces & Aligners",
  "dr.-inthihas": "Child Dental Care",
  "dr.-hitha": "Family & Preventive Dentistry",
  "dr.-gowtham": "Pain-Free Restorative Care",
  "dr.-bhavya": "Gentle Family Dentistry",
};

export default function Team() {
  return (
    <section className="sh-doctors">
      <div className="sh-container">
        <div className="sh-sec-head">
          <div className="sh-sec-head__text">
            <h2>Meet Our Expert Dental Specialists</h2>
            <p>
              Our team of highly skilled dentists and specialists is dedicated to
              providing personalized, pain-free care for patients of all ages.
            </p>
          </div>
          <Link href="/doctors" className="sh-sec-head__link">
            View All Doctors <FaArrowRightLong />
          </Link>
        </div>

        <div className="sh-doctors__slider">
          <button
            type="button"
            className="sh-services__nav sh-doctors__nav sh-doctors__nav--prev"
            aria-label="Previous doctors"
          >
            <LuChevronLeft />
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".sh-doctors__nav--prev",
              nextEl: ".sh-doctors__nav--next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
          >
            {doctors.map((doc) => (
              <SwiperSlide key={doc.id}>
                <Link
                  href={`/doctor-details?doctorId=${doc.id}`}
                  className="sh-doctor-card"
                >
                  <div className="sh-doctor-card__media">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 767px) 50vw, (max-width: 1199px) 33vw, 220px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="sh-doctor-card__body">
                    <h4>{doc.name}</h4>
                    <span className="sh-doctor-card__deg">{doc.designation}</span>
                    <span className="sh-doctor-card__role">
                      {specialty[doc.id]}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="sh-services__nav sh-doctors__nav sh-doctors__nav--next"
            aria-label="Next doctors"
          >
            <LuChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
