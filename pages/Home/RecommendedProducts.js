'use client'

// RecommendedProducts.js
import React, { useRef } from "react";
import IconButton from "../common/IconButton";
import { IMAGE_PATHS } from "../common/constants";

const RecommendedCard = [
  {
    iconpic: IMAGE_PATHS.I_PHONE_12,
    price: "$1000",
    rateing: "4.8",
    text: "I Phone 15 pro max",
    text2: "Lorem ipsum dolor sit amet, foelered fipsunm fisie.",
  },
  {
    iconpic: IMAGE_PATHS.I_PHONE_12,
    price: "$1000",
    rateing: "4.8",
    text: "I Phone 15 pro max",
    text2: "Lorem ipsum dolor sit amet, foelered fipsunm fisie.",
  },
  {
    iconpic: IMAGE_PATHS.I_PHONE_12,
    price: "$1000",
    rateing: "4.8",
    text: "I Phone 15 pro max",
    text2: "Lorem ipsum dolor sit amet, foelered fipsunm fisie.",
  },
  {
    iconpic: IMAGE_PATHS.I_PHONE_12,
    price: "$1000",
    rateing: "4.8",
    text: "I Phone 15 pro max",
    text2: "Lorem ipsum dolor sit amet, foelered fipsunm fisie.",
  },
  {
    iconpic: IMAGE_PATHS.I_PHONE_12,
    price: "$1000",
    rateing: "4.8",
    text: "I Phone 15 pro max",
    text2: "Lorem ipsum dolor sit amet, foelered fipsunm fisie.",
  },
];

function scroll(ref, scrollOffset) {
  ref.current.scrollLeft += scrollOffset;
}

