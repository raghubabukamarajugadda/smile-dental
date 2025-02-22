import Link from "next/link";

const Data = [
  {
    title: "Teeth Whitening",
    icon: "icofont-tooth",
    price: 9999,
    features: [
      { name: "Professional in-chair whitening", status: true },
      { name: "Stain removal & polishing", status: true },
      { name: "Customized treatment plan", status: true },
      { name: "Post-whitening care instructions", status: true },
      { name: "Take-home maintenance kit", status: false },
    ],
  },
  {
    title: "Root Canal + Metal Crown",
    icon: "icofont-crown",
    price: 5999,
    features: [
      { name: "Single-visit root canal therapy", status: true },
      { name: "High-quality metal crown", status: true },
      { name: "Pain-free anesthesia", status: true },
      { name: "Post-treatment follow-up", status: true },
      { name: "EHS & EMI options available", status: true },
    ],
  },
  {
    title: "Outpatient Consultation",
    icon: "icofont-stethoscope",
    price: 299,
    features: [
      { name: "Comprehensive oral examination", status: true },
      { name: "Personalized treatment plan", status: true },
      { name: "Digital X-rays (if needed)", status: true },
      { name: "Emergency dental care", status: true },
      { name: "Discount on follow-up treatments", status: true },
    ],
  },
];

export default function PricingData() {
  return (
    <>
      {Data.map((pricing, index) => (
        <div key={index} className="col-lg-4 col-md-12 col-12">
          <div className="single-table">
            <div className="table-head">
              <div className="icon">
                <i className={`icofont ${pricing.icon}`}></i>
              </div>
              <h4 className="title">{pricing.title}</h4>
              <div className="price">
                <p className="amount">
                  ${pricing.price}
                  <span>/ Per Visit</span>
                </p>
              </div>
            </div>
            <ul className="table-list">
              {pricing.features.map((feature, index) => (
                <li key={index} className={feature.status ? "" : "cross"}>
                  {feature.status ? (
                    <i className="icofont icofont-ui-check"></i>
                  ) : (
                    <i className="icofont icofont-ui-close"></i>
                  )}
                  {feature.name}
                </li>
              ))}
            </ul>
            <div className="table-bottom">
              <Link className="btn" href="#">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
