import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const navLinks = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/doctors",
      text: "Doctors",
    },
    {
      to: "/book",
      text: "Book",
    },
    {
      to: "/pharmacy",
      text: "Pharmacy",
    },
    {
      to: "/contact",
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

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300  ${
          scroll && "bg-baby-blue/50 backdrop-blur-3xl"
        } `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <img src="/assets/logo.png" alt="logo" className="w-36" />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.text}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-dark-blue"
                        : "text-white hover:text-dark-blue"
                    }`
                  }
                >
                  {link.text}
                </NavLink>
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
              <NavLink to="/login">
                <Button background={"white/75"} text={"blue"}>
                  Login
                </Button>
              </NavLink>
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
            <Link to="/" className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="logoImg" className="w-32" />
            </Link>
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
                <NavLink
                  key={link.text}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-base font-medium  rounded-md hover:bg-blue 
                    ${isActive ? "bg-baby-blue text-dark-blue" : "text-white"}
                    `
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="p-4 font-bold">
            <Button
              background={"baby-blue"}
              text={"dark-blue"}
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
