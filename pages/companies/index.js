import { getAllCompanies } from "../../companies";
import SearchCompaniesList from "@/components/companies/search-companies-list";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";

const CompaniesPage = () => {
    const companies = getAllCompanies();
    
    return (
      <DefaultLayout>
        <PageTitle title="Companies Page" />
        <SearchCompaniesList items={companies} />
      </DefaultLayout>
    );
}

export default CompaniesPage;