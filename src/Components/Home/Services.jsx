import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
  const data = [
    {
      title: "Book an appiontment",
      description: "Easy, Fast & Secure Appointment Booking",
      icon: "/assets/services-3.png",
    },
    {
      title: "Our pharmacy",
      description: "Get your medicine and all your medical needs",
      icon: "/assets/services-2.png",
    },
    {
      title: "Working hours",
      description: "09:00 am 10:00 pm",
      icon: "/assets/services-1.png",
    },
  ];
  return (
    <section className="xl:w-5xl w-[90%] bg-baby-blue/20 mx-auto rounded-4xl mt-30">
      <div className="w-fit bg-white text-4xl font-semibold pb-5 pl-5 pr-10 rounded-br-4xl">
        <h1 className="text-blue"> Services We Provide to </h1>
        <h1 className="text-dark-blue">
          Because Every Patient Deserves the Best.
        </h1>
      </div>
      <div className="flex flex-wrap justify-between">
        {data &&
          data.map((ele, index) => {
            return <ServicesBox data={ele} key={index} index={index} />;
          })}
      </div>
    </section>
  );
};

export default Services;
