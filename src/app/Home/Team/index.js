import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import doctors from "@/data/doctors";

const specialty = {
  "dr.-kiran-golla": "Prosthodontist & Implant Specialist",
  "dr.-kavitha-reddy": "Preventive & Family Dentistry",
  "dr.-manasa-reddy": "Full-Mouth Rehabilitation",
  "dr.-venkatesh": "Braces & Aligners",
  "dr.-sandhya": "Preventive & Restorative Care",
  "dr.-inthihas": "Child Dental Care",
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

        <div className="sh-doctors__grid">
          {doctors.map((doc) => (
            <Link
              key={doc.id}
              href={`/doctor-details?doctorId=${doc.id}`}
              className="sh-doctor-card"
            >
              <div className="sh-doctor-card__media">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 33vw, 220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="sh-doctor-card__body">
                <h4>{doc.name}</h4>
                <span className="sh-doctor-card__deg">{doc.designation}</span>
                <span className="sh-doctor-card__role">{specialty[doc.id]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
