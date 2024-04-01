import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card"
import ImageWithText from "./ImageWithText";
import ImageWithTextOne from "./ImageWithTextOne";
import ImageWithTextThree from "./ImageWithTextThree";
import ImageWithTextTwo from "./ImageWithTextTwo";
import RandomNumberComponent from "./RandomNumberComponent";
import Offer from "./Offer";
import Footer from "./Footer"
import Button from "./Button"

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <ImageWithText
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"
        altText="Example Image"
        title="Branding Nice Studio"
        description="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
      />
      <ImageWithTextOne
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg"
        altText="Example Image"
        title="Mobile Card App"
        description="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
      />
      <ImageWithTextTwo
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"
        altText="Example Image"
        title="Restaurant Landing Page"
        description="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
      />
      <Button />
      <ImageWithTextThree
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/07/testi21.png"
        altText="Example Image"
        title="The quick, brown fox jumps over a lazy dog."
      />
      <RandomNumberComponent />
      <Offer />
    </div>
  );
};

export default Home;
