import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Clients from "../Home/Clients";
import Appoinment from "../Home/Appoinment";
import Header from "@/components/Header/Header";

export default function Service() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Service" menuText="Service" />

      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="General Dentistry"
                desc="Comprehensive dental care including routine checkups, cleanings, and fillings to maintain your oral health."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="Teeth Whitening"
                desc="Professional-grade whitening solutions for a brighter smile, available in-chair or take-home kits."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-heart-alt"
                title="Root Canal Therapy"
                desc="Pain-free root canal treatments to save infected teeth and restore oral health."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-listening"
                title="Pediatric Dentistry"
                desc="Gentle, specialized care for children, ensuring their smiles stay healthy from an early age."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-eye-alt"
                title="Dental Implants"
                desc="Permanent, natural-looking tooth replacements with a 95% success rate."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-blood"
                title="Gum Treatments"
                desc="Advanced gum care to treat gum disease and maintain healthy gums and teeth."
              />
            </div>
          </div>
        </div>
      </section>

      <Clients />

      <Appoinment />
    </>
  );
}
