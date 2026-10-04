"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

import TestimonialImg1 from "../../../../public/img/guntur_review.png";
import TestimonialImg2 from "../../../../public/img/sambasiva.png";
import TestimonialImg3 from "../../../../public/img/sravya.png";
import TestimonialImg4 from "../../../../public/img/vvv.png";
import TestimonialImg5 from "../../../../public/img/jj.png";

const reviews = [
  {
    id: "r1",
    img: TestimonialImg1,
    name: "Narendra Yalamarthi",
    city: "Guntur",
    text: "Excellent care and a very professional team. My orthodontic treatment was painless, well planned, and the results are amazing. Highly recommended!",
  },
  {
    id: "r2",
    img: TestimonialImg4,
    name: "Madhu Vannam",
    city: "Nellore",
    text: "The go-to place in Nellore for ortho treatment. Comprehensive care and personal attention throughout my journey. The results are remarkable — thank you for transforming my smile.",
  },
  {
    id: "r3",
    img: TestimonialImg2,
    name: "Sambasiva Rao",
    city: "Guntur",
    text: "One of the best dental clinics in Guntur. Doctors are helpful, diagnosis is clear, and hygiene standards are very high. I strongly recommend a visit.",
  },
  {
    id: "r4",
    img: TestimonialImg3,
    name: "Sravya Puppala",
    city: "Hyderabad",
    text: "The way patients are received is really good, the clinic is hygienic and clean, and all precautions are taken seriously. The ambience is just wow — the best in Guntur.",
  },
  {
    id: "r5",
    img: TestimonialImg5,
    name: "Jhansi Charvita",
    city: "Nellore",
    text: "Visited on a friend's suggestion for a decayed tooth. Excellent services with no difference between EHS and private treatment. Wonderful doctors and staff.",
  },
];

export default function Sliders() {
  return (
    <Swiper
      className="sh-reviews__slider"
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        700: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      }}
    >
      {reviews.map((r) => (
        <SwiperSlide key={r.id}>
          <div className="sh-review">
            <LuQuote className="sh-review__quote" />
            <Image
              src={r.img}
              alt={r.name}
              width={52}
              height={52}
              className="sh-review__avatar"
            />
            <p className="sh-review__text">{r.text}</p>
            <div className="sh-review__foot">
              <div className="sh-review__author">
                <h5>{r.name}</h5>
                <span>{r.city}</span>
              </div>
              <div className="sh-review__stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
