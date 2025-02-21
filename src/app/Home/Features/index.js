import FeatureCard from "@/components/FeatureCard";
import SectionHead from "@/components/SectionHead";

export default function Features(props) {
  const { sectionName } = props;

  return (
    <>
      <section className={sectionName ? sectionName : "Feautes section"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="We Are Always Ready to Help You & Your Family"
                desc="Where compassion meets cutting-edge dental care. Your family's oral health is our highest priority, supported by 25+ years of trusted expertise."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-ambulance-cross"
                title="24/7 Dental Emergency"
                desc="Immediate care for toothaches, injuries, and urgent cases. Our team is always on standby with pain-relief solutions."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features"
                icon="icofont icofont-medical-sign-alt"
                title="Dental Pharmacy"
                desc="Complete range of oral care products, branded medications, and post-treatment kits available at all branches."
              />
            </div>
            <div className="col-lg-4 col-12">
              <FeatureCard
                cardClass="single-features last"
                icon="icofont icofont-stethoscope"
                title="Specialist Consultations"
                desc="Personalized treatment plans from implant surgeons, orthodontists, and pediatric dental experts."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
