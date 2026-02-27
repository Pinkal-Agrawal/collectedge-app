import React, { useState } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Priya Nair",
    role: "Head of Risk & Collections",
    img: "https://randomuser.me/api/portraits/women/29.jpg",
    social: "facebook",
    text: "Since implementing the Collectedge platform, we've seen a 40% improvement in resolving delinquent payment disputes within the first 30 days. The automation and transparency it brings have transformed how our collections team operates — reducing manual overhead and improving customer trust. It's become an essential part of our risk management toolkit.",
    rating: 5,
  },
  {
    name: "David Koroma",
    role: "CEO, NeoBank Africa",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    social: "facebook",
    text: "We used to get a lot of complaints related to payment clarity. Since deploying Collectedge, complaints related to payment disputes dropped by over 50%. The self-service and clear communication flows have been game-changers.",
    rating: 4,
  },
  {
    name: "Ananya Sharma",
    role: "Collections Head, FinServe India",
    img: "https://randomuser.me/api/portraits/women/63.jpg",
    social: "twitter",
    text: "The audit trails and reporting features give us confidence that debt resolution has always been within the latest guidelines. Compliance used to be a headache — now it's on autopilot.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i <= count ? "#FBBF24" : "#E2E8F0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function SocialIcon({ type }) {
  return (
    <div className={`social-icon social-icon--${type}`}>
      {type === "facebook" ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const left  = (active - 1 + total) % total;
  const right = (active + 1) % total;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section className="testimonials">
      <div className="testimonials__container">

        <div className="testimonials__header">
          <span className="section-label">Testimonial</span>
          <h2 className="section-heading">
            Trusted by <span className="highlight">Professionals</span>
          </h2>
        </div>

        <div className="testimonials__carousel">
          {/* Left (peek) */}
          <div className="testimonials__card testimonials__card--side">
            <div className="testimonials__author">
              <img src={TESTIMONIALS[left].img} alt={TESTIMONIALS[left].name} className="testimonials__avatar"/>
              <div>
                <p className="testimonials__name">{TESTIMONIALS[left].name}</p>
                <p className="testimonials__role">{TESTIMONIALS[left].role}</p>
              </div>
            </div>
            <span className="testimonials__quote">"</span>
            <p className="testimonials__text">{TESTIMONIALS[left].text}</p>
            <Stars count={TESTIMONIALS[left].rating} />
          </div>

          {/* Center (featured) */}
          <div className="testimonials__card testimonials__card--featured">
            <div className="testimonials__author">
              <img src={TESTIMONIALS[active].img} alt={TESTIMONIALS[active].name} className="testimonials__avatar"/>
              <div>
                <p className="testimonials__name">{TESTIMONIALS[active].name}</p>
                <p className="testimonials__role">{TESTIMONIALS[active].role}</p>
              </div>
            </div>
            <span className="testimonials__quote testimonials__quote--right">"</span>
            <p className="testimonials__text testimonials__text--featured">{TESTIMONIALS[active].text}</p>
            <div className="testimonials__footer">
              <Stars count={TESTIMONIALS[active].rating} />
              <SocialIcon type={TESTIMONIALS[active].social} />
            </div>
          </div>

          {/* Right (peek) */}
          <div className="testimonials__card testimonials__card--side">
            <div className="testimonials__author">
              <img src={TESTIMONIALS[right].img} alt={TESTIMONIALS[right].name} className="testimonials__avatar"/>
              <div>
                <p className="testimonials__name">{TESTIMONIALS[right].name}</p>
                <p className="testimonials__role">{TESTIMONIALS[right].role}</p>
              </div>
            </div>
            <span className="testimonials__quote testimonials__quote--right">"</span>
            <p className="testimonials__text">{TESTIMONIALS[right].text}</p>
            <Stars count={TESTIMONIALS[right].rating} />
          </div>
        </div>

        {/* Nav */}
        <div className="testimonials__nav">
          <button className="testimonials__nav-btn" onClick={prev} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="testimonials__nav-btn testimonials__nav-btn--active" onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="testimonials__view-all">
          <button className="btn-primary">
            View All
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
