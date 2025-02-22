"use client";

import { useState } from "react";

export default function Mission() {
  const [missionData, setmissionData] = useState([
    {
      id: "item1",
      icon: "icofont-doctor",
      title: "Expert Dental Team",
      desc: "Our team of 25+ specialists brings global expertise to deliver precise, pain-free treatments tailored to your needs.",
    },
    {
      id: "item2",
      icon: "icofont-kid",
      title: "Pediatric Dentistry",
      desc: "Gentle, fun, and effective dental care for children, ensuring their smiles stay healthy from an early age.",
    },
    {
      id: "item3",
      icon: "icofont-laboratory",
      title: "Advanced Diagnostics",
      desc: "State-of-the-art digital X-rays and 3D imaging for accurate diagnosis and personalized treatment plans.",
    },
    {
      id: "item4",
      icon: "icofont-tooth",
      title: "Tooth Extraction",
      desc: "Painless tooth extractions using advanced techniques, ensuring minimal discomfort and quick recovery.",
    },
  ]);

  return (
    <>
      <section className="our-mission-area ptb-100 pt-0">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="our-mission-content">
                <span className="sub-title">Our Mission & Vision</span>
                <h2>Better Smiles, Better Lives</h2>
                <p>
                  At Dr. Kiran's Smile Group, our mission is to deliver
                  exceptional dental care that transforms smiles and enhances
                  lives. We envision a world where everyone has access to
                  affordable, pain-free, and world-class dental treatments.
                </p>
                <ul>
                  {missionData.map((items) => (
                    <li key={items.id}>
                      <div className="icon">
                        <i className={items.icon}></i>
                      </div>
                      <span>{items.title}</span>
                      {items.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="our-mission-image"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
