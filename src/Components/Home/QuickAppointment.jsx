import React from "react";
import Button from "../common/Button";

const QuickAppointment = () => {
  const styleInput =
    "px-3 border-blue/70 border-1 outline-0 focus:border-dark-blue rounded-lg h-10 w-full placeholder:text-blue/70 ";
  return (
    <div className="w-full bg-white/40 backdrop-blur-md p-5 rounded-xl flex flex-wrap">
      <p className="text-4xl font-bold xl:w-1/4 w-full text-blue mb-5 xl:mb-0">
        Book an Appointment Quickly
      </p>
      <form className="relative xl:after:w-1 after:absolute after:content[''] after:-left-5 after:rounded after:h-34 after:w-0 after:bg-blue xl:w-3/4 w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-3">
        <input type="text" placeholder="name" className={styleInput} />
        <input type="phone" placeholder="phone" className={styleInput} />
        <input type="date" placeholder="date" className={styleInput} />
        <input
          type="text"
          placeholder="choose location"
          className={`${styleInput} xl:col-start-1`}
        />
        <input
          type="text"
          placeholder="choose specialty"
          className={styleInput}
        />
        <input type="text" placeholder="choose doctor" className={styleInput} />
        <Button type={"submit"} text={"white"} background={"blue"}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default QuickAppointment;
