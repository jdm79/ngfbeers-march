import Carousel from "./Carousel";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-screen bg-yellow-400 min-h-screen text-black">
      <div className="mt-10 relative">
        <div className="text-center text-5xl ml-3 mr-3 mt-10 lg:text-8xl w-auto md:ml-20 md:mr-20 md:mt-20">
          <h1 >Naturally  </h1>
            <h1>gluten-free beers</h1>
          <img src="/logo-ngfbeers.png" className="m-auto mt-10 w-3/4 lg:w-1/4"/>
        </div>
      </div>
    </div>
  )
}

export default Hero;
