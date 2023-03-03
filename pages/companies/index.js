import { getAllCompanies } from "../../companies";
import CompaniesList from "@/components/companies/companies-list";
import DefaultLayout from "@/components/DefaultLayout";

const CompaniesPage = () => {
    const companies = getAllCompanies();
    
    return (
        <DefaultLayout>
            <h1>Companies Page</h1>
            <CompaniesList items={companies}/>
        </DefaultLayout>                
    )
}

export default CompaniesPage;