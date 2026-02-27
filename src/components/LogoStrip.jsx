import React from "react";
import "./LogoStrip.css";

const logos = [
  { id: 1, render: () => <span className="logo-text">BAJAJ <span className="logo-primary">Allianz</span> ®</span> },
  { id: 2, render: () => (
    <span className="logo-text logo-flex">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#F37021" strokeWidth="2.5"/>
        <path d="M8 12h8M12 8v8" stroke="#F37021" strokeWidth="2"/>
      </svg>
      <em>ICICI</em>&nbsp;Bank
    </span>
  )},
  { id: 3, render: () => <span className="logo-text logo-blue">✓ YES BANK</span> },
  { id: 4, render: () => (
    <span className="logo-text logo-flex">
      <svg width="16" height="16" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#FF6B00"/>
        <path d="M8 16 Q12 8 16 16" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
      udaan
    </span>
  )},
  { id: 5, render: () => <span className="logo-text">BAJAJ <span className="logo-primary">Allianz</span> ®</span> },
  { id: 6, render: () => <span className="logo-text">IndusInd Bank</span> },
  { id: 7, render: () => <span className="logo-text logo-blue">✓ YES BANK</span> },
];

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <p className="logo-strip__tagline">
        Join <strong>4,000+</strong> Companies Already Grow
      </p>
      <div className="logo-strip__wrapper">
        <div className="logo-strip__track">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="logo-item">{logo.render()}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
