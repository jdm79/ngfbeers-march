import { getAllCompanies } from "../../companies";
import SearchCompaniesList from "@/components/companies/search-companies-list";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import CompaniesList from "@/components/companies/companies-list";

const CompaniesPage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
      <PageTitle title='Companies Page' />
      {/* <SearchCompaniesList items={companies} /> */}
      <div id='companies'>
        <CompaniesList items={companies} />
      </div>
    </DefaultLayout>
  );
};

export default CompaniesPage;
