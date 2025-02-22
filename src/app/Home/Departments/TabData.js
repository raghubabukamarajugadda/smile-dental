"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DepartmentImg1 from "../../../../public/img/department.jpg";

const departments = [
  {
    id: 1,
    icon: "icofont-tooth",
    title: "General Dentistry",
    secondTitle: "Healthy Smiles",
    Quote:
      "“The painless cleaning and cavity treatments made me a lifelong patient!”",
    content:
      "Comprehensive dental care including routine checkups, cleanings, fillings, and digital X-rays. Our preventive approach ensures long-term oral health.",
    listItems: [
      "Advanced cavity detection with DIAGNOdent laser",
      "Pain-free anesthesia techniques",
      "Oral cancer screenings",
    ],
    image: DepartmentImg1,
  },
  {
    id: 2,
    icon: "icofont-braces",
    title: "Orthodontics",
    secondTitle: "Straighten & Align",
    Quote: "“Invisalign transformed my smile without metal braces!”",
    content:
      "Modern alignment solutions including clear aligners, lingual braces, and accelerated orthodontics for all ages.",
    listItems: [
      "3D smile simulation technology",
      "Ceramic & self-ligating braces",
      "Retention programs",
    ],
    image: DepartmentImg1,
  },
  {
    id: 3,
    icon: "icofont-implant",
    title: "Dental Implants",
    secondTitle: "Smile Again",
    Quote: "“My implants feel and look completely natural!”",
    content:
      "Permanent tooth replacement using Nobel Biocare® and Straumann® implant systems with 98% success rate.",
    listItems: [
      "Same-day implants available",
      "Bone grafting solutions",
      "Full-arch rehabilitation",
    ],
    image: DepartmentImg1,
  },
  {
    id: 4,
    icon: "icofont-smile",
    title: "Cosmetic Dentistry",
    secondTitle: "Smile Makeovers",
    Quote: "“My veneers gave me the confidence to smile in photos again!”",
    content:
      "Smile enhancements through veneers, teeth whitening, gum contouring, and digital smile design.",
    listItems: [
      "Lumineers® & porcelain veneers",
      "Laser gum reshaping",
      "In-office Zoom! whitening",
    ],
    image: DepartmentImg1,
  },
  {
    id: 5,
    icon: "icofont-baby",
    title: "Pediatric Care",
    secondTitle: "Little Smiles",
    Quote: "“My kids actually enjoy visiting the dentist now!”",
    content:
      "Specialized care for children including fluoride treatments, space maintainers, and habit-breaking appliances.",
    listItems: [
      "Cavity prevention programs",
      "Nitrous oxide sedation",
      "Orthodontic early intervention",
    ],
    image: DepartmentImg1,
  },
];

export default function TabData() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Tabs className="department-tab">
        <TabList id="myTab" className="nav nav-tabs">
          {departments.map((department) => (
            <Tab
              key={department.id}
              onClick={() => handleTabClick(departments.indexOf(department))}
            >
              <i className={department.icon}></i>
              <span className="first">{department.title}</span>
              <span className="second">{department.secondTitle}</span>
            </Tab>
          ))}
        </TabList>
        <div className="tab-content" id="myTabContent">
          {departments.map((department, index) => (
            <TabPanel
              key={department.id}
              className={selectedTab === index ? "active show" : ""}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="department-left">
                    <h3>{department.title}</h3>
                    <p className="p1">{department.Quote}</p>
                    <p>{department.content}</p>
                    <ul className="list">
                      {department.listItems?.map((listItem) => (
                        <li key={listItem}>
                          <i className="fa fa-check"></i> {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="department-right">
                    <Image
                      src={department.image}
                      alt="#"
                      width={571}
                      height={370}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
}
