import React from "react";
import DoctorCard from "./DoctorCard";
import Slider from "../common/Slider";

const Doctors = () => {
  return (
    <section className="px-2 md:px-10 my-15">
      <div className="text-center mb-10">
        <h1 className="font-bold text-dark-blue text-5xl">Meet Our Doctors</h1>
        <p className="text-gray text-lg">Qualified Doctors You Can Rely On</p>
      </div>

      <Slider>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </Slider>
    </section>
  );
};

export default Doctors;
