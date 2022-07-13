import React from "react";
import { Product, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h1>Best Selling Product</h1>
        <p>Speaker of many Variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
};

//mengambil data dari sanity
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
