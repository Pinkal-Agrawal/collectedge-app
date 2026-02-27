import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        <div className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="2" fill="#2563EB" />
            <rect x="13" y="3" width="8" height="8" rx="2" fill="#93C5FD" />
            <rect x="3" y="13" width="8" height="8" rx="2" fill="#93C5FD" />
            <rect x="13" y="13" width="8" height="8" rx="2" fill="#2563EB" />
          </svg>
          <span className="navbar__logo-text">Collectedge</span>
        </div>

        <ul className="navbar__links">
          <li><a href="#top" className="navbar__link navbar__link--active">Home</a></li>
          <li><a href="#lenders" className="navbar__link">For Lenders</a></li>
          <li><a href="#agencies" className="navbar__link">For Collection Agencies</a></li>
        </ul>

        <button className="btn-primary navbar__cta">Get in touch</button>
      </div>
    </nav>
  );
}
