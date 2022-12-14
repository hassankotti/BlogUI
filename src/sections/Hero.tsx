import React from "react";
import Carousel from "../components/Carousel";
const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  ];
  return (
    <section>
      <Carousel>
        {
          images.map((image, index) => {
            return (
              <img key={index} src={image} alt={index+''}  className="absolute object-fit block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 brightness-50 bg-heavy-metal-900/30" />
            )
          })
        }
      </Carousel>
    </section>
  );
};

export default Hero;
