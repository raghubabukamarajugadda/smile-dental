"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DepartmentImg1 from "../../../../public/img/department.jpg";

const departments = [
  {
    id: 1,
    icon: "icofont-dental",
    title: "General Dentistry",
    secondTitle: "Preventive Care",
    Quote: "“Painless cleanings and expert advice keep my smile healthy!”",
    content: "Routine checkups, digital X-rays, and fluoride treatments to maintain optimal oral health.",
    listItems: [
      "Laser cavity detection",
      "Oral cancer screening",
      "Gum disease prevention"
    ],
    image: DepartmentImg1,
  },
  {
    id: 2,
    icon: "icofont-tooth",
    title: "Root Canal Therapy",
    secondTitle: "Save Your Tooth",
    Quote: "“Quick and painless! Saved my infected tooth in one visit.”",
    content: "Advanced rotary endodontics with 98% success rate using Nickel-Titanium files.",
    listItems: [
      "Single-visit RCT",
      "Surgical microscopy",
      "Apex locators"
    ],
    image: DepartmentImg1,
  },
  {
    id: 3,
    icon: "icofont-braces",
    title: "Orthodontics",
    secondTitle: "Align Your Smile",
    Quote: "“Invisalign gave me perfect teeth without metal wires!”",
    content: "Customized alignment solutions for teens and adults using clear aligners and self-ligating braces.",
    listItems: [
      "3D smile simulation",
      "Accelerated orthodontics",
      "Retention programs"
    ],
    image: DepartmentImg1,
  },
  {
    id: 4,
    icon: "icofont-smile",
    title: "Cosmetic Dentistry",
    secondTitle: "Smile Makeovers",
    Quote: "“Veneers transformed my smile for my wedding photos!”",
    content: "Complete aesthetic solutions including porcelain veneers, teeth contouring, and gum reshaping.",
    listItems: [
      "Digital smile design",
      "Lumineers®",
      "Bleaching trays"
    ],
    image: DepartmentImg1,
  },
  {
    id: 5,
    icon: "icofont-baby-milk-bottle",
    title: "Pediatric Care",
    secondTitle: "Little Smiles",
    Quote: "“My kids actually enjoy their dental visits now!”",
    content: "Gentle care for children with fun-themed clinics and preventive treatments.",
    listItems: [
      "Fluoride varnish",
      "Space maintainers",
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
