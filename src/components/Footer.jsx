import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">

        <div className="footer__col">
          <h4 className="footer__col-title">Navigation</h4>
          <ul className="footer__links">
            <li><a href="#top"      className="footer__link">Home</a></li>
            <li><a href="#lenders"  className="footer__link">For Lenders</a></li>
            <li><a href="#agencies" className="footer__link">For Collection Agencies</a></li>
          </ul>
        </div>

        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3"  y="3"  width="8" height="8" rx="2" fill="#2563EB"/>
              <rect x="13" y="3"  width="8" height="8" rx="2" fill="#93C5FD"/>
              <rect x="3"  y="13" width="8" height="8" rx="2" fill="#93C5FD"/>
              <rect x="13" y="13" width="8" height="8" rx="2" fill="#2563EB"/>
            </svg>
            <span className="footer__logo-text">Collectedge</span>
          </div>
          <p className="footer__brand-desc">
            Our tool is designed with agencies & collection managers in mind,
            ensuring user-friendly experience tailored to their needs
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <ul className="footer__links">
            <li>
              <a href="mailto:info@letsdai.com" className="footer__link footer__link--icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#94A3B8" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="#94A3B8" strokeWidth="2"/>
                </svg>
                info@letsdai.com
              </a>
            </li>
            <li>
              <span className="footer__link footer__link--icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#94A3B8" strokeWidth="2"/>
                  <circle cx="12" cy="9" r="2.5" stroke="#94A3B8" strokeWidth="2"/>
                </svg>
                Lorem ipsum is simply dummy text of the printing
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copy">© 2024, Lorem ipsum is simply dummy</p>
      </div>
    </footer>
  );
}
