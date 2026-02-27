import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import ForLenders from "./components/ForLenders";
import ForAgencies from "./components/ForAgencies";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <LogoStrip />
      <ForLenders />
      <ForAgencies />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
