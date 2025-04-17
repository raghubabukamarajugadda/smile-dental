import SectionHead from "@/components/SectionHead";
import TeamCard from "@/components/TeamCard";

import SectionImg from "../../../../public/img/section-img2.png";

import TeamImg1 from "../../../../public/img/kiran_img.jpg";
import TeamImg2 from "../../../../public/img/kavitha_img.jpg";
import TeamImg3 from "../../../../public/img/manasa_img.jpg";
import TeamImg4 from "../../../../public/img/venkatesh_img.jpg";

export default function Team() {
  return (
    <>
      <section id="team" className="team section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                img={SectionImg}
                title="Meet Our Expert Dental Specialists"
                desc="Our team of highly skilled dentists and specialists is dedicated to providing personalized, pain-free care for patients of all ages."
              />
            </div>
          </div>
          <div className="row">
            {/* Dr. Kiran Golla */}
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg1}
                name="Dr. Kiran Golla"
                designation="MD & Founder"
                description="Dr. Kiran has the ability to answer all questions with clear instructions, guiding patients with great patience and expertise."
              />
            </div>

            {/* Dr. Kavitha Reddy */}
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg2}
                name="Dr. Kavitha Reddy"
                designation="Founder & General Dentist"
                description="With over two decades of experience, Dr. Kavitha Reddy is dedicated to delivering exceptional dental care with a compassionate touch."
              />
            </div>

            {/* Dr. Manasa Reddy */}
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg3}
                name="Dr. Manasa Reddy"
                designation="CEO & Prosthodontist"
                description="Dr. Manasa ensures the highest standards of patient care and is an experienced implantologist, specializing in advanced dental solutions."
              />
            </div>

            {/* Dr. Venkatesh */}
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg4}
                name="Dr. Venkatesh"
                designation="Orthodontist"
                description="Dr. Venkatesh specializes in creating beautiful, healthy smiles through customized orthodontic treatments like braces and aligners."
              />
            </div>
            {/* Dr. Somavarapu Gandhi */}
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg4}
                name="Dr. Somavarapu Gandhi"
                designation="Orthodontist"
                description="Dr. Gandhi specializes in creating beautiful, healthy smiles through customized orthodontic treatments like braces and aligners."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
