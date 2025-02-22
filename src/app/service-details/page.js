import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceImg from "../../../public/img/service-details-bg.jpg";
import Header from "@/components/Header/Header";

export default function ServiceDetails() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Service Details" menuText="Service Details" />

      <div className="service-details-area section">
        <div className="container">
          <div className="services-details-img">
            <Image src={ServiceImg} alt="Service Details" width={1920} height={1000} />
            <h2>Comprehensive Dental Care Tailored to Your Needs</h2>
            <p>
              At Dr. Kiran's Smile Group, we are committed to providing exceptional dental care that prioritizes your comfort and oral health. Whether you need routine checkups, advanced treatments, or cosmetic enhancements, our team of specialists is here to help you achieve a healthy, confident smile.
            </p>
            <blockquote>
              <i className="icofont-quote-left"></i>
              Your smile is our priority. From pain-free procedures to personalized treatment plans, we ensure every visit is a positive experience. Trust us to deliver world-class dental care with compassion and expertise.
            </blockquote>
            <p>
              Our state-of-the-art facilities and advanced technologies enable us to offer precise, effective treatments for patients of all ages. From preventive care to complex smile makeovers, we are dedicated to helping you maintain optimal oral health and achieve the smile you’ve always wanted.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                {/* Optional: Add an image or additional content here */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>
                  Why Choose Us for Your Dental Care?
                </h2>
                <p>
                  With over 25 years of experience, Dr. Kiran's Smile Group has earned a reputation for excellence in dental care. Our team of highly skilled specialists uses the latest technologies and techniques to ensure pain-free, effective treatments. We prioritize your comfort and satisfaction, offering personalized care tailored to your unique needs.
                </p>
                <p>
                  From routine cleanings to advanced procedures like dental implants and orthodontics, we provide comprehensive solutions to enhance your oral health and confidence. Our patient-centered approach ensures you receive the highest standard of care in a welcoming, stress-free environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}