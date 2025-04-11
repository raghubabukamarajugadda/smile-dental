import Breadcrumbs from "@/components/Breadcrumbs";
import PrivacyPolicy from "./PrivacyPolicy";

import Header from "@/components/Header/Header";

export default function Privacy() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Privacy Policy" menuText="Privacy Policy" />
      <PrivacyPolicy />

    </>
  );
}
