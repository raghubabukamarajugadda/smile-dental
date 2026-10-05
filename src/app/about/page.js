import Header from "@/components/Header/Header";

import AboutHero from "./AboutHero";
import Story from "./Story";
import Milestones from "./Milestones";
import Founders from "./Founders";
import Purpose from "./Purpose";
import Clinics from "./Clinics";
import AboutBranches from "./AboutBranches";
import AboutCta from "./AboutCta";

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <Story />
      <Milestones />
      <Founders />
      <Purpose />
      <Clinics />
      <AboutBranches />
      <AboutCta />
    </>
  );
}
