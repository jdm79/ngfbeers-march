import { getAllCompanies } from "../../companies";
import CompaniesList from "@/components/companies/companies-list";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";

const CompaniesPage = () => {
    const companies = getAllCompanies();
    
    return (
      <DefaultLayout>
        <PageTitle title="Companies Page" />
        <CompaniesList items={companies} />
      </DefaultLayout>
    );
}

export default CompaniesPage;