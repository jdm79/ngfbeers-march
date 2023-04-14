import { getAllCompanies } from "../companies";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

const contactPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
      <PageTitle title='Contact Page' />
      <div className='w-full md:w-1/4 md:max-w-full mt-12 mb-20 mx-auto px-2 sm:px-0 min-h-screen'>
        <div className='bg-white text-center text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black'>
          <div className="mb-20">Form successfully submitted!</div>
          <div className="p-2 border-2 border-black bg-yellow-400 rounded-lg m-auto w-fit">
            <Link
              href='/companies'
            >
              Back to beers
            </Link>{" "}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default contactPage;
