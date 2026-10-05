"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuMapPin, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const branches = [
  { city: "Guntur", state: "Andhra Pradesh", img: "/img/branch-guntur.jpg" },
  { city: "Nellore", state: "Andhra Pradesh", img: "/img/branch-nellore.jpg" },
  { city: "Kukatpally", state: "Hyderabad, Telangana", img: "/img/branch-kukatpally.jpg" },
  { city: "Bachupally", state: "Hyderabad, Telangana", img: "/img/branch-bachupally.jpg" },
  { city: "Thubrahalli", state: "Bengaluru, Karnataka", img: "/img/branch-bengaluru.jpg" },
  { city: "Bellandur", state: "Bengaluru, Karnataka", img: "/img/branch-bellandur.jpg" },
  { city: "Kuwait", state: "Kuwait", img: "/img/branch-kuwait.jpg" },
];

export default function AboutBranches() {
  return (
    <section className="sh-branches sh-branches--about">
      <div className="sh-container">
        <div className="sh-sec-head">
          <div className="sh-sec-head__text">
            <h2>
              <LuMapPin className="sh-sec-head__pin" /> Our Branches
            </h2>
            <p>
              With <em>8+ modern clinics</em> across{" "}
              <strong>Andhra Pradesh, Telangana, Karnataka and Kuwait</strong>,
              expert dental care is always <em>close to you</em>.
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
  );
}
