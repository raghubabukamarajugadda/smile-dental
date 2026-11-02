import Link from "next/link";
import {
  LuMapPin,
  LuCalendar,
  LuUser,
  LuAward,
  LuBadgeCheck,
} from "react-icons/lu";

export default function CeoSpotlight({ doctor }) {
  return (
    <div className="sh-docs-ceo">
      <div className="sh-docs-ceo__media">
        <img src={doctor.image} alt={doctor.name} />
        <span className="sh-docs-ceo__badge">
          <LuBadgeCheck />
          Chief Executive Officer
        </span>
      </div>

      <div className="sh-docs-ceo__body">
        <div className="sh-docs-ceo__intro">
          <h3>{doctor.name}</h3>
          <span className="sh-doctor-card__role">{doctor.designation}</span>
          <span className="sh-doctor-card__location">
            <LuMapPin />
            {doctor.location}
          </span>
        </div>

        <p className="sh-docs-ceo__bio">
          As Chief Executive Officer of Dr. Kiran&apos;s Smile Group, Dr. Manasa
          Reddy has been instrumental in expanding our care to Hyderabad and
          Bengaluru — bringing state-of-the-art technology, digital smile design
          and modern treatment protocols to every branch.
        </p>

        <ul className="sh-docs-ceo__chips">
          {(doctor.highlights || []).map((item) => (
            <li key={item}>
              <LuAward />
              {item}
            </li>
          ))}
        </ul>

        <div className="sh-docs-ceo__actions">
          <Link
            href={`/doctor-details?doctorId=${doctor.id}`}
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
