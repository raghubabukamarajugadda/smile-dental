import Header from "@/components/Header/Header";
import DoctorsHero from "./DoctorsHero";
import DoctorsTeam from "./DoctorsTeam";
import AboutBranches from "../about/AboutBranches";
import AboutCta from "../about/AboutCta";

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <DoctorsHero />
      <DoctorsTeam />
      <AboutBranches />
      <AboutCta />
    </>
  );
}
