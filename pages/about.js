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
      <PageTitle title="About Page" />
      <div className="w-screen text-black bg-yellow-400 mx-auto px-2 sm:px-0">

        <div className="justify-center border-2 border-black rounded-lg bg-white mt-12 mb-10 shadow-md shadow-black sm:w-3/4 mx-auto">
          <p className="p-5 font-courier">
            This website is a showcase of naturally gluten-free (NGCI) beer
            brewers (only Europe so far).
          </p>
          <p className="p-5">
            We also want to help educate consumers about the health risks of
            drinking what is currently labelled as ‘gluten-free’ beer here in Europe
            (and elsewhere).
          </p>
          <p className="p-5">
            There's a great resource{" "}
            <Link
              href="https://zerotolerance.mywikis.wiki/wiki/Gluten_Reduced_vs_Gluten_Free"
              target="_blank"
              className="border-2 border-black bg-yellow-400 rounded-lg px-1"
            >
              {" "}
              here
            </Link>{" "}
            from the people at Zero Tolerance Gluten Free Brewing Wiki.
          </p>
          <p className="p-5">
            For more information, check out the{" "}
            <Link
              href="/links"
              className="border-2 border-black bg-yellow-400 rounded-lg px-1"
            >
              Links section
            </Link>
            .
          </p>
          <p className="p-5">
            If you are an ngci beer brewer/company - or know of one, contact us
            using our{" "}
            <Link
              href="/contact"
              className="border-2 border-black bg-yellow-400 rounded-lg px-1"
            >
              Contact Form
            </Link>
            .
          </p>

          <p className="p-5"></p>
          <div>
            <h1 className="text-center">Share this</h1>
          </div>
          <div className="flex justify-center ">
            <SocialMediaShare title={title} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default aboutPage;
