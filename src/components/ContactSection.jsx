import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="contact__dot contact__dot--1" />
      <div className="contact__dot contact__dot--2" />
      <div className="contact__dot contact__dot--3" />
      <div className="contact__dot contact__dot--4" />

      <div className="contact__container">
        <div className="contact__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
          </svg>
        </div>

        <span className="section-label">Contact Us</span>

        <h2 className="section-heading contact__heading">
          We also need to have contact
          <br />
          form on the website
        </h2>

        <p className="contact__subtext">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's
        </p>

        <button className="btn-primary contact__cta">
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
