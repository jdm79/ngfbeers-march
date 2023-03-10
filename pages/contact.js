import { getAllCompanies } from "../companies";
import DefaultLayout from "@/components/DefaultLayout";
import ThumbnailRow from "@/components/ThumbnailRow";

const contactPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <h1 className="bg-white w-screen flex p-5 justify-center border-b-2 border-black" >Contact Page</h1>
        <h1 className="flex justify-center pt-10  pb-10 bg-white">Contact form to go here</h1>
        <p className="w-screen flex justify-center pt-10 pb-20 bg-white text-black">Email us at ngfbeers@gmail.com</p>

    </DefaultLayout>  )
}

export default contactPage