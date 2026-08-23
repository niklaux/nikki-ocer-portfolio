import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomeSection from "../components/HomeSection/HomeSection";
import AutomationSection from "../components/AutomationSection/AutomationSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";

function Home() {
  return (
    <div style={{ height: "100%" }}>
      <NavigationBar />
      <HomeSection />
      <AutomationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Home;
