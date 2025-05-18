"use client";

import Image from "next/image";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import TestimonialImg1 from "../../../../public/img/guntur_review.png";
import TestimonialImg2 from "../../../../public/img/sambasiva.png";
import TestimonialImg3 from "../../../../public/img/sravya.png";
import TestimonialImg4 from "../../../../public/img/vvv.png";
import TestimonialImg5 from "../../../../public/img/jj.png";

export default function Sliders() {
  const [testimonialSlider, settestimonialSlider] = useState([
    {
      id: "slider1",
      img: TestimonialImg1,
      desc: "My experience at Smile Dental Clinic for orthodontic treatment has been outstanding! The orthodontists are highly skilled and caring, providing me with a personalized treatment plan. The clinic is equipped with modern technology, ensuring effective results. I'm thrilled with my progress so far!",
      name: "Narendra Yalamarthi - Guntur",
    },
    {
      id: "slider4",
      img: TestimonialImg4,
      desc: "Smile Super Speciality Dental Hospital is the go-to place in Nellore for ortho treatment. They provided me with comprehensive care and personalized attention throughout my treatment journey. The results are remarkable, and I couldn't be happier. Thank you for transforming my smile.",
      name: "Madhu Vannam - Nellore",
    },
    {
      id: "slider2",
      img: TestimonialImg2,
      desc: "One of the best Dental clinic in Guntur. The staff and Doctors are very helpful and friendly for proper diagnosis and guidence.Hospital have advanced equipment and Technology with very very high standards specially on Hygiene conditions.I strongly recommend to visit.",
      name: "sambasiva rao - Guntur",
    },
    {
      id: "slider3",
      img: TestimonialImg3,
      desc: "The way of receiving the patients is really good, and the clinic is hygiene and clean, it's great that you took all precautions very well. My husband is very happy with the treatment. Last but not the least the ambience , it's just Awww! The best in Guntur.  Appreciate what you do👍 …",
      name: "Sravya Puppala - Hyderabad",
    },
    {
      id: "slider5",
      img: TestimonialImg5,
      desc: "Hi, I have recently visited smile super speciality dental hospital,Nellore on my friend suggestion to get treatment for my decayed tooth, u won't believe,, they are giving excellent services even in ehs without showing any differences in ehs & private treatments,such an excellent doctors & staff.",
      name: "Jhansi charvita - Nellore",
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
