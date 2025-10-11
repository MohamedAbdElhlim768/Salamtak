// import React from "react";
// import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
// import Button from "./Button";
// const Nav = () => {
//   return (
//     <header className="w-full h-24 flex justify-between items-center fixed top-0 left-0 px-5 z-50">
//       <div className="w-38">
//         <img src="/assets/logo.png" alt="logo" className="w-full h-full" />
//       </div>
//       <nav>
//         <ul className="text-lg flex items-center gap-10 text-white cursor-pointer">
//           {/* <NavLink to="/"> */}
//           <li>Home</li>
//           {/* </NavLink> */}
//           {/* <NavLink to="/doctors"> */}
//           <li>Doctors</li>
//           {/* </NavLink> */}
//           {/* <NavLink to="/pharmacy"> */}
//           <li>Pharmacy</li>
//           {/* </NavLink> */}
//           {/* <NavLink to="/book"> */}
//           <li>Book</li>
//           {/* </NavLink> */}
//           {/* <NavLink to="/contact"> */}
//           <li>Contact</li>
//           {/* </NavLink> */}
//         </ul>
//       </nav>

//       <nav className="flex items-center gap-6">
//         <ul className="flex items-center gap-2 text-white cursor-pointer text-lg">
//           <li>
//             <GrFavorite />
//           </li>
//           <li>
//             <HiOutlineShoppingCart />
//           </li>
//           <li>
//             <IoPersonOutline />
//           </li>
//         </ul>
//         <Button background={"white/75"} text={"blue"}>
//           Login
//         </Button>
//       </nav>
//     </header>
//   );
// };

// export default Nav;

("use client");

import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {
      href: "#",
      text: "Home",
    },
    {
      href: "#",
      text: "Doctors",
    },
    {
      href: "#",
      text: "Book",
    },
    {
      href: "#",
      text: "Pharmacy",
    },
    {
      href: "#",
      text: "Contact",
    },
  ];
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <img src="/assets/logo.png" alt="logo" className="w-36" />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-lg  text-white  hover:text-dark-blue  transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
            </nav>

            <nav className="hidden md:flex items-center space-x-3">
              <ul className="flex items-center gap-2">
                <li className="text-white  hover:text-dark-blue transition-colors cursor-pointer">
                  <GrFavorite />
                </li>
                <li className="text-white  hover:text-dark-blue transition-colors cursor-pointer">
                  <HiOutlineShoppingCart />
                </li>
                <li className="text-white  hover:text-dark-blue transition-colors cursor-pointer">
                  <IoPersonOutline />
                </li>
              </ul>
              <Button background={"white/75"} text={"blue"}>
                Login
              </Button>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white"
                aria-label="Toggle menu"
              >
                <Menu
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white/10 backdrop-blur-md transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-dark-blue shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4">
            <a href="#" className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="logoImg" className="w-32" />
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white rounded-md"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-grow px-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>

          <div className="p-4 font-bold">
            <Button
              background={"white/75"}
              text={"blue"}
              rounded={"lg"}
              size={"full"}
            >
              logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
