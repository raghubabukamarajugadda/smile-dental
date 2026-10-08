import doctors from "@/data/doctors";
import DoctorCard from "./DoctorCard";
import Specialties from "./Specialties";

export default function DoctorsTeam() {
  const founders = doctors.slice(0, 2);
  const team = doctors.slice(2);

  return (
    <section className="sh-docs-team" id="team">
      <div className="sh-container">
        <div className="sh-docs-team__head">
          <div>
            <span className="sh-docs-hero__eyebrow">Our Founders</span>
            <h2>Built on Experience. Driven by Patient Care.</h2>
          </div>
          <p>
            Our leadership team brings together decades of expertise, innovation,
            and a shared commitment to delivering the best possible care for every
            patient who walks through our doors.
          </p>
        </div>

        <div className="sh-docs-founders__grid">
          {founders.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} featured />
          ))}
        </div>
      </div>

      <div className="sh-container">
        <div className="sh-docs-team__head">
          <div>
            <span className="sh-docs-hero__eyebrow">Our Specialist Team</span>
            <h2>A Team of Experts for Complete Dental Care</h2>
          </div>
          <p>
            Our specialists bring deep expertise and a shared commitment to
            delivering the best possible care for you and your family.
          </p>
        </div>

        <div className="sh-docs-team__grid">
          {team.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      <div className="sh-container">
        <Specialties />
      </div>
    </section>
  );
}
