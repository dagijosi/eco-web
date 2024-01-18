'use client'

import React from "react";
import IconButton from "../common/IconButton";
import { IMAGE_PATHS } from "../common/constants";

const Cards = [
  {
    bgcolor: "bg-yellow-400",
    txcolor: "text-yellow-800",
    text: "iphone 13 pro",
    text2:
      "A dramatically more powerful camera system. A display so responsive",
    image: IMAGE_PATHS.IPHONE,
  },
  {
    bgcolor: "bg-purple-400",
    txcolor: "text-purple-800",
    text: "Galaxy Z Flip4",
    text2:
      "More compact. Improved battery. Faster processor. Tougher design. Better",
    image: IMAGE_PATHS.GALAXY_Z_FLIP4,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-blue-100 flex justify-center ">
      <div className="flex flex-row my-10">
        <div>
          {Cards.map((Card) => (
            <div className={`bg-yellow-400 w-80 h-64 rounded-xl p-8 mb-6`}>
              <h1
                className={`${Card.txcolor} text-3xl not-italic font-bold leading-7 capitalize`}
              >
                {Card.text}
              </h1>
              <h1
                className={`${Card.txcolor} text-xs not-italic font-light leading-4 capitalize`}
              >
                {Card.text2}
              </h1>
              <div className="flex flex-row justify-between">
                <IconButton
                  icon={IMAGE_PATHS.RIGHT}
                  altText="Scroll right"
                  classtype={
                    "bg-yellow-800 w-8 h-8 mt-24 rounded-full flex items-center justify-center"
                  }
                />
                <img
                  src={Card.image}
                  alt="Iphone"
                  className="w-46 h-40 flex-shrink-0 "
                />
              </div>
            </div>
          ))}
        </div>
        <div className="ml-10">
          <div className="card bg-blue-300 w-full h-full rounded-xl p-8">
            <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-bold leading-tight capitalize">
              Google Pixel 8 Pro
            </h1>

            <p className="text-black text-sm md:text-base not-italic font-light leading-relaxed capitalize">
              The new Google Tensor G3 chip is custom-designed with Google AI
              for cutting-edge photo and video features and smarter
            </p>

            <div className="md:flex md:items-center md:justify-between">
              <div>
                <div className="text-blue-400 text-sm md:text-base font-normal leading-relaxed capitalize mt-4 md:mt-8">
                  <p>
                    With Google AI and the best Pixel Camera, it's the most
                    powerful, personal Pixel yet.
                  </p>
                  <p>6.7" Super Actual display. Pixel's brightest ever.1</p>
                  <p>Fully upgraded cameras and never-before-seen editing.</p>
                  <p>Polished aluminium frame and matt back glass.</p>
                </div>

                <button className="bg-black text-white px-4 py-2 mt-6 md:mt-10">
                  Learn More
                </button>
              </div>

              <img
                src={IMAGE_PATHS.GOOGLE_PIXEL_8}
                alt="Google Pixel 8 Pro"
                className="mt-4 md:mt-0 md:ml-8 md:w-80 flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
