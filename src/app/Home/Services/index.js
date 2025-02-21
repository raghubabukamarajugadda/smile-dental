import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Comprehensive Dental Care for All Ages"
                desc="From routine checkups to advanced smile transformations, we combine cutting-edge technology with expert care for optimal oral health."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="General Dentistry"
                desc="Regular checkups, cleanings, and fillings to maintain your oral health and prevent dental issues."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-flash"
                title="Teeth Whitening"
                desc="Professional-grade whitening solutions for a brighter smile - available in-chair or take-home kits."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Dental Implants"
                desc="Permanent, natural-looking replacements for missing teeth using premium implant systems."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-baby"
                title="Pediatric Care"
                desc="Gentle dental treatments and education to establish lifelong healthy habits for children."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Orthodontics"
                desc="Braces & clear aligners for perfectly aligned teeth - customized for teens and adults."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Root Canal Therapy"
                desc="Pain-free treatment to save infected teeth using advanced rotary endodontics."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
