import React from "react";
import { Hero } from "../component/Hero/Hero";
import { Popular } from "../component/Popular/Popular";
import { Offer } from "../component/Offers/Offer";
import { NewCollection } from "../component/NewCollections/NewCollection";
import { NewsLetter } from "../component/NewsLetter/NewsLetter";
import { Footer } from "../component/Footer/Footer";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
      
    </div>
  );
};
