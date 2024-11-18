import React from "react";

const Offers = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center gap-10 bg-[#FAEBE2] mt-20 p-8">
      <div className="  w-96 bg-white p-4 rounded-xl text-center shadow-xl flex flex-col gap-4">
        <img
          src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" object-cover w-full"
        />
        <h4 className=" text-xl font-semibold">Offer 1</h4>
        <p className=" text-left pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          voluptate vel ratione atque assumenda cupiditate quos totam aperiam
          perferendis nulla.
        </p>
      </div>
      <div className="  w-96 bg-white p-4 rounded-xl text-center shadow-xl flex flex-col gap-4">
        <img
          src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className=" object-cover w-full"
        />
        <h4 className=" text-xl font-semibold">Offer 2</h4>
        <p className=" text-left pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          voluptate vel ratione atque assumenda cupiditate quos totam aperiam
          perferendis nulla.
        </p>
      </div>
      <div className="  w-96 bg-white p-4 rounded-xl text-center shadow-xl flex flex-col gap-4">
        <img
          src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" object-cover w-full"
        />
        <h4 className=" text-xl font-semibold">Offer 3</h4>
        <p className=" text-left pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          voluptate vel ratione atque assumenda cupiditate quos totam aperiam
          perferendis nulla.
        </p>
      </div>
    </div>
  );
};

export default Offers;
