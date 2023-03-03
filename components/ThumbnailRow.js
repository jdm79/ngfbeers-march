import { getAllCompanies } from "@/companies";
import CompanyThumbnail from "./companies/company-thumbnail";

function ThumbnailRow() {
    const companies = getAllCompanies();

    return (
        <div >
            <ul  className="grid grid-cols-6 gap-2 p-2">
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