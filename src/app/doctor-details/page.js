"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";
import doctors from "@/data/doctors"; // Assuming you have a doctor data file

export default function DoctorDetails() {
  const searchParams = useSearchParams();
  const doctorId = searchParams.get("doctorId"); // Get doctorId from query params

  // Find doctor details based on doctorId
  const doctor = doctors.find((doc) => doc.id === doctorId);

  // Show a loading or error message if doctor is not found
  if (!doctor) return <p>Doctor not found!</p>;

  return (
    <>
      <Header />
      <Breadcrumbs title="Doctor Details" menuText={doctor.name} />

      <div className="doctor-details-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <Image src={doctor.image} alt={doctor.name} width={479} height={551} />
                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul className="basic-info">
                    <li><i className="icofont-ui-call"></i> Call: {doctor.contact.phone}</li>
                    <li><i className="icofont-ui-message"></i> {doctor.contact.email}</li>
                    <li><i className="icofont-location-pin"></i> {doctor.contact.address}</li>
                  </ul>

                  <ul className="social">
                    <li><Link href={doctor.social.facebook}><i className="icofont-facebook"></i></Link></li>
                    <li><Link href={doctor.social.twitter}><i className="icofont-twitter"></i></Link></li>
                    <li><Link href={doctor.social.linkedin}><i className="icofont-linkedin"></i></Link></li>
                  </ul>

                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <ul className="time-sidual">
                      {doctor.workingHours.map((wh, index) => (
                        <li key={index} className="day">
                          {wh.day} <span>{wh.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-name">
                    <h3 className="name">{doctor.name}</h3>
                    <p className="deg">{doctor.designation}</p>
                  </div>
                  
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>
                    {doctor.biography.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    <ul>
                      {doctor.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
