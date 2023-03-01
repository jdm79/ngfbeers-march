import Link from "next/link";
import { getAllCompanies } from "../../companies";
import CompaniesList from "@/components/companies/companies-list";

const CompaniesPage = () => {
    const companies = getAllCompanies();
    
    return (
        <div>
            <h1>Companies Page</h1>
            <CompaniesList items={companies}/>
        </div>
        
    )
}

export default CompaniesPage;