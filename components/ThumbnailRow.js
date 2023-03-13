import { getAllCompanies } from "@/companies";
import CompanyThumbnail from "./companies/company-thumbnail";

function ThumbnailRow() {
    const companies = getAllCompanies();

    return (
        <div>
            <ul className="grid grid-cols-8 gap-1 p-1 mt-12 mb-8 border-black border-t-2 border-b-2 bg-white">
                {companies.map((company) => (
                    <CompanyThumbnail 
                        key={company.id}
                        id={company.id}
                        image={company.image}
                        title={company.title}
                />
            ))}
            </ul>
            
        </div>
    )
}

export default ThumbnailRow;