import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import Services from "../Components/Home/Services";
import Specialties from "../Components/Home/Specialties";
import DetailsServices from "../Components/Home/DetailsServices";
import Doctors from "../Components/Home/Doctors";
export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Services />
      <Specialties />
      <DetailsServices />
      <Doctors />
    </main>
  );
}
