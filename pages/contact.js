import { getAllCompanies } from "../companies";
import DefaultLayout from "@/components/DefaultLayout";
import ThumbnailRow from "@/components/ThumbnailRow";
import ContactForm from "@/components/contact-form";

const contactPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <h1 className="bg-white w-screen flex p-5 justify-center border-b-2 border-black " >Contact Page</h1>
        <ContactForm />

    </DefaultLayout>  )
}

export default contactPage