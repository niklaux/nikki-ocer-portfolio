import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import HomeSection from "../components/HomeSection/HomeSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";

function Home() {
  return (
    <div style={{height: "100%"}}>
      <NavigationBar />
      <HomeSection />
      <AboutMeSection />
    </div>
  );
}

export default Home;
