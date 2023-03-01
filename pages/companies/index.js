import Link from "next/link";
import { getAllCompanies } from "../../companies";

const CompaniesPage = () => {
    const companies = getAllCompanies();
    
    return (
        <div>
            <h1>Companies Page</h1>
            <ul>
               {companies.map((company) => (
                <li key={company.id}>
                    <Link 
                        href={{
                            pathname: '/companies/[id]',
                            query: {id: company.id}
                        }}>{company.title}
                    </Link>
                </li>
               ))}
            </ul>
        </div>
        
    )
}

export default CompaniesPage;