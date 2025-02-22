"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="main-menu">
        <nav className="navigation">
          <ul className="nav menu">
            <li>
              <Link className={` ${pathname === "/" ? "active" : ""}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/doctors" ? "active" : ""}`}
                href="/doctors"
              >
                Doctors 
              </Link>
              
            </li>
            <li>
              <Link className={` ${pathname === "/service" ? "active" : ""}`}
                    href="/service">
                Services 
              </Link>
              
            </li>
            <li>
              <Link href="#">
                Pages <i className="icofont-rounded-down"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <Link
                    className={` ${pathname === "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/appointment" ? "active" : ""
                    }`}
                    href="/appointment"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/time-table" ? "active" : ""}`}
                    href="/time-table"
                  >
                    Time Table
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/testimonials" ? "active" : ""
                    }`}
                    href="/testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/pricing" ? "active" : ""}`}
                    href="/pricing"
                  >
                    Our Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/register" ? "active" : ""}`}
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/login" ? "active" : ""}`}
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/faq" ? "active" : ""}`}
                    href="/faq"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      pathname === "/mail-success" ? "active" : ""
                    }`}
                    href="/mail-success"
                  >
                    Mail Success
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${pathname === "/404" ? "active" : ""}`}
                    href="/404"
                  >
                    404 Error
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={` ${pathname === "/blog-grid" ? "active" : ""}`}
                    href="/blog-grid">
                Blogs 
              </Link>
              
            </li>
            <li>
              <Link
                className={` ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
