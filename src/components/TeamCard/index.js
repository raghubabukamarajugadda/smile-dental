"use client";

import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import TeamImg1 from "../../../public/img/team1.jpg";

// Default options for the Tilt effect
const defaultOptions = {
  reverse: false, // Reverse the tilt direction
  max: 35, // Max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets
  scale: 1, // 2 = 200%, 1.5 = 150%, etc.
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit
};

export default function TeamCard(props) {
  const { tilt, image, name, designation, id } = props;

  // Generate a URL-friendly ID from the doctor's name
  const doctorId = id || name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Tilt options={defaultOptions} className={tilt ? tilt : ""}>
      <div className="single-team">
        {/* Team member image */}
        <div className="t-head">
          <Image
            src={image || TeamImg1} // Use the provided image or a default one
            alt={name || "Doctor"} // Add meaningful alt text
            width={558}
            height={575}
            priority // Optional: Prioritize loading for above-the-fold images
          />
          {/* Get Appointment button */}
          <div className="t-icon">
            <Link href="/appointment" className="btn" aria-label="Get Appointment">
              Get Appointment
            </Link>
          </div>
        </div>

        {/* Team member details */}
        <div className="t-bottom">
          <p>{designation || "Dental Specialist"}</p> {/* Fallback to "Dental Specialist" if no designation is provided */}
          <h2>
            <Link href={`/doctor-details?doctorId=${doctorId}`} aria-label={`View details of ${name}`}>
              {name || "Dr. John Doe"}
            </Link>
          </h2>
        </div>
      </div>
    </Tilt>
  );
}