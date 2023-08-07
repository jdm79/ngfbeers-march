import { useRef } from "react";

function Hero() {
  return (
    <div className='w-auto bg-gradient-to-r bg-white text-black scroll-smooth border-b-2 border-black'>
      <div>
        <h1 className='bg-white text-xs md:text-lg text-center p-5 '>
          We only list gluten-free beers made without barley (or any other
          gluten-containing ingredients)
        </h1>
      </div>
    </div>
  );
}

export default Hero;
