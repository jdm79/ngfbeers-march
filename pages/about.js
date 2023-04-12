import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import SocialMediaShare from "@/components/SocialMediaShare";
import ThumbnailRow from "@/components/ThumbnailRow";
import Link from "next/link";
import { useRouter } from "next/router";

const aboutPage = () => {
  const router = useRouter();
  const title = "Coeliac-safe beers";
 
  return (
    <DefaultLayout>
      <PageTitle title='About Page' />
      <div className='w-screen text-black bg-yellow-400 mx-auto px-2 sm:px-0'>
        <div className='justify-center border-2 border-black rounded-lg bg-white mt-12 mb-10 shadow-md shadow-black sm:w-3/4 mx-auto'>
          <p className='p-5 font-courier'>
            This website is a showcase of naturally gluten-free (NGCI) beers and
            brewers across the world. Contrary to what you might think,
            gluten-free beer which is safe for coeliacs and others affected by
            gluten is rarely on sale in any bar or supermarket, although on the
            west coast of the USA there's a much higher chance of finding
            something. Instead, fridges and aisles are full of beers made with
            barley and badged as 'gluten-free'. We're am not really sure who
            these beers are really for, but they are cheaper to make than beer
            made without barley and it's an easier way to make a buck. And if
            the laws in your country allow you to do this - and you're not
            worried about possibly harming people's health, it's an easy route
            to take.
          </p>
          <p className='p-5 font-courier'>
            Beer made with barley and treated to 'remove' the gluten is - at
            best - gluten-reduced beer. The gluten is not removed, only made
            smaller. And scientists have shown they are still toxic to many
            coeliacs and those affected by gluten (see research by Laura K
            Allred and Dr Michelle Colgrave). And the current commercial test
            used to detect gluten in beer (R5 Competitive ELISA) is not accurate
            or reliable enough for the FDA - see{" "}
            <Link
              href='https://www.federalregister.gov/documents/2020/08/13/2020-17088/food-labeling-gluten-free-labeling-of-fermented-or-hydrolyzed-foods'
              target='_blank'
              className='border-2 border-black bg-yellow-400 rounded-lg px-1'
            >
              here
            </Link>
            . Yet these beers are labelled 'gluten-free' in Europe (and in most
            other countries). In Australia, Canada and the USA (and several
            other countries at the time of writing), they are labelled as
            'gluten-reduced'.
          </p>
          <p className='p-5 font-courier'>
            Gluten-free beer is beer that is not made with any gluten-containing
            ingredients (looking at you, barley).
          </p>
          <p className='p-5'>
            We want to help inform coeliacs - and others who are affected by
            gluten - about the health risks of drinking what is currently
            labelled as ‘gluten-free’ beer here in Europe (and elsewhere).
          </p>
          <p className='p-5'>
            There's a great resource{" "}
            <Link
              href='https://zerotolerance.mywikis.wiki/wiki/Gluten_Reduced_vs_Gluten_Free'
              target='_blank'
              className='border-2 border-black bg-yellow-400 rounded-lg px-1'
            >
              {" "}
              here
            </Link>{" "}
            from the people at Zero Tolerance Gluten Free Brewing Wiki.
          </p>
          <p className='p-5'>
            For more information, check out the{" "}
            <Link
              href='/links'
              className='border-2 border-black bg-yellow-400 rounded-lg px-1'
            >
              Links section
            </Link>
            .
          </p>
          <p className='p-5'>
            If you are an ngci beer brewer/company - or know of one, contact us
            using our{" "}
            <Link
              href='/contact'
              className='border-2 border-black bg-yellow-400 rounded-lg px-1'
            >
              Contact Form
            </Link>
            .
          </p>
          <p className='p-5'></p>
          <div>
            <h1 className='text-center mb-2'>Share this:</h1>
          </div>
          <div className='flex justify-center '>
            <SocialMediaShare title={title} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default aboutPage;
