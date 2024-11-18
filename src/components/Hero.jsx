import React from "react";
import headingLing from "../assets/heading-line.png";

const Hero = () => {
  return (
    <div>
      <img
        className=" w-full 2xl:h-screen xl:h-[90vh] h-[80vh] object-cover"
        src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className=" bg-sky-800 text-white text-center flex flex-col items-center gap-2 py-8 px-4">
        <h4 className=" text-2xl font-semibold">
          50 DESTINATIONS - 14 HOTELS - 1000+ ROOMS
        </h4>
        <p className=" text-2xl font-semibold">
          Explore Our Wide Range of Hotels and Locations – Tailored to Your
          Needs.
        </p>
        <img src={headingLing} alt="" />
        <p className="text-xl font-light">
          Explore Our Destinations: Mountain Retreats || Beachfront Escapes ||
          Historic Cities || Urban Stays || Seaside Resorts || Nature Escapes
        </p>
      </div>
    </div>
  );
};

export default Hero;
