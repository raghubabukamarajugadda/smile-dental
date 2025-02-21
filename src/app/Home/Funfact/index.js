import FunfactCard from "@/components/FunfactCard";

export default function Funfact() {
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-tooth"
                number="8"
                desc="Clinics Nationwide"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-user-alt-3"
                number="25+"
                desc="Expert Specialists"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont-simple-smile"
                number="25000+"
                desc="Smiles Transformed"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-history"
                number="25"
                desc="Years of Excellence"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
