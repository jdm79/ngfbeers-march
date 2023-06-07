import { useRef } from "react";
import FlagList from "./FlagList";
import Link from "next/link";

function Hero(props) {
  const { items } = props;
  const link = `/companies`;

  return (
    <div className='w-screen bg-gradient-to-r bg-yellow-400 text-black scroll-smooth'>
      <div className='mt-10 relative'>
        <div className='text-center text-1xl lg:text-5xl m-auto md:ml-20 md:mr-20 md:mt-10'>
          <div className='w-auto m-auto'>
            <div className='text-base text-center mt-10 bg-white p-4 border-2 border-black mx-2 sm:m-auto'>
              <h1 className='mb-3'>
                We only list gluten-free beers made without barley (or any other
                gluten-containing ingredients).
              </h1>
              There are now {items.length} companies listed here selling
              naturally gluten-free beer
              <FlagList />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
