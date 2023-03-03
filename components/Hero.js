import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="w-screen text-center p-5 bg-black text-white">
        <div className="p-5 md:text-5xl sm:text-sm">
          <h1>
            Naturally gluten-free beers - beers made without barley or any other gluten-containing ingredients
          </h1>
        </div>
        <div className="p-2 text-sm">
          <p className="p-2 text-sm">
            Unlike pretty much all "gluten-free beer" on the UK (and rest of the European) market, 
            the companies listed here do not use barley or wheat in any of their beers. 
          </p>
          <p className="p-2 text-sm">
            In Australia, Canada and the United States, gluten-free beers are those beers made without gluten-containing ingredients.
            Those beers made with barley and then "deglutenised" are called gluten-reduced beers. 
          </p>
          <p className="p-2 text-sm">
            In Europe we call these beers gluten-free, even though the latest scientific research shows that 
            the deglutenisation process does not work and that testing beer for gluten with the ELISA5 
            test is inaccurate.
          </p>
        </div>
       
    </div>

  )
}

export default Hero;