import SectionHead from "@/components/SectionHead";
import PricingData from "./PricingData";

export default function Pricing() {
  return (
    <>
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Affordable, Transparent Pricing for Exceptional Dental Care"
                desc="We believe quality dental care should be accessible to everyone. Explore our competitive pricing for a wide range of treatments, from routine checkups to advanced procedures."
              />
            </div>
          </div>
          <div className="row">
            <PricingData />
          </div>
        </div>
      </section>
    </>
  );
}
