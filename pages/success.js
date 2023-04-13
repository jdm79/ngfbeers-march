import { getAllCompanies } from "../companies";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";

const contactPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
      <PageTitle title='Contact Page' />
      <div className='w-full md:w-3/4 md:max-w-full mt-12 mb-20 mx-auto px-2 sm:px-0 min-h-screen'>
        <h1 className='bg-white text-center text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black'>
          Form successfully submitted!
        </h1>
      </div>
    </DefaultLayout>
  );
};

export default contactPage;
