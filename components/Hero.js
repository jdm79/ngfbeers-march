import { useRef } from "react";
import Ticker from "react-ticker";

function Hero() {
  return (
    <div className='w-screen bg-gradient-to-r bg-white text-black scroll-smooth border-b-2 border-black'>
      <Ticker speed={6} mode='smooth'>
        {() => (
          <div>
            <h1 className='bg-white whitespace-pre text-xs md:text-lg py-5'>
              We only list gluten-free beers made without barley (or any other
              gluten-containing ingredients).{"   "}
            </h1>
          </div>
        )}
      </Ticker>
    </div>
  );
}

export default Hero;
