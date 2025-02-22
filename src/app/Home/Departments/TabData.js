"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DepartmentImg1 from "../../../../public/img/department.jpg";

const departments = [
  {
    id: 1,
    icon: "icofont-tooth",
    title: "Root Canal Therapy",
    secondTitle: "Save Your Natural Tooth",
    Quote: "“A pain-free solution to preserve your natural teeth and eliminate discomfort caused by infection or decay.”",
    content: "Root canal therapy is a highly effective treatment to save severely damaged or infected teeth. Using advanced rotary endodontics and surgical microscopes, we ensure precise, painless procedures with a 98% success rate.",
    listItems: [
      "Single-visit treatment options",
      "Microscopic precision for complex cases",
      "Post-treatment care for long-lasting results"
    ],
    image: DepartmentImg1,
  },
  {
    id: 2,
    icon: "icofont-ebook",
    title: "Orthodontics",
    secondTitle: "Straighten Your Smile",
    Quote: "“Achieve a perfectly aligned smile with modern orthodontic solutions tailored to your lifestyle.”",
    content: "From traditional braces to clear aligners, our orthodontic treatments correct crowding, gaps, and bite issues. Customized plans ensure optimal results for teens and adults alike.",
    listItems: [
      "Invisalign® clear aligners",
      "Ceramic and self-ligating braces",
      "3D smile simulation technology"
    ],
    image: DepartmentImg1,
  },
  {
    id: 3,
    icon: "icofont-tooth",
    title: "Dental Implants",
    secondTitle: "Restore Missing Teeth",
    Quote: "“A permanent, natural-looking solution to replace missing teeth and restore your smile’s functionality.”",
    content: "Dental implants are the gold standard for tooth replacement. Using premium materials like titanium and zirconia, we provide durable, biocompatible implants with a 95% success rate.",
    listItems: [
      "Same-day implant placement",
      "Bone grafting for optimal support",
      "Custom crowns for seamless aesthetics"
    ],
    image: DepartmentImg1,
  },
  
  {
    id: 4,
    icon: "icofont-baby-milk-bottle",
    title: "Pediatric Dentistry",
    secondTitle: "Care for Little Smiles",
    Quote: "“Gentle, fun, and effective dental care to establish healthy habits for your child’s lifelong oral health.”",
    content: "Our pediatric specialists create a welcoming environment for children, offering preventive care, fluoride treatments, and early orthodontic guidance.",
    listItems: [
      "Cavity prevention programs",
      "Nitrous oxide for anxiety-free visits",
      "Habit-breaking appliances"
    ],
    image: DepartmentImg1,
  }
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
