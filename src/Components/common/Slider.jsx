import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Slider = ({ children }) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[80%] md:max-w-[95%] mx-auto"
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious className="md:text-xl text-lg bg-blue text-baby-blue md:p-5 p-2 rounded-full text-center cursor-pointer" />
        <CarouselNext className="md:text-xl text-lg bg-blue text-baby-blue md:p-5 p-2 rounded-full text-center cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default Slider;
