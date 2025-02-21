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
                title="Complete Dental Solutions for Your Smile"
                desc="From preventive care to advanced treatments, we offer comprehensive dental services tailored to patients of all ages."
              />
            </div>
          </div>
          <div className="row">
            {/* Crowns & Bridges */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-crown"
                title="Crowns & Bridges"
                desc="Restore tooth functionality and aesthetics with custom-designed crowns & bridges. Durable solutions for damaged/missing teeth."
              />
            </div>

            {/* Root Canal Treatment */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-dental-drill"
                title="Root Canal Treatment"
                desc="Pain-free RCT using rotary endodontics to save infected teeth. 98% success rate with permanent relief."
              />
            </div>

            {/* Cosmetic Dentistry */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-smile"
                title="Cosmetic Dentistry"
                desc="Smile makeovers with veneers, laminates & teeth contouring. Achieve Hollywood-worthy smiles."
              />
            </div>

            {/* Pediatric Dentistry */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-baby"
                title="Pediatric Dentistry"
                desc="Fun, fear-free visits for kids. Specialized care for milk teeth and early orthodontic guidance."
              />
            </div>

            {/* Dental Implants */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-implant"
                title="Dental Implants"
                desc="Permanent tooth replacements with 95% osseointegration success. Metal-free zirconia options available."
              />
            </div>

            {/* Orthodontics */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-braces"
                title="Orthodontics"
                desc="Invisible aligners & modern braces for all ages. Correct crowding, gaps, and bite issues."
              />
            </div>

            {/* Teeth Whitening & Scaling */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="bi bi-0-square"
                title="Teeth Whitening & Scaling"
                desc="Professional cleaning & whitening. Remove 10+ years of stains in one session."
              />
            </div>

            {/* Gum Treatment */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-medical-sign"
                title="Gum Treatment"
                desc="Laser therapy & flap surgery for severe periodontitis. Stop gum recession effectively."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
