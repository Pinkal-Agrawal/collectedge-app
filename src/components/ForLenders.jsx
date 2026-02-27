import React from "react";
import chartCard from "../assets/chart-card.png";
import aflCard from "../assets/afl-card.png";
import "./ForLenders.css";

const agents = [
  { name: "Cheyenne Gouse",          location: "Serviced: Bangalore, Chennai", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Cristofer Ekstrom Bothman", location: "Serviced: Bangalore, Chennai", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Martin Torff",             location: "Serviced: Bangalore, Chennai", img: "https://randomuser.me/api/portraits/men/65.jpg" },
];

const stripAvatars = [
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
  "https://randomuser.me/api/portraits/men/73.jpg",
];

function ApiDiagram() {
  return (
    <div className="api-diagram">
      <svg className="api-diagram__lines" viewBox="0 0 340 200" fill="none" preserveAspectRatio="none">
        <line x1="68"  y1="100" x2="220" y2="56"  stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="5 4"/>
        <line x1="68"  y1="100" x2="220" y2="100" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="5 4"/>
        <line x1="68"  y1="100" x2="220" y2="148" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="5 4"/>
      </svg>

      {/* Source node */}
      <div className="api-node api-node--source">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <polyline points="16 18 22 12 16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <polyline points="8 6 2 12 8 18"   stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Hub */}
      <div className="api-node api-node--hub">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
        </svg>
      </div>

      {/* Right nodes */}
      <div className="api-node api-node--right api-node--rt">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#3B82F6" strokeWidth="2"/>
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#3B82F6" strokeWidth="2"/>
        </svg>
      </div>
      <div className="api-node api-node--right api-node--rm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#3B82F6" strokeWidth="2"/>
          <path d="M9 9h6M9 12h6M9 15h4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="api-node api-node--right api-node--rb">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="api-badge">API integration</div>
    </div>
  );
}

export default function ForLenders() {
  return (
    <section className="for-lenders" id="lenders">
      <div className="for-lenders__container">

        <div className="for-lenders__header">
          <span className="section-label">For Lenders</span>
          <h2 className="section-heading">
            We're changing the game with{" "}
            <span className="highlight">one</span>
            <br />
            <span className="highlight">complete agency management tool</span>
          </h2>
        </div>

        <div className="lenders-grid">

          {/* ── Card 1: Intuitive ── */}
          <div className="lenders-card">
            <div className="lenders-card__icon-row">
              <div className="lenders-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#1D4ED8" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="lenders-card__title">
                Intuitive & Agent <span className="lenders-card__title-blue">Focused</span>
              </h3>
            </div>
            <p className="lenders-card__desc">
              Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs
            </p>
            <div className="lenders-card__mockup lenders-card__mockup--agents">
              {agents.map((a, i) => (
                <div className="agent-row" key={i}>
                  <img src={a.img} alt={a.name} className="agent-row__avatar"/>
                  <div>
                    <span className="agent-row__name">{a.name}</span>
                    <span className="agent-row__location">{a.location}</span>
                  </div>
                </div>
              ))}
              <div className="agent-strip">
                {stripAvatars.map((src, i) => (
                  <img key={i} src={src} alt="agent" className="agent-strip__img"/>
                ))}
              </div>
            </div>
          </div>

          {/* ── Card 2: Highly Customizable ── */}
          <div className="lenders-card">
            <div className="lenders-card__icon-row">
              <div className="lenders-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="#1D4ED8" strokeWidth="2"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="lenders-card__title">
                Highly <span className="lenders-card__title-blue">Customizable</span>
              </h3>
            </div>
            <p className="lenders-card__desc">
              Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs
            </p>
            <div className="lenders-card__mockup lenders-card__mockup--api">
              <ApiDiagram />
            </div>
          </div>

          {/* ── Card 3: Driven by Data ── */}
          <div className="lenders-card">
            <div className="lenders-card__icon-row">
              <div className="lenders-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3"  y="3"  width="7" height="7" rx="1" stroke="#1D4ED8" strokeWidth="2"/>
                  <rect x="14" y="3"  width="7" height="7" rx="1" stroke="#1D4ED8" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="#1D4ED8" strokeWidth="2"/>
                  <rect x="3"  y="14" width="7" height="7" rx="1" stroke="#1D4ED8" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="lenders-card__title">
                Driven by <span className="lenders-card__title-blue">Data</span>
              </h3>
            </div>
            <p className="lenders-card__desc">
              Our data-driven approach equips collection managers with insights to make informed & actionable decisions
            </p>
            <div className="lenders-card__mockup lenders-card__mockup--chart">
              <img src={chartCard} alt="Chart" className="lenders-card__chart-img"/>
              <div className="lenders-card__chart-side">
                <div className="health-mini">
                  <svg viewBox="0 0 80 80" width="80" height="80">
                    <circle cx="40" cy="40" r="32" fill="none" stroke="#E2E8F0" strokeWidth="8"/>
                    <circle cx="40" cy="40" r="32" fill="none" stroke="#2563EB" strokeWidth="8"
                      strokeDasharray="160 201" strokeLinecap="round" transform="rotate(-90 40 40)"/>
                  </svg>
                  <div className="health-mini__text">
                    <span>🔥</span>
                    <strong>80%</strong>
                  </div>
                </div>
                <button className="add-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Card 4: Discover Agency Partners ── */}
          <div className="lenders-card">
            <div className="lenders-card__icon-row">
              <div className="lenders-card__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#1D4ED8" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="lenders-card__title">
                Discover Agency <span className="lenders-card__title-blue">partners</span>
              </h3>
            </div>
            <p className="lenders-card__desc">
              Discover top-performing, tech-driven agencies designed to deliver results with minimal overhead.
            </p>
            <div className="lenders-card__mockup lenders-card__mockup--afl">
              <img src={aflCard} alt="AFL Services" className="lenders-card__afl-img"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
