import { getAllCompanies } from "../companies";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import ThumbnailRow from "@/components/ThumbnailRow";
import ContactForm from "@/components/contact-form";

const contactPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
      <PageTitle title="Contact Page" />
        <ContactForm />

    </DefaultLayout>  )
}

export default contactPage