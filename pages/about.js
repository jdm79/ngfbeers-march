import DefaultLayout from "@/components/DefaultLayout";
import SocialMediaShare from "@/components/SocialMediaShare";
import ThumbnailRow from "@/components/ThumbnailRow";
import Link from "next/link";
import { useRouter } from "next/router";

const aboutPage = () => {
  const router = useRouter();
  const title = "Coeliac-safe beers";
 
  return (
    <DefaultLayout>
      <div className="w-screen text-black bg-yellow-400">
        <h1 className="w-screen flex p-5 justify-center border-b-2 border-black bg-white dark:text-black">
          About Page
        </h1>
        <ThumbnailRow />
        <div className="p-5 justify-center border-2 border-black ml-5 mr-5 bg-white mb-10 shadow-md shadow-black">
          <p className="p-5 font-courier">
            This website is a showcase of naturally gluten-free (ngci) beer
            brewers (Europe so far).
          </p>
          <p className="p-5">
            We also want to help educate consumers about the health risks of
            drinking what is currently labelled as ‘gluten-free’ beer in Europe
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
            from the people at{" "}
            <Link
              href="https://zerotolerance.mywikis.wiki/wiki/Main_Page"
              className="border-2 border-black bg-yellow-400 rounded-lg px-1"
              target="_blank"
            >
              Zero Tolerance Gluten Free Brewing Wiki
            </Link>
            .
          </p>
          <p className="p-5">
            For more information about this topic, please go to the{" "}
            <Link
              href="/links"
              className="border-2 border-black bg-yellow-400 rounded-lg px-1"
            >
              Links section
            </Link>
            .
          </p>
          <p className="p-5">
            If you are an ngci beer brewer/company - or know of one we
            missed out, contact us using our{" "}
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
