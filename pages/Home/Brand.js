"use client";

import React from "react";
import { IMAGE_PATHS } from "../common/constants";
const Brand = () => {
  const logos = [
    {
      src: IMAGE_PATHS.APPLE_LOGO,
      alt: "apple-log",
    },
    {
      src: IMAGE_PATHS.BOAT_LOGO,
      alt: "boat-log",
    },
    {
      src: IMAGE_PATHS.OPPO_LOGO,
      alt: "oppo-log",
    },
    {
      src: IMAGE_PATHS.SAMSUNG_LOG,
      alt: "samsung-log",
    },
    {
      src: IMAGE_PATHS.ONEPLUS_LOG,
      alt: "oneplus-log",
    },
    {
      src: IMAGE_PATHS.ASUS_LOGO,
      alt: "asus-log",
    },
    {
      src: IMAGE_PATHS.SONY_LOGO,
      alt: "sony-log",
    },
    {
      src: IMAGE_PATHS.POCO_EMBLEM,
      alt: "poco-emblem",
    },
    {
      src: IMAGE_PATHS.JBL_LOG,
      alt: "jbl-log",
    },
    {
      src: IMAGE_PATHS.NOKIA_LOG,
      alt: "nokia-log",
    },
    {
      src: IMAGE_PATHS.INTEL_LOG,
      alt: "intel-log",
    },
    {
      src: IMAGE_PATHS.REALME_LOG,
      alt: "realme-log",
    },
  ];
  return (
    <div className="bg-white flex flex-row h-24 justify-center items-center ">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="w-fit h-fit mr-10"
        />
      ))}
    </div>
  );
};

export default Brand;
