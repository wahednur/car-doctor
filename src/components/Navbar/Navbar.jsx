import { Link, NavLink } from "react-router-dom";
import logo from "/assets/images/car-doctor.svg";
import { SlHandbag } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  // const mblbtn = document.getElementById("mbl-icon-btn");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="lg:mt-7">
      <div className="desk-nav hidden lg:flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="center">
          <nav className="desk-nav">
            <ul className="flex justify-center">{navLink}</ul>
          </nav>
        </div>
        <div className="right flex items-center gap-5">
          <Link>
            <SlHandbag />
          </Link>
          <Link>
            <CiSearch />
          </Link>
          <Link className="cbtn cbtn-outline">Appointment</Link>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img className="w-10 md:w-20" src={logo} alt="" />
            </Link>
          </div>
          <div className="relative">
            <FaBars
              onClick={toggleNavbar}
              className="text-right float-right hover:text-dr-orange"
            />
            <nav
              className={`mobile-nav ${
                isOpen ? "open" : ""
              } absolute right-1 top-7 z-10 bg-gray-black w-[300px] p-5 text-white shadow-xl`}
            >
              <ul className="space-y-5">{navLink}</ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
