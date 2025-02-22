import SectionHead from "@/components/SectionHead";
import TabData from "./TabData";

import SectiomImg from "../../../../public/img/section-img.png";

export default function Departments() {
  return (
    <>
      <section className="departments section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Your Trusted Partner in Advanced Dental Care"
                img={SectiomImg}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <TabData />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
