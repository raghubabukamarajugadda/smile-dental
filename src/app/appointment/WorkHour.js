"use client";

import { useState } from "react";

export default function WorkHour() {
  const [workHour, setworkHour] = useState([
    {
      id: "item1",
      day: "Monday - Friday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      id: "item2",
      day: "Saturday",
      time: "9:00 AM - 6:30 PM",
    },
    {
      id: "item3",
      day: "Sunday",
      time: "Closed (Emergencies Only)",
    },
  ]);

  return (
    <div className="work-hour">
      <h3>Opening Hours</h3>
      <ul className="time-sidual">
        {workHour.map((items) => (
          <li className="day" key={items.id}>
            {items.day} <span>{items.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}