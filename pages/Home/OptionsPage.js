'use client'

import React from "react";
import IconButton from "../common/IconButton";
import { IMAGE_PATHS } from "../common/constants";

const Option = [
 {
   id: 1,
   iconpic: IMAGE_PATHS.DELIVERY,
   text: "free delivery",
   text2: "from all orders over 500",
 },
 {
   id: 2,
   iconpic: IMAGE_PATHS.GIFT,
   text: "Surprise offers",
   text2: "save up to 25%off",
 },
 {
   id: 3,
   iconpic: IMAGE_PATHS.HEADPHONES,
   text: "Support 24/7",
   text2: "shop with an expert",
 },
 {
   id: 4,
   iconpic: IMAGE_PATHS.DISCOUNT,
   text: "affordable prices",
   text2: "get factory direct price",
 },
 {
   id: 5,
   iconpic: IMAGE_PATHS.MEGNETIC_CARD,
   text: "secure payments",
   text2: "100% protected payment",
 },
];

const OptionsPage = () => {
 return (
   <div className="bg-white flex flex-col md:flex-row h-auto md:h-32 flex-shrink-0 justify-center items-center">
     {Option.map((icon) => (
       <div
         key={icon.id}
         className="flex flex-col md:flex-row items-center mr-8 md:mr-16"
       >
         <IconButton
           icon={icon.iconpic}
           altText="Option"
           classtype="w-10 h-16 mr-2 md:mr-4"
         />

         <div className="text-center md:text-left">
           <h1 className="text-black text-base md:text-sm font-medium leading-7 capitalize">
             {icon.text}
           </h1>

           <h1 className="text-black text-sm md:text-xs font-light leading-7 capitalize">
             {icon.text2}
           </h1>
         </div>
       </div>
     ))}
   </div>
 );
};

export default OptionsPage;