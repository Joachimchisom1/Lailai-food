import React from "react";
import HeroSection from "./HeroSection";
import HeroTwoSection from "./HeroTwoSection";
import Dishes from "./Dishes";
import HeroFourSection from "./HeroFourSection";
import MobileAppSection from "./MobileAppSection"
import HeroSixSection from "./HeroSixSection";
import HeroSevenSection from "./HeroSevenSection";

const Sections = () => {
  //Rendering every of the section components
  return (
    <main>
      <HeroSection />
      <HeroTwoSection />
      <Dishes />
      <HeroFourSection />
      <MobileAppSection />
      <HeroSixSection />
      <HeroSevenSection />
    </main>
  );
  //END
};

export default Sections;
