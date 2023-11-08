import React from "react";
import { Hero } from "../Hero/Hero";
import { Popular } from "../Popular/Popular";
import { Offers } from "../Offers/Offers";
import { NewCollections } from "../NewCollections/NewCollections";
import { NewsLetter } from "../NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <section>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </section>
  );
};

export default Shop;
