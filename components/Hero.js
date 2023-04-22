import { useRef } from "react";
import FlagList from "./FlagList";
import Link from "next/link";

function Hero(props) {
  const { items } = props;
  const link = `/companies`;

  return (
    <div className='w-screen bg-gradient-to-r bg-yellow-400 text-black scroll-smooth'>
      <div className='mt-10 relative'>
        <div className='text-center text-3xl mt-10 lg:text-7xl m-auto md:ml-20 md:mr-20 md:mt-20'>
          <div>Naturally </div>
          <div>gluten-free beers</div>
          <Link href='/companies'>
            <img
              src='/logo-ngfbeers.png'
              className='m-auto mt-10 w-1/2 sm:w-1/5'
              alt='ngfbeers logo - a circle inside of which is a black beer glass with foam spilling over. the words ngfbeers outside the circle'
            />
          </Link>
          <div className='w-auto m-auto'>
            <div className='text-base mt-10 bg-white p-4 w-fit border-2 border-black m-auto'>
              {items.length} companies listed here selling naturally gluten-free beer
              <FlagList />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