const RecommendedProducts = () => {
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  return (
    <div className="bg-blue-100 h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-4">
      <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
        <label className="text-black text-lg not-italic font-medium leading-7 capitalize underline">
          Recommended for you
        </label>

        <div className="flex mt-2 md:mt-0">
          <IconButton
            icon={IMAGE_PATHS.LEFT_SCROLL}
            altText="Scroll left"
            classtype={"w-6 h-6 mr-1"}
            onClick={() => scroll(scrollContainerRef1, -200)}
          />

          <IconButton
            icon={IMAGE_PATHS.RIGHT_SCROLL}
            altText="Scroll right"
            classtype={"w-6 h-6 mr-1"}
            onClick={() => scroll(scrollContainerRef1, 200)}
          />
        </div>
      </div>

      <div
        className="flex flex-row overflow-x-auto hide-scrollbar"
        ref={scrollContainerRef1}
      >
        {RecommendedCard.map((Card) => (
          <div className=" bg-white w-auto h-auto rounded-lg mt-8 mr-10">
            <div className="flex flex-row pt-6">
              <label className="text-white text-xs h-fit not-italic font-bold leading-4 capitalize bg-green-900 mr-12 p-1">
                50%off
              </label>
              <img
                src={Card.iconpic}
                alt="Iphone"
                className="w-10 h-18 flex-shrink-0 mr-12"
              />
              <IconButton
                icon={IMAGE_PATHS.HEART}
                altText="Add to favorites"
                classtype={"w-3 h-3 mr-4"}
              />
            </div>
            <div className="flex flex-row justify-center mt-6">
              <IconButton
                icon={IMAGE_PATHS.BLUE}
                altText="Blue"
                classtype={"w-3 h-3 mr-4"}
              />
              <IconButton
                icon={IMAGE_PATHS.RED}
                altText="Red"
                classtype={"w-3 h-3 mr-4"}
              />
              <IconButton
                icon={IMAGE_PATHS.BLUE_BLACK}
                altText="Blue Black"
                classtype={"w-3 h-3 mr-4"}
              />
              <IconButton
                icon={IMAGE_PATHS.GREEN}
                altText="Green"
                classtype={"w-3 h-3 mr-4"}
              />
            </div>
            <div className="flex flex-row justify-between mt-6 px-4">
              <label className="text-black text-2xl not-italic font-bold leading-3 capitalize mr-6">
                {Card.price}
              </label>
              <button className="inline-flex bg-orange-200 text-yellow-600 not-italic font-extrabold w-16 h-fit pl-3 py-1 rounded-3xl">
                <IconButton
                  icon={IMAGE_PATHS.FRAME}
                  altText="Settings"
                  classtype={"w-3 h-3"}
                />
                {Card.rateing}
              </button>
            </div>
            <div className="p-4">
              <h1 className="text-black text-xs not-italic font-medium leading-7 capitalize">
                {Card.text}
              </h1>
              <h1 className="overflow-hidden text-black w-40 not-italic font-light leading-3 capitalize">
                {Card.text2}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between mt-4">
        <label className="text-black text-lg not-italic font-medium leading-7 capitalize underline">
          featured collections
        </label>
        <div className="flex flex-row">
          <IconButton
            icon={IMAGE_PATHS.LEFT_SCROLL}
            altText="Scroll left"
            classtype={"w-6 h-6 mr-1"}
            onClick={() => scroll(scrollContainerRef2, -200)}
          />
          <IconButton
            icon={IMAGE_PATHS.RIGHT_SCROLL}
            altText="Scroll right"
            classtype={"w-6 h-6 mr-1"}
            onClick={() => scroll(scrollContainerRef2, 200)}
          />
        </div>
      </div>
      <div
        className="flex flex-row overflow-x-auto hide-scrollbar"
        ref={scrollContainerRef2}
      >
        {RecommendedCard.map((Card) => (
          <div className=" bg-white w-auto h-auto rounded-lg mt-8 mr-10">
            <div className="flex flex-row pt-6">
              <label className="text-white text-xs h-fit not-italic font-bold leading-4 capitalize bg-green-900 mr-12 p-1">
                50%off
              </label>
              <img
                src={Card.iconpic}
                alt="Iphone"
                className="w-10 h-18 flex-shrink-0 mr-12"
              />
              <IconButton
                icon={IMAGE_PATHS.HEART}
                altText="Add to favorites"
                classtype={"w-3 h-3 mr-4"}
              />
            </div>
            <div className="flex flex-row justify-center mt-6">
              <IconButton
                icon={IMAGE_PATHS.BLUE}
                altText="Blue"
                classtype={"w-3 h-3 mr-4"}
              />
              <IconButton
                icon={IMAGE_PATHS.RED}
                altText="Red"
                classtype={"w-3 h-3 mr-4"}
              />
              <IconButton
                icon={IMAGE_PATHS.BLUE_BLACK}
                altText="Blue Black"
                classtype={"w-3 h-3 mr-4"}
              />
              <IconButton
                icon={IMAGE_PATHS.GREEN}
                altText="Green"
                classtype={"w-3 h-3 mr-4"}
              />
            </div>
            <div className="flex flex-row justify-between mt-6 px-4">
              <label className="text-black text-2xl not-italic font-bold leading-3 capitalize mr-6">
                {Card.price}
              </label>
              <button className="inline-flex bg-orange-200 text-yellow-600 not-italic font-extrabold w-16 h-fit pl-3 py-1 rounded-3xl">
                <IconButton
                  icon={IMAGE_PATHS.FRAME}
                  altText="Settings"
                  classtype={"w-3 h-3"}
                />
                {Card.rateing}
              </button>
            </div>
            <div className="p-4">
              <h1 className="text-black text-xs not-italic font-medium leading-7 capitalize">
                {Card.text}
              </h1>
              <h1 className="overflow-hidden text-black w-40 not-italic font-light leading-3 capitalize">
                {Card.text2}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        <div className=" w-fit h-fit rounded-xl mt-12 mr-6">
          <img src={IMAGE_PATHS.PIC1} alt="pic1" />
        </div>
        <div className=" w-fit h-fit rounded-xl mt-12 mr-6">
          <img src={IMAGE_PATHS.PIC2} alt="pic1" />
        </div>
        <div className=" w-fit h-fit rounded-xl mt-12 mr-6">
          <img src={IMAGE_PATHS.PIC3} alt="pic1" />
        </div>
        <div className=" w-fit h-fit rounded-xl mt-12 mr-6">
          <img src={IMAGE_PATHS.PIC4} alt="pic1" />
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
