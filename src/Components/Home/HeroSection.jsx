import React from "react";
import Button from "../common/Button";
import QuickAppointment from "./QuickAppointment";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/assets/background.png')] w-full min-h-screen bg-cover bg-no-repeat px-10">
      <div className="absolute inset-0 bg-[#1E8DB359]"></div>

      <div className="relative z-10">
        <div className=" xl:pt-40 pt-15 ">
          <h1 className="xl:text-[90px] md:text-[70px] text-[40px] xl:pt-0 pt-10 leading-[1.1] text-white font-bold mb-4">
            Where Modern Medicine <br /> Meets Personal Care
          </h1>
          <h3 className="text-white text-xl mb-6">
            Providing advanced healthcare with a human touch
          </h3>
          <Button background={"white/75"} text={"blue"} rounded={"lg"} >
            View all sections
          </Button>
        </div>

        <div className="xl:block hidden h-full absolute right-0 top-27 z-10">
          <img
            src="/assets/doctor-1.png"
            alt="doctorImg"
            className="object-cover"
          />
        </div>

        <div className="relative z-30 mt-10">
          <QuickAppointment />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
