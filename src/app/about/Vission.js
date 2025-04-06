"use client";

import { useState } from "react";

export default function Vission() {
  const [vissionData, setvissionData] = useState([
    {
      id: "item1",
      icon: "icofont-tick-mark",
      title: "Our Mission",
      desc: "To provide exceptional dental care that transforms smiles and enhances lives, using advanced technology and a patient-first approach.",
    },
    {
      id: "item2",
      icon: "icofont-tick-mark",
      title: "Our Planning",
      desc: "We continuously innovate and expand our services to make world-class dental care accessible to patients across India and Kuwait.",
    },
    {
      id: "item3",
      icon: "icofont-tick-mark",
      title: "Our Vision",
      desc: "Our vision is to lead in dental care by delivering advanced treatments, exceptional service, and consistently prioritizing patient satisfaction.",
    },
  ]);

  return (
    <>
      <section className="our-vision-area ptb-100 pt-0">
        <div className="container">
          <div className="row">
            {vissionData.map((items) => (
              <div className="col-lg-4 col-md-6 col-12" key={items.id}>
                <div className="single-vision-box">
                  <div className="icon">
                    <i className={items.icon}></i>
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
