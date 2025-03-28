import React from "react";
import bannerImg from "/images/banner.webp";


const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ">
      <div className="py-36 flex flex-col md:flex-row-reverse items-center justify-between gap-9 ">
        {/* img */}
        <div className="md:w-1/2 py-10  ">
          <img
            src={bannerImg}
            alt=""
          />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-gray-100 px-3 py-1 rounded-3xl flex items-center gap-3 shadow-sm ">
              <img
                src="/images/curd.jpeg"
                alt=""
                className="rounded-2xl h-10"
              />
              <div className="space-y-1">
                <h5 className="text-blue-400">Yogurt</h5>
                <p className="text-red">Rs 200.00</p>
              </div>
            </div>
              <div className="bg-gray-100 px-3 py-1 rounded-3xl md:flex items-center gap-3 shadow-sm  hidden">
                <img
                  src="/images/milk.jpeg"
                  alt=""
                  className="rounded-2xl h-10"
                />
                <div className="space-y-1">
                  <h5 className="text-blue-400">Milk</h5>
                  <p className="text-red">Rs 120.00</p>
                </div>
              </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-5 space-y-6">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Explore the Wonders of Exceptional{" "}
            <span className="text-green">Dairy Direct</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Every Product Reflects a Story of Expert Care and Dedication
          </p>
          <button className="bg-green hover:bg-gray-400 font-semibold btn text-white hover:text-black px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
