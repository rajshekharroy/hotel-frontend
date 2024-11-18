import React from "react";
import ta from "../assets/tripadvisor.png";
import go from "../assets/goibibo.png";
import bo from "../assets/booking.png";
import mmt from "../assets/mmt.png";

const Services = () => {
  const otas = [ta, go, bo, mmt];
  return (
    <div className=" h-full w-full md:px-4 px-10">
      <div className=" grid lg:grid-cols-2 grid-cols-1 2xl:px-52 xl:px-40 md:px-24 gap-8 items-start xl:py-4 py-10">
        <div className=" flex flex-col gap-4 xl:mt-20 mt-4">
          <h4 className=" text-2xl">
            <span className=" w-8 h-[1px] border-t-2 pt-2 border-black mr-2 inline-block font-extralight"></span>
            Discover Unmatched Comfort and Luxury
          </h4>
          <h3 className=" text-4xl font-semibold">
            Welcome to Your Perfect Stay
          </h3>
          <p className=" leading-7">
            At business name, we offer more than just a place to stay—we provide
            an experience. Whether you’re traveling for business, leisure, or
            adventure, our curated selection of hotels ensures you enjoy luxury,
            comfort, and convenience no matter where you go. With exceptional
            service and state-of-the-art facilities, we strive to deliver an
            unforgettable stay. Our dedicated team is at your service 24/7,
            ensuring that every moment of your stay is as seamless and pleasant
            as possible. From serene mountain retreats to vibrant city escapes,
            we’ve built a reputation for offering the finest accommodations at
            affordable rates. Our extensive network of partner hotels spans
            various prime destinations, each chosen for their unique appeal and
            exceptional hospitality. Wherever you choose to stay, we are
            committed to making you feel at home. We aim to provide personalized
            care and unforgettable experiences, making us a trusted partner for
            your next getaway.
          </p>
          <hr className=" border-t-[0.5px] border-black opacity-15 my-6" />
          <p className=" tracking-wider font-semibold text-gray-600">
            TOP RATED ON
          </p>
          <div className=" flex flex-wrap gap-4 justify-center md:justify-start items-center ">
            {otas.map((ota) => (
              <img src={ota} alt="" />
            ))}
          </div>
        </div>
        <div className=" 2xl:h-[50vh] xl:h-[70vh] md:h-[90vh] flex flex-col gap-2">
          <div className=" w-full h-[40vh] border-2 ">
            <img
              src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" object-cover h-full w-full"
            />
          </div>
          <div className=" grid sm:grid-cols-2 grid-cols-1 gap-2 h-full">
            <img
              src="https://images.pexels.com/photos/2684260/pexels-photo-2684260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" object-cover h-full w-full"
            />
            <img
              src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
