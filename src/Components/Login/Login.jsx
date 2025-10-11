import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import bgImage from "/assets/background.png";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Login Data:", values);
      alert("Login Successful ✅");
    },
  });

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-md p-8 sm:p-10 text-center">
        <h2 className="text-4xl font-extrabold text-[#1E8DB3] mb-8 drop-shadow-sm">
          Login
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-cyan-300"
              } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-cyan-300"
              } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm text-[#1E8DB3] hover:underline cursor-pointer">
            Forgot password ?
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1E8DB3] hover:bg-[#5CB3CD] text-white py-2.5 rounded-full transition duration-200 font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-cyan-300"></div>
          <span className="mx-3 text-[#1E8DB3] font-semibold">or</span>
          <div className="flex-grow border-t border-cyan-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border border-cyan-400 text-[#1E8DB3] py-2.5 rounded-full bg-white/70 hover:bg-cyan-50 transition duration-200 font-medium">
          <FcGoogle className="text-xl" />
          Sign in with Google
        </button>

        {/* Sign Up Link */}
        <p className="mt-5 text-sm text-gray-700">
          Don’t have an account?{" "}
          <span className="text-[#1E8DB3] font-semibold cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
