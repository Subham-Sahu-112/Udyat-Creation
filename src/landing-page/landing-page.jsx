import React, { useState } from "react";
import "./landing-page.css";
import HeroSection from "./components/HeroSection";
import CreativeTalentSection from "./components/CreativeTalentSection";
import OurWorkSection from "./components/OurWorkSection";
import PanIndiaSection from "./components/PanIndiaSection";
import Navbar from "../layouts/Navbar";
import AdFilmsSection from "./components/AdFilmsSection";
import OurProcessSection from "./components/OurProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <CreativeTalentSection />
      <OurWorkSection />
      <PanIndiaSection />
      <AdFilmsSection />
      <OurProcessSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default LandingPage;
