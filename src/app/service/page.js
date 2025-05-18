import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Clients from "../Home/Clients";
import Appoinment from "../Home/Appoinment";
import Header from "@/components/Header/Header";
import SectionHead from "@/components/SectionHead";

export default function Service() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Service" menuText="Service" />

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
                icon="dental-care.png"
                title="Crowns & Bridges"
                desc="Restore function and aesthetics with durable, custom-made solutions for damaged or missing teeth."
              />
            </div>

            {/* Root Canal Treatment */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="root-canal.png"
                title="Root Canal Treatment"
                desc="Pain-free RCT using rotary endodontics to save infected teeth. 98% success rate with permanent relief."
              />
            </div>

            {/* Cosmetic Dentistry */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="teethscaling.png"
                title="Cosmetic Dentistry"
                desc="Smile makeovers with veneers, laminates & teeth contouring. Achieve Hollywood-worthy smiles."
              />
            </div>

            {/* Pediatric Dentistry */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="dentist.png"
                title="Pediatric Dentistry"
                desc="Fun, fear-free visits for kids. Specialized care for milk teeth and early orthodontic guidance."
              />
            </div>

            {/* Dental Implants */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="dental-implant.png"
                title="Dental Implants"
                desc="Permanent tooth replacements with 95% osseointegration success. Metal-free zirconia options available."
              />
            </div>

            {/* Orthodontics */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="teeth.png"
                title="Orthodontics"
                desc="Invisible aligners & modern braces for all ages. Correct crowding, gaps, and bite issues."
              />
            </div>

            {/* Teeth Whitening & Scaling */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="tooth-whitening.png"
                title="Teeth Whitening & Scaling"
                desc="Professional cleaning & whitening. Remove 10+ years of stains in one session."
              />
            </div>

            {/* Gum Treatment */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="gingivitis.png"
                title="Gum Treatment"
                desc="Laser therapy & flap surgery for severe periodontitis. Stop gum recession effectively."
              />
            </div>
            {/* Diagnosis & Treatment Planning */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="treatment.png"
                title="Diagnosis & Treatment Planning"
                desc="Detailed clinical and radiographic analysis to craft accurate, personalized treatment plans."
              />
            </div>

            {/* Oral Pathology */}
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="microscope.png"
                title="Oral Pathology"
                desc="Detection and management of oral diseases, lesions, and abnormalities through biopsy and lab testing."
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
