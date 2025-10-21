import React from "react";
import SpecialistBox from "./SpecialistBox";
import Slider from "../common/Slider";

const Specialties = () => {
  return (
    <section className="px-2 md:px-10">
      <div className="mb-10 pl-9">
        <h1 className="font-bold text-dark-blue text-5xl pb-2">
          Our Specialties
        </h1>
        <h3 className="text-blue text-lg">
          We provide high quality Healthcare in all specialties.
        </h3>
      </div>
      <div>
        <Slider>
          <SpecialistBox />
          <SpecialistBox />
          <SpecialistBox />
          <SpecialistBox />
          <SpecialistBox />
          <SpecialistBox />
        </Slider>
      </div>
    </section>
  );
};

export default Specialties;
