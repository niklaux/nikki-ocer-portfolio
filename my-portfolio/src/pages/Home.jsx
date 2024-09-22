import React from "react";
import NavigationBar from "../components/navigation/NavigationBar";
import HomeSection from "../components/HomeSection/HomeSection";

function Home() {
  return (
    <div style={{height: "100%"}}>
      <NavigationBar />
      <HomeSection />
    </div>
  );
}

export default Home;
