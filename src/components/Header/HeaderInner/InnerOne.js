"use client";

import Link from "next/link";
import { LuCalendarDays } from "react-icons/lu";
import useStickyHeader from "./useStickyHeader";

import Logo from "../Logo";
import Navbar from "../Navbar";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderInner() {
  const { isSticky } = useStickyHeader();

  return (
    <div className={`header-inner sh-header ${isSticky ? "sticky" : ""}`}>
      <div className="sh-container sh-header__row">
        <div className="sh-header__logo mobile-menu-sticky">
          <Logo />
          <MobileOffcanvas />
        </div>
        <Navbar />
        <Link href="/appointment" className="sh-btn sh-btn--orange sh-header__cta">
          <LuCalendarDays /> Book Appointment
        </Link>
      </div>
    </div>
  );
}
