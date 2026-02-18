import "./App.css";
import DeepHealthcareCard from "./components/card/DeepHealthcareCard";
import WhyChooseUsCards from "./components/card/WhyChooseUsCards";
import HeroScaleTech from "./components/Hero/Hero";
import Hero1 from "./components/Hero/Hero1";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/navbar/navbar";

import FeaturedCaseStudies from "./components/OurWorks/FeaturedCaseStudies";
import OurWorks from "./components/OurWorks/OurWorks";
import OurWorksSection from "./components/OurWorks/OurWorksSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <OurWorks/> */}
      <HeroScaleTech/>
      <OurWorksSection />
      <FeaturedCaseStudies />
      <OurWorksSection />
      {/* <DeepHealthcareCard/> */}
      <WhyChooseUsCards />
      <Hero1 />
    </>
  );
}

export default App;
