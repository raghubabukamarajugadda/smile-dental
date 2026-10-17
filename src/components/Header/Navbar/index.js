"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronDown } from "react-icons/lu";

const menu = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  {
    label: "Dental Services",
    href: "/service",
    wide: true,
    children: [
      { label: "All Services", href: "/service", full: true },
      { label: "Dental Implants", href: "/service-details?service=svc-implants" },
      { label: "Braces & Aligners", href: "/service-details?service=svc-braces" },
      { label: "Root Canal Treatment", href: "/service-details?service=svc-rootcanal" },
      { label: "Cleaning & Scaling", href: "/service-details?service=svc-cleaning" },
      { label: "Cosmetic Dentistry", href: "/service-details?service=svc-cosmetic" },
      { label: "Pediatric Dentistry", href: "/service-details?service=svc-pediatric" },
      { label: "Crowns & Bridges", href: "/service-details?service=svc-crowns" },
      { label: "Gum Treatment", href: "/service-details?service=svc-gum" },
      { label: "Dentures", href: "/service-details?service=svc-dentures" },
      { label: "Wisdom Tooth Removal", href: "/service-details?service=svc-wisdom" },
      { label: "Digital X-Ray & Diagnostics", href: "/service-details?service=svc-xray" },
      { label: "Full Mouth Rehabilitation", href: "/service-details?service=svc-rehab" },
    ],
  },
  { label: "Our Branches", href: "/branches" },
  {
    label: "Patient Guide",
    href: "#",
    children: [
      { label: "Book Appointment", href: "/appointment" },
      { label: "FAQs", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Articles", href: "/blog-grid" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="main-menu sh-nav">
      <nav className="navigation">
        <ul className="nav menu">
          {menu.map((item) => {
            const active =
              item.href === pathname || item.children?.some((c) => c.href === pathname);
            return (
              <li key={item.label}>
                <Link className={active ? "active" : ""} href={item.href}>
                  {item.label}
                  {item.children && <LuChevronDown className="sh-nav__chevron" />}
                </Link>
                {item.children && (
                  <ul
                    className={`dropdown${item.wide ? " dropdown--wide" : ""}`}
                  >
                    {item.children.map((child) => (
                      <li
                        key={child.label}
                        className={child.full ? "dropdown__full" : undefined}
                      >
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
