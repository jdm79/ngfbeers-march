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
      <section className="bg-white dark:bg-gray-800">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                        {company.title}
                    </h1>
                    
                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span className="mx-2">{company.location}</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <a href={company.website_url}>Website Link<span className="mx-2"></span></a>
                        </p>
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <span className="mx-2">{company.description}</span>
                        </p>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="w-16 md:w-32 lg:w-48" src={`/${company.image}`} alt={company.title} />
            </div>
        </div>
    </section>
    </DefaultLayout>

  )
}

export default CompanyDetailPage;

{/* <div>
        <img />
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

      </div> */}

