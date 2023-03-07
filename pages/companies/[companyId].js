import { getCompanyById } from "@/companies";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/DefaultLayout";

function CompanyDetailPage() {
  const router = useRouter();
  const companyId = router.query.companyId;
  const company = getCompanyById(companyId);

  if(!company) {
    return <p>No company found</p>
  }

  return (
    <DefaultLayout>
      <div>
        <img src={`/${company.image}`} alt={company.title}/>
        <h1>{company.title}</h1>
        <p>{company.description}</p>
        <ul>
        {company.beers.map((item) => (
          <div>
            <li>{item.beer_name}</li>
            <li><img src={item.image_url} /></li>
            <li>{item.beer_description}</li>
          </div>
         
        ))}
        </ul>

      </div>
    </DefaultLayout>

  )
}

export default CompanyDetailPage