import Carousel from "./Carousel";

function Hero() {
  return (
    <div className=''>
        <h1 className="w-screen flex justify-center p-5">
          Naturally gluten-free beers - 
          a showcase of beers made without barley or any other gluten-containing ingredients
        </h1>

        <div className="w-screen flex justify-center">
            <Carousel />
        </div>
    </div>

  )
}

export default Hero;