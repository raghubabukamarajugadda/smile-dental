import { PiToothFill, PiHospitalFill, PiUsersThreeFill, PiShieldCheckFill } from "react-icons/pi";

const stats = [
  { icon: PiToothFill, title: "50,000+", sub: "Happy Patients", big: true },
  { icon: PiHospitalFill, title: "Multiple Branches", sub: "AP | Telangana | Karnataka | Kuwait" },
  { icon: PiUsersThreeFill, title: "Experienced Dentists", sub: "Specialists in All Fields" },
  { icon: PiShieldCheckFill, title: "Modern & Hygienic Clinics", sub: "International Standards" },
];

export default function Funfact() {
  return (
    <section className="sh-stats-wrap">
      <div className="sh-container">
        <div className="sh-stats">
          {stats.map(({ icon: Icon, title, sub, big }) => (
            <div key={title} className="sh-stats__item">
              <span className="sh-stats__icon">
                <Icon />
              </span>
              <div>
                <h3 className={big ? "is-big" : ""}>{title}</h3>
                <p>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
