import Link from "next/link";
import { LuMapPin, LuCalendar, LuUser } from "react-icons/lu";

function ToothIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C7.5 2 5.5 6.5 5.5 9c0 2.5 1 4 1.5 5.5.5 1.5.5 4.5 1.5 5.5s2-1 2.5-2.5c.5-1.5 1-2 1.5-2s1 .5 1.5 2c.5 1.5 1.5 3.5 2.5 2.5s1-4 1.5-5.5c.5-1.5 1.5-3 1.5-5.5 0-2.5-2-7-7-7z" />
    </svg>
  );
}

export default function DoctorCard({ doctor, featured = false }) {
  return (
    <div className={`sh-doctor-card${featured ? " sh-doctor-card--featured" : ""}`}>
      <div className="sh-doctor-card__media">
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className="sh-doctor-card__body">
        <h3>{doctor.name}</h3>
        <span className="sh-doctor-card__role">{doctor.designation}</span>

        <div className="sh-doctor-card__meta">
          <span className="sh-doctor-card__location">
            <LuMapPin />
            {doctor.location}
          </span>
          <span className="sh-doctor-card__specialty">
            <ToothIcon className="sh-doctor-card__tooth" />
            {doctor.specialty}
          </span>
        </div>

        <p className="sh-doctor-card__excerpt">{doctor.excerpt}</p>

        <div className="sh-doctor-card__actions">
          <Link
            href={`/doctors/${doctor.id}`}
            className="sh-doctor-card__btn sh-doctor-card__btn--outline"
          >
            <LuUser />
            View Profile
          </Link>
          <Link
            href="/appointment"
            className="sh-doctor-card__btn sh-doctor-card__btn--orange"
          >
            <LuCalendar />
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
