import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CarouselItem } from "../ui/carousel";
import Button from "../common/Button";
import { FaStar } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
const DoctorCard = () => {
  return (
    <CarouselItem className="md:basis-1/3 xl:basis-1/5 cursor-pointer">
      <div>
        <div className="bg-baby-blue rounded-xl relative ">
          <div className="p-4 flex items-center gap-1 absolute top-0 left-0">
            <span className="font-bold text-dark-blue text-lg">3.4</span>
            <span className="text-yellow-400 text-xl">
              <FaStar />
            </span>
          </div>
          <img
            src="/assets/doctor-3.png"
            alt="doctorImg"
            className="w-full h-62 object-cover"
          />
        </div>
        <div className="pt-3">
          <p className="font-bold text-dark-blue text-xl"> Rawan selima </p>
          <p className="text-dark-blue"> Dentist </p>
          <p className="flex gap-1 items-center text-blue">
            <IoLocationOutline /> cairo
          </p>
        </div>
        <p className="py-2 ">
          <Button
            background={"dark-blue"}
            text={"white"}
            rounded={"lg"}
            size={"full"}
          >
            <span>Discover</span>
            <span>
              <IoMdArrowRoundForward />
            </span>
          </Button>
        </p>
      </div>
    </CarouselItem>
  );
};

export default DoctorCard;
