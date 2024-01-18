'use client'

import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import OptionsPage from "./OptionsPage";
import RecommendedProducts from "./RecommendedProducts";
import Offers from "./Offers";
import Brand from "./Brand";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <FeaturedProducts />
      <OptionsPage />
      <RecommendedProducts />
      <Brand />
      <Offers />
      </div>
  );
};

export default HomePage;
