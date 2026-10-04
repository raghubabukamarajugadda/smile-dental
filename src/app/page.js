import Header from "@/components/Header/Header";

import CleanCare from "./Home/CleanCare";
import Funfact from "./Home/Funfact";
import Hero from "./Home/Hero";

import Pricing from "./Home/Pricing";
import BranchFaq from "./Home/BranchFaq";

import Services from "./Home/Services";
import Team from "./Home/Team";
import Testimonial from "./Home/Testimonials";
import WhyChoose from "./Home/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Funfact />
      <WhyChoose />
      <CleanCare />
      <Team />
      <Testimonial />
      <Pricing />
      <BranchFaq />
    </>
  );
}
