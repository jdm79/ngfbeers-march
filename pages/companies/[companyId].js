import { getCompanyById } from "@/companies";
import { useRouter } from "next/router";
import Link from 'next/link';
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
      <Link href="/companies" >
              <button className="bg-yellow-400 hover:bg-black text-black font-bold py-2 px-4 rounded my-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              </button>
            </Link>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                        {company.title}
                    </h1>
                    
                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 text-yellow-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span className="mx-2">{company.location}</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 text-yellow-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                          </svg>

                            <a href={company.website_url}>Website Link<span className="mx-2"></span></a>
                        </p>
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                            <span className="mx-2">{company.description}</span>
                        </p>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-200 h-96 lg:w-200">
                <img className="w-100 md:w-100 lg:w-100 rounded-full border-4 border-black" src={`/${company.image}`} alt={company.title} />
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

