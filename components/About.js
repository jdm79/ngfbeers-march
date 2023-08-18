import Link from "next/link";
import SocialMediaShare from "@/components/SocialMediaShare";
import CountriesFlagList from "./CountriesFlagList";

export default function About() {
  const title = "Coeliac-safe beers";

  return (
    <div className='w-screen text-black bg-yellow-400 mx-auto px-2 sm:px-0'>
      <div className='justify-center border-2 text-3xl border-black font-extrabold rounded-lg bg-gray-200 mt-12 mb-4 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='px-5 py-2 font-courier'>
          Q. What is this site going on about? There are gluten-free beers on
          sale everywhere here in Europe!
        </p>
      </div>

      <div className='justify-center border-2 border-black rounded-lg bg-white mb-10 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='px-5 py-2 font-courier'>
          A. Yes, but what is labelled 'gluten-free' beer here in Europe can
          only be labelled 'gluten-reduced' in Argentina, Australia, Canada, New
          Zealand and the USA. In those countries, gluten-free beer cannot be
          made with barley. Barley contains gluten. 'Gluten-free' beer that is
          safe for coeliacs/gluten intolerant is rarely on sale in any bar or
          supermarket in Europe. Instead, fridges and aisles are full of
          'gluten-reduced' beers made with barley and badged as 'gluten-free',
          and mostly made by the big companies.
        </p>
      </div>

      <div className='justify-center border-2 text-3xl border-black font-extrabold rounded-lg bg-gray-200 mt-12 mb-4 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='px-5 py-2 font-courier'>
          Q. How is there a difference? And why would anyone make gluten-free
          beer with gluten?
        </p>
      </div>

      <div className='justify-center border-2 border-black rounded-lg bg-white mb-10 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='px-5 py-2 font-courier'>
          A. Because it's much cheaper and easier to make beer with barley, and
          it's a faster way to make a buck. And if the laws in your country
          allow you to do this - and you're not worried about{" "}
          <Link
            href='https://www.nhs.uk/conditions/coeliac-disease/complications/'
            target='_blank'
            className=' hover:bg-yellow-400 underline'
          >
            harming people's health
          </Link>
          , it's an easy route to take.
        </p>
        <p className='px-5 py-2 font-courier'>
          Beer made with barley, and subsequently treated with enzymes to
          'remove' the gluten is - at best - gluten-reduced beer. The gluten is
          not removed, however, only made smaller. And scientists have shown
          these smaller gluten particles are still toxic to many coeliacs and
          those affected by gluten (see research by Dr Laura K Allred in the
          USA, and Dr Michelle Colgrave from CSIRO Australia).
        </p>

        <p className='px-5 py-2 font-courier'>
          And the current commercial test used to detect gluten in beer (R5
          Competitive ELISA) is not accurate or reliable enough for the FDA -
          see{" "}
          <Link
            href='https://www.federalregister.gov/documents/2020/08/13/2020-17088/food-labeling-gluten-free-labeling-of-fermented-or-hydrolyzed-foods'
            target='_blank'
            className='hover:bg-yellow-400 underline'
          >
            here
          </Link>
          . The truth is, we don't know how much gluten any of these beers
          contain unless they are tested using mass spectrometry (which is
          hugely expensive and complicated, and not commercially viable to
          replace the current inaccurate test). Yet these beers are labelled
          'gluten-free' in Europe (and in most other countries). In Argentina,
          Australia, Canada, New Zealand and the USA, they are labelled as
          'gluten-reduced'.
        </p>
      </div>
      <div className='justify-center border-2 border-black rounded-lg bg-white mt-12 mb-10 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='px-5 py-2 font-courier font-extrabold	'>
          Below are the countries whose regulations now recognise this, and
          where beer labelled 'gluten-free' can no longer be made with barley
          (or any other gluten-containing ingredient):
        </p>
        <div className='px-5 py-2'>
          <CountriesFlagList />
        </div>
        <p className='px-5 py-2'>
          We want to be able to list all the flags of the world in this section!
          To do this, people need to be told about the difference. A lot of
          coeliacs and gluten intolerant beer drinkers simply do not know about
          this in Europe because our coeliac societies feel it is better to keep
          things as they are.{" "}
        </p>
        <p className='px-5 py-2 bg-red-200'>
          These national coeliac societies charge beer companies to have the
          'gluten-free' label on their drinks, despite knowing that the current
          testing process is flawed.
        </p>
        <p className='px-5 py-2'>
          It's unusual for the USA to be ahead of Europe on things like this,
          but that's the current situation. For more information, check out the{" "}
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
