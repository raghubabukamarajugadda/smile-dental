"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { id: "svc-implants", image: "dental-implants.jpg", title: "Dental Implants", desc: "Permanent solution for missing teeth." },
  { id: "svc-braces", image: "braces-aligners.jpg", title: "Braces & Aligners", desc: "Straighten your teeth with confidence." },
  { id: "svc-rootcanal", image: "root-canal-treatment.jpg", title: "Root Canal Treatment", desc: "Save your natural tooth painlessly." },
  { id: "svc-cleaning", image: "teeth-cleaning-scaling.jpg", title: "Teeth Cleaning & Scaling", desc: "For healthy gums and fresh breath." },
  { id: "svc-cosmetic", image: "cosmetic-dentistry.jpg", title: "Cosmetic Dentistry", desc: "Enhance your smile, boost your confidence." },
  { id: "svc-pediatric", image: "pediatric-dentistry.jpg", title: "Pediatric Dentistry", desc: "Gentle dental care for children." },
  { id: "svc-crowns", image: "crowns-bridges.jpg", title: "Crowns & Bridges", desc: "Restore damaged or missing teeth naturally." },
  { id: "svc-gum", image: "gum-treatment.jpg", title: "Gum Treatment", desc: "Laser care for healthy, strong gums." },
  { id: "svc-dentures", image: "dentures.jpg", title: "Dentures", desc: "Comfortable, natural-looking full & partial dentures." },
  { id: "svc-wisdom", image: "wisdom-tooth-removal.jpg", title: "Wisdom Tooth Removal", desc: "Safe, gentle extraction of impacted teeth." },
  { id: "svc-xray", image: "digital-xray-diagnostics.jpg", title: "Digital X-Ray & Diagnosis", desc: "Precise imaging for accurate treatment plans." },
  { id: "svc-rehab", image: "full-mouth-rehabilitation.jpg", title: "Full Mouth Rehabilitation", desc: "Complete restoration of function and aesthetics." },
];

export default function Services() {
  return (
    <section className="sh-services">
      <div className="sh-container">
        <div className="sh-services__head">
          <div className="sh-services__heading">
            <h2>Our Dental Services</h2>
            <p>
              <span className="sh-services__line" />
              Comprehensive dental solutions for patients of all ages
              <span className="sh-services__line" />
            </p>
          </div>
          <Link href="/service" className="sh-services__all">
            View All Services <FaArrowRightLong />
          </Link>
        </div>

        <div className="sh-services__slider">
          <button type="button" className="sh-services__nav sh-services__nav--prev" aria-label="Previous services">
            <LuChevronLeft />
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: ".sh-services__nav--prev", nextEl: ".sh-services__nav--next" }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={14}
            slidesPerView={1}
            breakpoints={{
              560: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard
                  {...service}
                  href={`/service-details?service=${service.id}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button type="button" className="sh-services__nav sh-services__nav--next" aria-label="Next services">
            <LuChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
