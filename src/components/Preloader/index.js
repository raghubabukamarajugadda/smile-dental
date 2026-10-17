"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaTooth } from "react-icons/fa6";

export default function Preloader() {
  const pathname = usePathname();
  const [booting, setBooting] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [navLoading, setNavLoading] = useState(false);

  useEffect(() => {
    let done = false;
    const hide = () => {
      if (done) return;
      done = true;
      setLeaving(true);
      setTimeout(() => setBooting(false), 450);
    };
    const onLoad = () => setTimeout(hide, 400);
    if (document.readyState === "complete") {
      const t = setTimeout(hide, 900);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", onLoad, { once: true });
    const fallback = setTimeout(hide, 2200);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href === pathname) return;
      setNavLoading(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (!navLoading) return;
    const t = setTimeout(() => setNavLoading(false), 700);
    return () => clearTimeout(t);
  }, [pathname, navLoading]);

  return (
    <>
      {booting && (
        <div className={`sh-pre${leaving ? " sh-pre--leave" : ""}`}>
          <div className="sh-pre__mark">
            <img
              className="sh-pre__mark-base"
              src="/img/logo_smile.png"
              alt="Dr. Kiran's Smile Group"
            />
            <div className="sh-pre__water">
              <img src="/img/logo_smile.png" alt="" />
            </div>
          </div>
          <div className="sh-pre__bar">
            <span />
          </div>
        </div>
      )}
      {navLoading && !booting && (
        <div className="sh-navload">
          <div className="sh-navload__box">
            <span className="sh-navload__w1" />
            <span className="sh-navload__w2" />
            <FaTooth className="sh-navload__icon" />
          </div>
        </div>
      )}
    </>
  );
}
