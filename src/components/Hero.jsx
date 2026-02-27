import React from "react";
import healthCard from "../assets/health-card.png";
import chartCard from "../assets/chart-card.png";
import cheyenneCard from "../assets/cheyenne-card.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__container">

        {/* Top-left: Operational Health card */}
        <div className="hero__float hero__float--top-left">
          <img src={healthCard} alt="Operational Health" className="hero__float-img" />
        </div>

        {/* Top-right: Chart card */}
        <div className="hero__float hero__float--top-right">
          <img src={chartCard} alt="Interactions chart" className="hero__float-img" />
        </div>

        {/* Bottom-right: Cheyenne contact card */}
        <div className="hero__float hero__float--bottom-right">
          <img src={cheyenneCard} alt="Cheyenne Gouse" className="hero__float-img" />
        </div>

        {/* Bottom-left: AFL mini card */}
        <div className="hero__float hero__float--bottom-left">
          <div className="hero__afl-mini">
            <div className="hero__afl-mini-header">
              <span className="hero__afl-mini-name">AFL Services</span>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#2563EB" />
                <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="hero__afl-mini-sub">Cities Serviced: Bangalore, Chennai</p>
            <div className="hero__afl-mini-stats">
              <div className="hero__afl-mini-stat"><strong>100+</strong><span>Calling Agents</span></div>
              <div className="hero__afl-mini-stat"><strong>150+</strong><span>Field Agents</span></div>
            </div>
            <div className="hero__afl-mini-ratings">
              <div className="hero__afl-mini-stat"><strong>4.1/5</strong><span>Overall Rating</span></div>
              <div className="hero__afl-mini-stat"><strong>4.5/5</strong><span>Visit Adherence</span></div>
            </div>
            <div className="hero__afl-mini-footer">
              <span>Operating Since 2016</span>
              <button className="hero__afl-mini-btn">Verify</button>
            </div>
          </div>
        </div>

        {/* Center content */}
        <div className="hero__content">
          <div className="hero__trust-badge">
            <div className="hero__avatars">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" className="hero__avatar" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="hero__avatar" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" className="hero__avatar" />
              <div className="hero__avatar hero__avatar--count">5k</div>
            </div>
            <span className="hero__trust-text">Businesses Rely On Collectedge</span>
          </div>

          <h1 className="hero__heading">
            Unified Platform for{" "}
            <span className="hero__heading-highlight">Late-Stage</span>
            {" | "}
            <span className="hero__heading-highlight">DPD Resolution.</span>
          </h1>

          <p className="hero__subtext">
            Our tool is designed with agencies & collection managers in mind,
            ensuring user-friendly experience tailored to their needs
          </p>

          <div className="hero__actions">
            <button className="btn-primary hero__btn">
              Get Free Trial
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-secondary hero__btn">
              How We work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
