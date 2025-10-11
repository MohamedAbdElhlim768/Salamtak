import React from "react";

const ServicesBox = ({ data, index }) => {
  return (
    <div
      className={`my-5 py-20 px-10 md:w-1/3 w-fit ${
        index === 1 && "bg-linear-to-b from-baby-blue to-light-blue rounded-4xl"
      } `}
    >
      <div>
        <img src={data.icon} alt="servicesImg" />
      </div>
      <div>
        <h3 className="font-bold text-2xl/10 text-blue"> {data.title} </h3>
        <p
          className={`${
            index === 1 ? "text-dark-blue" : "text-gray-400"
          }  text-lg`}
        >
          {" "}
          {data.description}{" "}
        </p>
      </div>
    </div>
  );
};

export default ServicesBox;
