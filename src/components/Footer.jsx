import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdDoubleArrow } from "react-icons/md";

const Footer = () => {
  const companyItems = [
    "About Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Contact Us",
  ];
  const quickLinksItems = ["Photo Gallery", "Offers", "FAQ's"];

  return (
    <div className="bg-sky-800 py-8 2xl:px-56 xl:px-40 lg:px-14 px-4 text-white text-lg">
      <div className="flex md:justify-around flex-col md:flex-row gap-20">
        <div className="flex flex-wrap  gap-20">
          <ul className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold mb-2">COMPANY</h1>
            {companyItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <MdDoubleArrow />
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white mb-2">
              QUICK LINKS
            </h1>
            {quickLinksItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <MdDoubleArrow /> {/* Add the icon */}
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-white mb-2">
            GET IN TOUCH
          </h1>
          <p className="flex gap-2 items-center">
            <FaRegAddressBook />
            address
          </p>
          <p className="flex gap-2 items-center">
            <FiPhone />
            +91 123456789
          </p>
          <p className="flex gap-2 items-center">
            <FiMail />
            support@company.com
          </p>
        </div>
      </div>
      <p className="mt-10 text-center">
        © Copyright your company, 2024, All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
