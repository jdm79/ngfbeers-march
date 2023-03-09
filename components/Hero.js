import Carousel from "./Carousel";

function Hero() {
  return (
    <div className="w-screen bg-white text-black p-10">
        <div>
          <p className="p-2 text-sm">
            
            Unfortunately, in Europe most gluten-free beers are not actually safe for coeliacs to consume. 
            Scientific research has shown for a long time that the deglutenisation process does not work 
            <span className="font-bold"> AND</span> that testing levels of gluten in beer with the ELISA5 test is inaccurate.
          </p>
          <p className="p-2 text-sm">
            This is a health risk, as coeliacs consuming gluten run the risk of infertility, ataxia, 
            osteoporosis, malnutrition and bowel cancer, to name just a few. 
            <a href="Potential long-term complications include" className="underline">(source: nhs.uk)</a>
          </p>
        </div>
       
    </div>

  )
}

export default Hero;