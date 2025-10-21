import React from "react";
import { CarouselItem } from "../ui/carousel";
import { MdArrowForward } from "react-icons/md";
const SpecialistBox = () => {
  return (
    <CarouselItem className="md:basis-1/3 xl:basis-1/5 cursor-pointer">
      <div>
        <div className="w-full rounded-t-3xl">
          <img
            src="/assets/Specialist-1.jpg"
            alt="specialistImg"
            className="w-full h-48 object-cover rounded-t-3xl"
          />
        </div>
        <div className="flex items-center justify-between border-1 border-t-0 border-light-gray rounded-xl rounded-t-none p-3">
          <div>
            <h1 className="font-bold text-dark-blue text-xl ">Dentistry </h1>
            <p className="text-gray text-sm">Great smile </p>
          </div>
          <div className="text-lg text-dark-blue bg-baby-blue p-2 rounded-full">
            <MdArrowForward />
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default SpecialistBox;
