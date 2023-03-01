import Link from "next/link";
import { companies } from "@/companies";

const CompaniesPage = () => {
    
    return (
        <div>
            <h1>Companies Page</h1>
            <ul>
               {companies.map((company) => (
                <li key={company.id}>
                    <Link href="/companies/id">{company.title}</Link>
                </li>
               ))}
            </ul>
        </div>
        
    )
}

export default CompaniesPage;