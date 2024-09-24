import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomeSection from "../components/HomeSection/HomeSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";

function Home() {
  return (
    <div style={{ height: "100%" }}>
      <NavigationBar />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;
