import React from "react";
import HeroSlider from "./HeroSlider";
import FeaturedCategories from "./FeaturedCategories";  
import OfferBanner from "./OfferBanner";
import PopularProducts from "./PopularProducts";
import BestSeller from "./BestSeller";
import Facilities from "./Facilities";

function Main() {
  return (
    <div>
      <HeroSlider />
      <FeaturedCategories />
      <OfferBanner />
      <PopularProducts />
      <BestSeller />
      <Facilities />
    </div>
  );
}

export default Main;
