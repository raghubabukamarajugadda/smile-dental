"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Offcanvas } from "react-bootstrap";

import Logo from "../../../public/img/logo_smile.png";

export default function MobileOffcanvas() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to toggle the sub-menu
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Function to check if a menu item is active
  const isActive = (path) => pathname === path;

  const menu = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Doctors", href: "/doctors" },
    {
      label: "Dental Services",
      children: [
        { label: "All Services", href: "/service" },
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
      children: [
        { label: "Book Appointment", href: "/appointment" },
        { label: "FAQs", href: "/faq" },
        { label: "Testimonials", href: "/testimonials" },
      ],
    },
    { label: "Articles", href: "/blog-grid" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* <!-- Mobile Menu Modal --> */}
      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo">
                <Link href="/">
                  <Image src={Logo} alt="#" width={178} height={37} />
                </Link>
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu-modal-main-body">
              {/* Offcanvas Menu */}
              <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                <ul id="nav" className="list-none offcanvas-men-list">
                  {menu.map((item, i) => (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <Link
                            className="menu-arrow"
                            onClick={() => toggleSubMenu(i)}
                            href="#"
                          >
                            {item.label}{' '}
                            <i className="icofont-rounded-down"></i>
                          </Link>
                          <ul
                            className={`sub-menu ${
                              openSubMenu === i ? "open" : ""
                            }`}
                          >
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link onClick={handleClose} href={child.href}>
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          onClick={handleClose}
                          className={isActive(item.href) ? 'active' : ''}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Mobile menu modal bottom */}
            <div className="mobile-menu-modal-bottom">
              <Link href="/appointment" className="btn" onClick={handleClose}>
                Appointment
              </Link>
            </div>
          </div>
        </div>
      </Offcanvas>
      {/* <!-- End Mobile Menu Modal --> */}
    </>
  );
}
