import Breadcrumbs from "@/components/Breadcrumbs";
import TeamCard from "@/components/TeamCard";

import TeamImg1 from "../../../public/img/kiran_img.jpg";
import TeamImg2 from "../../../public/img/kavitha_img.jpg";
import TeamImg3 from "../../../public/img/manasa_img.jpg";
import TeamImg4 from "../../../public/img/venkatesh_img.jpg";
import TeamImg5 from "../../../public/img/sandhya_img.jpg";
import TeamImg6 from "../../../public/img/inthihas_img.jpg";
import Header from "@/components/Header/Header";

export default function Doctors() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Meet Our Expert Dental Team" menuText="Doctors" />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg1}
                name="Dr. Kiran Golla"
                designation="MD & Founder"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg2}
                name="Dr. Kavitha Reddy"
                designation="Founder & General Dentist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg3}
                name="Dr. Manasa Reddy"
                designation="CEO & Prosthodontist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg4}
                name="Dr. Venkatesh"
                designation="Orthodontist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg5} // Replace with Dr. Pranavi's image if available
                name="Dr. Sandhya"
                designation="General Dentist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"

                name="Dr. Inthihas"
                designation="Pediatric Dentist"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}