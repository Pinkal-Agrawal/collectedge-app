import React, { useState } from "react";
import "./ForAgencies.css";

const TABS = ["Accelerate Business Growth", "Technology & Data driven operations"];

const TAB_DATA = [
  {
    title: "Unlock more business without increasing operational overhead",
    percent: 70,
    label: "Your DPD Resolution Rate is Good",
    sublabel: "Last Check on 21 Apr",
    features: [
      { text: "Get more volume in your serviceable pincodes" },
      { text: "Manage all allocations on a single tool allowing you to maximize resource utilization." },
      { text: "Discover pincodes with high potential to expand your serviceability" },
    ],
  },
 {
    title: "Unlock more business without increasing operational overhead",
    percent: 70,
    label: "Your DPD Resolution Rate is Good",
    sublabel: "Last Check on 21 Apr",
    features: [
      { text: "Get more volume in your serviceable pincodes" },
      { text: "Manage all allocations on a single tool allowing you to maximize resource utilization." },
      { text: "Discover pincodes with high potential to expand your serviceability" },
    ],
  },
];

function GaugeSVG({ percent }) {
  const filled = (percent / 100) * 212;
  return (
    <div className="gauge">
      <svg viewBox="0 0 160 100" width="190" height="110">
        <path d="M 16 90 A 68 68 0 0 1 144 90" fill="none" stroke="#E0EAFF" strokeWidth="14" strokeLinecap="round"/>
        <path d="M 16 90 A 68 68 0 0 1 144 90" fill="none" stroke="url(#gaugeGrad)"
          strokeWidth="14" strokeLinecap="round"
          strokeDasharray={`${filled} 212`}/>
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#2563EB"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="gauge__label">{percent}%</div>
    </div>
  );
}

export default function ForAgencies() {
  const [active, setActive] = useState(0);
  const d = TAB_DATA[active];

  return (
    <section className="for-agencies" id="agencies">
      <div className="for-agencies__container">

        <div className="for-agencies__header">
          <span className="section-label">For Agencies</span>
          <h2 className="section-heading for-agencies__heading">
            We fuel demand and empower agencies to
            <br />
            execute with unmatched{" "}
            <span className="highlight">efficiency and reliability.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="agencies-tabs">
          {TABS.map((tab, i) => (
            <button
              key={i}
              className={`agencies-tab ${active === i ? "agencies-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="agencies-content">
          {/* Left panel — gauge */}
          <div className="agencies-panel agencies-panel--left">
            <p className="agencies-panel__title">{d.title}</p>
            <GaugeSVG percent={d.percent} />
            <p className="agencies-panel__label">{d.label}</p>
            <p className="agencies-panel__sublabel">{d.sublabel}</p>
          </div>

          {/* Right panel — features */}
          <div className="agencies-panel agencies-panel--right">
            {d.features.map((f, i) => (
              <div className="agencies-feature" key={i}>
                <div className="agencies-feature__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="#2563EB" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="agencies-feature__text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
