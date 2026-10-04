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
    children: [
      { label: "All Services", href: "/service" },
      { label: "Dental Implants", href: "/service-details" },
      { label: "Braces & Aligners", href: "/service-details" },
      { label: "Root Canal Treatment", href: "/service-details" },
      { label: "Cosmetic Dentistry", href: "/service-details" },
      { label: "Pediatric Dentistry", href: "/service-details" },
    ],
  },
  {
    label: "Our Branches",
    href: "#",
    children: [
      { label: "Andhra Pradesh", href: "#" },
      { label: "Telangana", href: "#" },
      { label: "Karnataka", href: "#" },
      { label: "Kuwait", href: "#" },
    ],
  },
  {
    label: "Patient Guide",
    href: "#",
    children: [
      { label: "Book Appointment", href: "/appointment" },
      { label: "FAQs", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Our Pricing", href: "/pricing" },
    ],
  },
  { label: "Gallery", href: "/portfolio-details" },
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
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <li key={child.label}>
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
