import Breadcrumbs from "@/components/Breadcrumbs";
import RefundPolicy from "./RefundPolicy";

import Header from "@/components/Header/Header";

export default function RefundPage() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Refund Policy" menuText="Refund Policy" />
      <RefundPolicy />

    </>
  );
}
