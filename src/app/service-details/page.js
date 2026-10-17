import { Suspense } from "react";
import ServiceDetailsClient from "./ServiceDetailsClient";

export const metadata = {
  title: "Service Details | Smile Dental",
  description:
    "Explore our dental treatments in detail — what's involved, your treatment journey, benefits and FAQs.",
};

export default function ServiceDetailsPage() {
  return (
    <Suspense>
      <ServiceDetailsClient />
    </Suspense>
  );
}
