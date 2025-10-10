import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import bgImage from "../../Image/959506a78e9d7fce472731435624eb4ec0312280.jpg";

export default function Login() {
return (
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl w-[400px] p-10 text-center">
        <h2 className="text-4xl font-extrabold text-[#1E8DB3] mb-8 drop-shadow-sm">
        Login
        </h2>

        <form className="space-y-5">
        <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
            type="email"
            placeholder="E-mail"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border border-cyan-300 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]"
            />
        </div>

        <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border border-cyan-300 placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]"
            />
        </div>

        <div className="text-right text-sm text-[#1E8DB3] hover:underline cursor-pointer">
            Forgot password ?
        </div>

        <button
            type="submit"
            className="w-full bg-[#1E8DB3] hover:bg-[#5CB3CD] text-white py-2.5 rounded-full transition duration-200 font-semibold shadow-md"
        >
            Login
        </button>
        </form>

        <div className="flex items-center my-6">
        <div className="flex-grow border-t border-cyan-300"></div>
        <span className="mx-3 text-[#1E8DB3] font-semibold">or</span>
        <div className="flex-grow border-t border-cyan-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-cyan-400 text-[#1E8DB3] py-2.5 rounded-full bg-white/70 hover:bg-cyan-50 transition duration-200 font-medium">
        <FcGoogle className="text-xl" />
        Sign in with Google
        </button>

        <p className="mt-5 text-sm text-gray-700">
        Don’t have an account?{" "}
        <span className="text-[#1E8DB3] font-semibold cursor-pointer hover:underline">
            SignUp
        </span>
        </p>
    </div>
    </div>
);
}
