import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import bgImage from "../../Image/959506a78e9d7fce472731435624eb4ec0312280.jpg";

export default function Register() {
const formik = useFormik({
    initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    },
    validationSchema: Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must be numbers only")
        .min(10, "Phone must be at least 10 digits")
        .required("Phone is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
    console.log("Form Data:", values);
    alert("Registration Successful!");
    },
});

return (
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-2xl p-8 sm:p-10 text-center">
        <h2 className="text-4xl font-extrabold text-[#1E8DB3] mb-8 drop-shadow-sm">
        Register
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Row 1: First + Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative">
            <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border ${
                formik.touched.firstName && formik.errors.firstName
                    ? "border-red-400"
                    : "border-cyan-300"
                } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.firstName}
                </p>
            )}
            </div>

            <div className="relative">
            <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border ${
                formik.touched.lastName && formik.errors.lastName
                    ? "border-red-400"
                    : "border-cyan-300"
                } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.lastName}
                </p>
            )}
            </div>
        </div>

          {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    ? "border-red-400"
                    : "border-cyan-300"
                } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.email}
                </p>
            )}
            </div>

            <div className="relative">
            <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border ${
                formik.touched.phone && formik.errors.phone
                    ? "border-red-400"
                    : "border-cyan-300"
                } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.phone}
                </p>
            )}
            </div>
        </div>

          {/* Row 3: Password + Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    ? "border-red-400"
                    : "border-cyan-300"
                } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1 text-left">
                {formik.errors.password}
                </p>
            )}
            </div>

            <div className="relative">
            <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1E8DB3] text-xl" />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full bg-white/70 border ${
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
                    ? "border-red-400"
                    : "border-cyan-300"
                } placeholder:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#1E8DB3]`}
            />
            {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 text-left">
                    {formik.errors.confirmPassword}
                </p>
                )}
            </div>
        </div>

          {/* Submit */}
        <button
            type="submit"
            className="w-full bg-[#1E8DB3] hover:bg-[#5CB3CD] text-white py-2.5 rounded-full transition duration-200 font-semibold shadow-md"
        >
            Register
        </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
        <div className="flex-grow border-t border-cyan-300"></div>
        <span className="mx-3 text-[#1E8DB3] font-semibold">or</span>
        <div className="flex-grow border-t border-cyan-300"></div>
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-cyan-400 text-[#1E8DB3] py-2.5 rounded-full bg-white/70 hover:bg-cyan-50 transition duration-200 font-medium">
        <FcGoogle className="text-xl" />
        Sign up with Google
        </button>

        <p className="mt-5 text-sm text-gray-700">
        Already have an account?{" "}
        <span className="text-[#1E8DB3] font-semibold cursor-pointer hover:underline">
            Login
        </span>
        </p>
    </div>
    </div>
);
}
