import Link from "next/link";
import {
  FaPhone,
  FaClock,
  FaLocationDot,
  FaBuilding,
  FaUserDoctor,
  FaShieldHalved,
  FaHospital,
  FaTrophy,
  FaUserGroup,
  FaCalendarCheck,
  FaArrowRightLong,
} from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Header from "@/components/Header/Header";

const heroFeatures = [
  { icon: FaBuilding, label: "Modern Facilities" },
  { icon: FaUserDoctor, label: "Experienced Doctors" },
  { icon: FaShieldHalved, label: "Consistent Care Standards" },
  { icon: FaLocationDot, label: "Patient-Friendly Locations" },
];

const branches = [
  {
    region: "Andhra Pradesh Branch",
    clinic: "Smile Dental Clinics — Guntur",
    address:
      "Door No. 8-3-14, Brindavan Gardens Main Road, Guntur – 522002, Andhra Pradesh, India",
    phone: "+91 814978 1447",
    phoneHref: "tel:+918149781447",
    timing: "Mon–Sat: 9:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM",
    services: [
      "General Dentistry",
      "Dental Implants",
      "Braces & Aligners",
      "Pediatric Care",
    ],
    building: "/img/branch-guntur.jpg",
    map: "/img/clinic-ap.jpg",
    mapLabel: "Guntur, Andhra Pradesh",
    interiors: ["/img/sd-cleaning-hero.jpg", "/img/j-consult.jpg"],
  },
  {
    region: "Telangana Branch",
    clinic: "Smile Dental Clinics — Kukatpally, Hyderabad",
    address:
      "Kukatpally Housing Board Colony, Kukatpally, Hyderabad – 500072, Telangana, India",
    phone: "+91 814978 1447",
    phoneHref: "tel:+918149781447",
    timing: "Mon–Sat: 9:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM",
    services: [
      "Cosmetic Dentistry",
      "Clear Aligners",
      "Root Canal Treatment",
      "Family Dentistry",
    ],
    building: "/img/branch-kukatpally.jpg",
    map: "/img/clinic-telangana.jpg",
    mapLabel: "Hyderabad, Telangana",
    interiors: ["/img/sd-implants-hero.jpg", "/img/j-treatment.jpg"],
  },
  {
    region: "Karnataka Branch",
    clinic: "Smilax Dental Clinics — Bellandur, Bengaluru",
    address:
      "Soul Space Spirit Central Mall, Bellandur, Bengaluru – 560103, Karnataka, India",
    phone: "+91 814978 1447",
    phoneHref: "tel:+918149781447",
    timing: "Mon–Sat: 9:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM",
    services: [
      "Dental Implants",
      "Gum Treatment",
      "Crowns & Bridges",
      "Pediatric Care",
    ],
    building: "/img/branch-bellandur.jpg",
    map: "/img/clinic-karnataka.jpg",
    mapLabel: "Bengaluru, Karnataka",
    interiors: ["/img/sd-cosmetic-hero.jpg", "/img/j-plan.jpg"],
  },
  {
    region: "Kuwait Branch",
    clinic: "Smile Dental Clinics — Salmiya, Kuwait",
    address:
      "Block 10, Salem Al-Mubarak Street, Salmiya, Hawally Governorate, Kuwait",
    phone: "+965 6003 7739",
    phoneHref: "tel:+96560037739",
    timing: "Sat–Thu: 9:00 AM – 9:00 PM · Fri: 9:00 AM – 1:00 PM",
    services: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Family Dentistry",
    ],
    building: "/img/branch-kuwait.jpg",
    map: "/img/clinic-kuwait.jpg",
    mapLabel: "Salmiya, Kuwait",
    interiors: ["/img/sd-braces-hero.jpg", "/img/j-discuss.jpg"],
  },
];

const stats = [
  { icon: FaLocationDot, title: "Convenient", sub: "Locations" },
  { icon: FaTrophy, title: "25+ Years", sub: "Experience" },
  { icon: FaUserGroup, title: "50,000+", sub: "Happy Patients" },
  { icon: FaHospital, title: "Modern", sub: "Facilities" },
];

export default function BranchesClient() {
  return (
    <div className="sh-br-page">
      <Header />

      {/* Hero */}
      <section className="sh-sd-hero">
        <div className="sh-sd-hero__frame">
          <div
            className="sh-sd-hero__bg"
            style={{ backgroundImage: "url(/img/branches-hero.jpg)" }}
            role="img"
            aria-label="Map of India and Kuwait showing our branch locations"
          />
          <div className="sh-container sh-sd-hero__inner">
            <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>&gt;</span>
              <strong>Our Branches</strong>
            </nav>
            <div className="sh-sd-hero__text">
              <span className="sh-appt__eyebrow">Our Branches</span>
              <h1>
                Quality Dental Care Across <span>India &amp; Kuwait</span>
              </h1>
              <p>
                Dr. Kiran&apos;s Smile Group brings world-class dental care
                closer to you — modern facilities, experienced specialists and
                the same trusted standards at every location.
              </p>
              <div className="sh-br__hero-feats">
                {heroFeatures.map(({ icon: Icon, label }) => (
                  <span className="sh-br__hero-feat" key={label}>
                    <Icon /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch cards */}
      <section className="sh-br__list">
        <div className="sh-container">
          <div className="sh-sec-head">
            <div className="sh-sec-head__text">
              <h2>Our Dental Clinics</h2>
              <p>
                Every branch is equipped with modern technology and staffed by
                experienced specialists — find the one nearest you.
              </p>
            </div>
          </div>

          <div className="sh-br__cards">
            {branches.map((b) => (
              <div className="sh-br__card" key={b.clinic}>
                <div className="sh-br__building">
                  <img src={b.building} alt={`${b.clinic} building`} />
                </div>
                <div className="sh-br__info">
                  <span className="sh-br__region">{b.region}</span>
                  <h3>
                    <LuMapPin /> {b.clinic}
                  </h3>
                  <p className="sh-br__addr">{b.address}</p>
                  <div className="sh-br__phone">
                    <a href={b.phoneHref}>{b.phone}</a>
                    <a href={b.phoneHref} className="sh-br__call">
                      <FaPhone /> Call Now
                    </a>
                  </div>
                  <p className="sh-br__timing">
                    <FaClock /> {b.timing}
                  </p>
                  <div className="sh-br__tags">
                    {b.services.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="sh-br__side">
                  <div className="sh-br__map">
                    <img src={b.map} alt={`${b.mapLabel} area`} />
                    <span className="sh-br__map-pin">
                      <LuMapPin />
                    </span>
                    <span className="sh-br__map-label">{b.mapLabel}</span>
                  </div>
                  <div className="sh-br__interiors">
                    {b.interiors.map((img) => (
                      <img key={img} src={img} alt={`${b.clinic} interior`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sh-br__stats">
        <div className="sh-container">
          <div className="sh-br__stats-row">
            {stats.map(({ icon: Icon, title, sub }) => (
              <div className="sh-br__stat" key={sub}>
                <span className="sh-br__stat-ic">
                  <Icon />
                </span>
                <div>
                  <h4>{title}</h4>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sh-svc-banner">
        <div className="sh-container">
          <div className="sh-svc-banner__card">
            <div>
              <h2>Book Your Appointment at the Nearest Branch</h2>
              <p>
                Choose your preferred location and schedule your visit in
                minutes.
              </p>
            </div>
            <Link href="/appointment" className="sh-svc-banner__btn">
              <FaCalendarCheck /> Book Appointment
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
