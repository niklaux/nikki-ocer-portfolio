import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomeSection from "../components/HomeSection/HomeSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";

function Home() {
  return (
    <div style={{ height: "100%" }}>
      <NavigationBar />
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
    </div>
  );
}

export default Home;
