import {
  FaHospital,
  FaChartLine,
  FaUserGroup,
  FaTooth,
  FaLocationDot,
  FaEarthAsia,
} from "react-icons/fa6";

const milestones = [
  { icon: FaHospital, year: "1999", text: "Started our first clinic" },
  { icon: FaChartLine, year: "2005", text: "Expanded with advanced treatments" },
  { icon: FaUserGroup, year: "2010", text: "Became a multi-speciality dental center" },
  { icon: FaTooth, year: "2015", text: "Introduced digital dentistry & laser technology" },
  { icon: FaLocationDot, year: "2020", text: "Expanded to multiple cities across India" },
  { icon: FaEarthAsia, year: "Today", text: "8+ clinics in India and Kuwait" },
];

export default function Milestones() {
  return (
    <section className="sh-milestones">
      <div className="sh-container">
        <div className="sh-milestones__head">
          <span className="sh-story__eyebrow">Our Journey</span>
          <h2>Milestones in Our Growth</h2>
          <p>
            A journey built on trust, innovation and thousands of beautiful
            smiles.
          </p>
        </div>
        <ol className="sh-milestones__track">
          {milestones.map(({ icon: Icon, year, text }) => (
            <li className="sh-milestones__item" key={year}>
              <span className="sh-milestones__icon">
                <Icon />
              </span>
              <strong>{year}</strong>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
