import React from "react";
import Button from "../common/Button";
import { MdOutlineMedicalServices } from "react-icons/md";
const DetailsServices = () => {
  return (
    <section className="flex justify-between items-center relative min-h-[500px] my-20 bg-[url('/assets/background-services.jpg')] w-full bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-dark-blue/50 z-0"></div>

      <div className="relative z-10 px-2 md:px-10 text-white flex-row">
        <div className="flex items-center flex-wrap justify-between">
          <div className="xl:w-[850px]">
            <h1 className="font-bold md:text-8xl text-4xl">
              Pharmacy Services
            </h1>
            <p className="py-5 flex">
              Pharmacy with trusted medicines and fast service ,At our pharmacy,
              we are committed to providing more than just medicines — we offer
              trusted healthcare solutions designed for your well-being. Our
              team of professional pharmacists ensures you receive accurate
              prescriptions, genuine medications, and expert advice for all your
              health needs.
            </p>
            <Button background={"dark-blue"} text={"white"} rounded={"lg"}>
              <span>
                <MdOutlineMedicalServices />
              </span>
              <span>Shop Now</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="xl:block hidden">
        <img src="/assets/doctor-1.png" alt="doctorImg" />
      </div>
    </section>
  );
};

export default DetailsServices;
