import {
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "/assets/images/f-logo.svg";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-5 justify-between w-full">
          <aside className="w-full md:w-5/12 gap-5 space-y-5">
            <img src={logo} alt="" />
            <p>
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
            <div className="social flex gap-2">
              <FaGoogle className="icon-ctr" />
              <FaXTwitter className="icon-ctr" />
              <FaInstagram className="icon-ctr" />
              <FaLinkedinIn className="icon-ctr" />
            </div>
          </aside>
          <div className="flex flex-col md:flex-row gap-5 justify-between w-full md:w-7/12">
            <nav className="flex flex-col gap-5">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col gap-5">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col gap-5">
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </div>

        <div className="text-center w-full space-y-5 mt-5">
          <hr />
          <p className="text-center mx-auto w-full">
            &copy;2024 Car doctor | All rights reserved | Design & Developed by{" "}
            <a
              href="http://wahednur.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wahed Nur
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
