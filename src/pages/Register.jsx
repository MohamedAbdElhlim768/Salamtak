import React, { useState } from "react";
import FlagsSelect from "react-flags-select";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { MdLanguage } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [country, setCountry] = useState("EG");
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    userType: "patient",
    email: "",
    phone: "",
    password: "",
    language: "ar",
  });

  const countryCodes = {
    EG: "+20",
    SA: "+966",
    AE: "+971",
    US: "+1",
    GB: "+44",
    KW: "+965",
    QA: "+974",
    OM: "+968",
    BH: "+973",
  };

  function getUserData(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function sendUserDataToApi() {
  const dataToSend = {
    userType: user.userType,
    email: user.email,
    phone: user.phone,
    password: user.password,
    language: user.language,
    countryCode: countryCodes[country],
  };

  console.log("======= DATA YOU ARE SENDING =======");
  console.table(dataToSend);

  try {
    const res = await axios.post(
      "https://salamtk-production.up.railway.app/auth/register",
      dataToSend
    );

    console.log("======= BACKEND SUCCESS RESPONSE =======");
    console.log(res.data);

    if (res.data.message === "User successfully registered") {
      navigate("/login");
    } else {
      setError(res.data.message || "Unexpected response from backend");
    }

  } catch (err) {
    console.log("======= ERROR DETECTED =======");

    // request didn't reach backend at all
    if (!err.response) {
      console.log("❌ FRONTEND ERROR (Request did NOT reach backend)");
      console.log(err);
      setError("Frontend Error: Request failed before reaching backend");
      return;
    }

    // request reached backend but backend returned an error
    console.log("❌ BACKEND ERROR");
    console.log("Status Code:", err.response.status);
    console.log("Response Data:", err.response.data);

    setError(
      err.response.data.error ||
      err.response.data.message ||
      "API Error"
    );
  }
}


  function submitRegisterForm(e) {
    e.preventDefault();
    setError("");
    sendUserDataToApi();
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-2xl p-8 sm:p-10 text-center">

        <h2 className="text-4xl font-extrabold text-[#1E8DB3] mb-8 drop-shadow-sm">
          Register
        </h2>

        {error && (
          <div className="bg-red-200 text-red-700 p-3 rounded-full mb-4">
            {error}
          </div>
        )}

        <form onSubmit={submitRegisterForm} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* ده سليكت  userType   */}

            <div className="relative text-left">
              <select
                name="userType"
                onChange={getUserData}
                value={user.userType}
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-[var(--chart-3)] border border-[var(--radius-sm)] focus:ring-2 focus:ring-[#1E8DB3]"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
              <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--chart-3)] text-xl" />
            </div>
        {/* ده سيليكت الكود معمول كده علشان الاعلام بمكتبة flags select  */}

            <div className="text-left">
              <FlagsSelect
                selected={country}
                searchable={true}
                className="FlagSelect"
                onSelect={(code) => setCountry(code)}
              />
            </div>
          </div>
        {/* ده انبوت الايميل */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--chart-3)] text-xl" />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={getUserData}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[var(--muted-foreground)]"
              />
            </div>
        {/* ده انبوت الموبايل */}
            <div className="relative">
              <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--chart-3)] text-xl" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={getUserData}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[var(--muted-foreground)]"
              />
            </div>
          </div>
          {/* دة انبوت الباسورد */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
              <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--chart-3)] text-xl" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={getUserData}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[var(--muted-foreground)]"
              />
            </div>
            {/* ده سليكت اللغة*/}

            <div className="relative">
              <MdLanguage className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--chart-3)] text-xl" />
              <select
                name="language"
                onChange={getUserData}
                value={user.language}
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-[var(--chart-3)] border border-[var(--muted-foreground)]"
              >
                <option value="ar">Arabic</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E8DB3] hover:bg-[#5CB3CD] text-white py-2.5 rounded-full transition duration-200 font-semibold shadow-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
