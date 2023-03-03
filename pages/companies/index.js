import { getAllCompanies } from "../../companies";
import CompaniesList from "@/components/companies/companies-list";
import DefaultLayout from "@/components/DefaultLayout";

const CompaniesPage = () => {
    const companies = getAllCompanies();
    
    return (
        <DefaultLayout>
            <h1 className="w-screen flex p-5 justify-center border-b-2 border-black">Companies Page</h1>
            <CompaniesList items={companies}/>
        </DefaultLayout>                
    )
}

export default CompaniesPage;