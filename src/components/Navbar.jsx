import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 w-full text-white">
      {/* <div className=" bg-black bg-opacity-50 backdrop-blur-3xl text-white flex sm:justify-between justify-center lg:px-36 md:px-24 px-10 py-2">
        <ul className=" flex flex-wrap justify-center items-center">
          <li className=" flex items-center gap-2 pr-4">
            <FiPhone />
            <span>+91 1234567890</span>
          </li>
          <li className=" flex items-center gap-2">
            <FiMail />
            <span>support@company.com</span>
          </li>
        </ul>

        <p className=" sm:flex items-center gap-2 hidden">
          Connect: <FaFacebook color="white" />
        </p>
      </div> */}
      <div className=" flex justify-between items-center h-16 bg-black bg-opacity-40 backdrop-blur-2xl rounded-full sm:mx-4 mx-2 mt-2 lg:px-36 md:px-14 px-6">
        <p>logo</p>
        <ul className="md:flex justify-center gap-8 hidden">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>DESTINATIONS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button className=" bg-white p-2 rounded-lg md:block hidden text-blue-950">
          Book Now
        </button>
        <span className="md:hidden block text-2xl bg-white text-blue-950 rounded-sm p-[6px] ">
          <RxHamburgerMenu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
