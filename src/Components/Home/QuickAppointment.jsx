import React from "react";
import Button from "../common/Button";

const QuickAppointment = () => {
  const styleInput =
    "px-3 border-blue/70 border-1 outline-0 focus:border-dark-blue rounded-lg h-10 w-full placeholder:text-black ";
  return (
    <div className="w-full bg-white/40 backdrop-blur-md p-5 rounded-xl flex flex-wrap">
      <p className="text-4xl font-bold xl:w-1/4 w-full text-blue mb-5 xl:mb-0">
        Book an Appointment Quickly
      </p>
      <form className="relative xl:after:w-1 after:absolute after:content[''] after:-left-5 after:rounded after:h-34 after:w-0 after:bg-blue xl:w-3/4 w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-3">
        <input type="text" placeholder="name" className={styleInput} />
        <input type="phone" placeholder="phone" className={styleInput} />
        <input type="date" placeholder="date" className={styleInput} />
        <select
          placeholder="choose location"
          className={`${styleInput} xl:col-start-1`}
        >
          <option value="">choose Location</option>
          <option value="cairo">Cairo </option>
          <option value="giza">giza </option>
          <option value="mansoura">mansoura </option>
        </select>
        <select placeholder="choose specialty" className={styleInput}>
          <option value="">choose specialty</option>
          <option value="skin&hair">skin & hair </option>
          <option value="eyes">eyes </option>
        </select>
        <select placeholder="choose doctor" className={styleInput}>
          <option value=""> choose doctor</option>
          <option value="ahmed"> ahmed</option>
          <option value="yasser"> yasser </option>
        </select>
        <Button type={"submit"} text={"white"} background={"blue"}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default QuickAppointment;
