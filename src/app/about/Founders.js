import { FaQuoteLeft, FaCheck } from "react-icons/fa6";

const founders = [
  {
    name: "Dr. Kiran",
    role: "MDS - Prosthodontist",
    title: "Founder & Chief Dentist",
    image: "/img/DrKiran.png",
    points: [
      "Specialist in Implants & Advanced Restorations",
      "25+ years of experience",
      "Passionate about ethical and patient-centric care",
    ],
  },
  {
    name: "Dr. Kavitha",
    role: "MDS - General Dentistry",
    title: "Founder & General Dentist",
    image: "/img/DrKavitha.png",
    points: [
      "Expert in General & Preventive Dentistry",
      "Focus on family and child-friendly care",
      "Committed to comfortable and painless dental treatment",
    ],
  },
];

export default function Founders() {
  return (
    <section className="sh-founders">
      <div className="sh-container">
        <div className="sh-founders__grid">
          <div className="sh-founders__copy">
            <span className="sh-story__eyebrow">Our Founders</span>
            <h2>
              Experienced Leaders.
              <br />
              Compassionate Care.
            </h2>
            <p>
              Dr. Kiran and Dr. Kavitha founded Dr. Kiran&apos;s Smile Group
              with a shared passion for creating healthy, confident smiles. With
              decades of clinical experience and a commitment to continuous
              learning, they have built a team and system that ensures
              world-class dental care with a personal touch.
            </p>
            <blockquote className="sh-story__quote">
              <FaQuoteLeft className="sh-story__quote-icon" />
              <div className="sh-story__quote-body">
                <p>
                  &ldquo;Our goal is simple – to provide world-class dental care
                  with the latest technology, honest guidance and a
                  compassionate approach.&rdquo;
                </p>
                <cite>– Dr. Kiran &amp; Dr. Kavitha</cite>
              </div>
            </blockquote>
          </div>

          <div className="sh-founders__cards">
            {founders.map((f) => (
              <div className="sh-founder-card" key={f.name}>
                <div className="sh-founder-card__media">
                  <img src={f.image} alt={f.name} />
                </div>
                <div className="sh-founder-card__body">
                  <h4>{f.name}</h4>
                  {f.role && <span className="sh-founder-card__role">{f.role}</span>}
                  {f.title && <span className="sh-founder-card__title">{f.title}</span>}
                  <ul>
                    {f.points.map((p) => (
                      <li key={p}>
                        <FaCheck className="sh-founder-card__dot" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
