import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col md:py-28 py-10 justify-center items-center 2xl:px-56 xl:px-40 md:px-24 px-10">
      <div className=" flex xl:flex-row flex-col md:gap-20 gap-10 items-center">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[max(2vw,1.6rem)] font-semibold">
            We're a Family That Cares for Your Comfort
          </h1>
          <p className=" text-justify leading-7">
            At company name, we are more than just a hotel network—we are a
            family dedicated to creating exceptional experiences for each and
            every guest. With a passion for hospitality, we’ve grown from our
            humble beginnings to an expanding presence across some of the most
            beautiful and sought-after destinations in India. We are committed
            to delivering luxury, comfort, and affordability in every
            destination we serve, ensuring that our guests always feel at home.
            From our first hotel to our growing portfolio of handpicked
            properties, we continue to expand and evolve, while always keeping
            our philosophy of "Care with Emotion" at the heart of everything we
            do. Our mission is to offer a memorable and personalized travel
            experience for our guests, and to build a legacy of trust and
            excellence. As we expand our reach, we do so with a focus on
            delivering the highest standard of service and hospitality in every
            destination we touch.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/6466292/pexels-photo-6466292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" xl:w-96"
        />
      </div>
      <div className=" flex xl:flex-row flex-col-reverse md:gap-20 gap-10 items-center mt-20">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" xl:w-96"
        />
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[max(2vw,1.6rem)] font-semibold">
            We’re Committed to Embracing Everyone
          </h1>
          <p className=" text-justify leading-7">
            Our journey isn’t just about growing our number of properties; it’s
            about making a positive impact on the people we serve. At company
            name, we believe in nurturing and developing our team to be the best
            in the industry, ensuring that every guest receives outstanding
            service. As we grow, we continue to place a strong emphasis on
            giving back to the communities we serve. We aim to be a brand that
            not only excels in hospitality but also in its social
            responsibility, sharing our success with the wider community. At
            company name, success isn’t just about the number of hotels we
            operate—it’s about the lives we touch and the experiences we create.
            We invite you to join us and make unforgettable memories at one of
            our carefully selected destinations. Whether you’re here for
            business, leisure, or an adventurous getaway, we promise to deliver
            an experience that’s not just comfortable—but truly special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
