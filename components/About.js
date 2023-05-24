import Link from "next/link";
import SocialMediaShare from "@/components/SocialMediaShare";

export default function About() {
  const title = "Coeliac-safe beers";

  return (
    <div className='w-screen text-black bg-yellow-400 mx-auto px-2 sm:px-0'>
      <div className='justify-center border-2 border-black rounded-lg bg-white mt-12 mb-10 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='p-5 font-courier'>
          This website showcases naturally gluten-free (NGCI) beers and brewers
          across the world. Contrary to what you might think, gluten-free beer
          which is safe for coeliacs and others affected by gluten is rarely on
          sale in any bar or supermarket. Instead, fridges and aisles are full
          of 'gluten-reduced' beers made with barley and badged as
          'gluten-free'.
        </p>
        <p className='p-5 font-courier'>
          We're not really sure who those beers are really for, but they're
          cheaper and easier to make than beer made{" "}
          <span className='italic'>without barley</span> and it's a faster way
          to make a buck. And if the laws in your country allow you to do this -
          and you're not worried about possibly{" "}
          <Link
            href='https://www.nhs.uk/conditions/coeliac-disease/complications/'
            target='_blank'
            className=' hover:bg-yellow-400 underline'
          >
            harming people's health
          </Link>
          , it's an easy route to take. But this beer should not be labelled
          'gluten-free'.
        </p>
        <p className='p-5 font-courier font-extrabold	'>
          Gluten-free beer is beer that is made without any gluten-containing
          ingredients (looking at you, barley).
        </p>
        <p className='p-5 font-courier'>
          Beer made with barley, and subsequently treated with enzymes to
          'remove' the gluten is - at best - gluten-reduced beer. The gluten is
          not removed, however, only made smaller. And scientists have shown
          they are still toxic to many coeliacs and those affected by gluten
          (see research by Dr Laura K Allred in the USA, and Dr Michelle
          Colgrave from CSIRO Australia). And the current commercial test used
          to detect gluten in beer (R5 Competitive ELISA) is not accurate or
          reliable enough for the FDA - see{" "}
          <Link
            href='https://www.federalregister.gov/documents/2020/08/13/2020-17088/food-labeling-gluten-free-labeling-of-fermented-or-hydrolyzed-foods'
            target='_blank'
            className='hover:bg-yellow-400 underline'
          >
            here
          </Link>
          . Yet these beers are labelled 'gluten-free' in Europe (and in most
          other countries). In Australia, Canada and the USA (and several other
          countries at the time of writing), they are labelled as
          'gluten-reduced'.
        </p>
        <p className='p-5'>
          For more information, check out the{" "}
          <Link href='/links' className='hover:bg-yellow-400 underline'>
            Links section
          </Link>
          .
        </p>
        <div>
          <h1 className='text-center mb-2'>Share this:</h1>
        </div>
        <div className='flex justify-center '>
          <SocialMediaShare title={title} />
        </div>
      </div>
    </div>
  );
}
