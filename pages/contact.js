import { getAllCompanies } from "../companies";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import ContactForm from "@/components/ContactForm";

const contactPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
      <PageTitle title="Contact Page" />
      <ContactForm />
    </DefaultLayout>
  );
};

export default contactPage;
