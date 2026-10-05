const clinics = [
  { src: "/img/Interior1.png", alt: "Smile Group modern dental operatory" },
  { src: "/img/Interior2.png", alt: "Smile Group reception and waiting area" },
  { src: "/img/Interior3.png", alt: "Smile Group treatment room" },
  { src: "/img/Interior4.png", alt: "Smile Group dental chair and equipment" },
];

export default function Clinics() {
  return (
    <section className="sh-clinics">
      <div className="sh-container">
        <div className="sh-clinics__head">
          <span className="sh-story__eyebrow">Our Clinics</span>
          <h2>Modern Facilities. Comfortable Spaces.</h2>
          <p>
            Our clinics are designed with state-of-the-art equipment and a
            patient-centric approach to ensure a comfortable and stress-free
            dental experience.
          </p>
        </div>

        <div className="sh-clinics__grid">
          {clinics.map(({ src, alt }) => (
            <div className="sh-clinics__photo" key={src}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
