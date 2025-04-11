import Breadcrumbs from "@/components/Breadcrumbs";
import TermsAndConditions from "./TermsAndConditions";

import Header from "@/components/Header/Header";

export default function TermsPage() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Terms & Conditions" menuText="Terms" />
      <TermsAndConditions />

    </>
  );
}
