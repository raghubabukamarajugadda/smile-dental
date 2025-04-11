"use client";

import Image from "next/image";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import TestimonialImg1 from "../../../../public/img/testi1.png";
import TestimonialImg2 from "../../../../public/img/testi2.png";
import TestimonialImg3 from "../../../../public/img/testi3.png";

export default function Sliders() {
  const [testimonialSlider, settestimonialSlider] = useState([
    {
      id: "slider1",
      img: TestimonialImg1,
      desc: "Dr. Kiran's team gave me a confident smile with invisible, pain-free braces – truly professional!",
      name: "Priya S., Guntur",
    },
    {
      id: "slider2",
      img: TestimonialImg2,
      desc: "Emergency root canal at 11 PM! The team stayed late, eliminated my pain instantly. Grateful for their 24/7 care.",
      name: "Ravi M., Hyderabad",
    },
    {
      id: "slider3",
      img: TestimonialImg3,
      desc: "My implants feel natural, and every step was clearly explained. A true 5-star experience!",
      name: "Sameera K., Bellandur",
    },
    {
      id: "slider4",
      img: TestimonialImg2,
      desc: "My kids actually enjoy dental visits! The pediatric team's gentle approach removed all their fears. Thank you!",
      name: "Aarav P., Kuwait",
    },
    {
      id: "slider5",
      img: TestimonialImg3,
      desc: "Professional whitening gave me a red-carpet smile for my wedding. Quick, effective, and worth every penny!",
      name: "Fatima R., Nellore",
    },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="testimonial-slider"
        breakpoints={{
          360: {
            slidesPerView: 1,
            loop: false,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1170: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialSlider.map((singleSlider) => (
          <SwiperSlide className="single-testimonial" key={singleSlider.id}>
            <Image src={singleSlider.img} alt="#" width={53} height={53} />
            <p>{singleSlider.desc}</p>
            <h4 className="name">{singleSlider.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
