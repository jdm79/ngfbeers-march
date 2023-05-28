import { getCompanyById } from "@/companies";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/DefaultLayout";
import SocialMediaShare from "@/components/SocialMediaShare";
import BackButton from "@/components/BackButton";
import BuyButton from "@/components/BuyButton";
import Flag from "@/components/Flag";
import CompanyDescription from "@/components/CompanyDescription";
import Beer from "@/components/Beer";
import CompanySocialMediaLinks from "@/components/CompanySocialMediaLinks";

function CompanyDetailPage() {
  const router = useRouter();
  const companyId = router.query.companyId;
  const company = getCompanyById(companyId);

  if (!company) {
    return <p>No company found</p>;
  }

  return (
    <DefaultLayout>
      <section className=' bg-yellow-400 px-2'>
        <BackButton href='/companies' />

        {/* beer company section here */}
        <div className='container flex flex-col py-10 mx-auto sm:w-3/4 space-y-6 lg:py-16  lg:items-center'>
          <div>
            <div className='border-gray-900 bg:white border p-3 bg-gray-900 rounded-lg'>
              <div className='flex flex-row p-3 text-base md:text-4xl lg:text-5xl xl:text-7xl bg-white mb-4 border border-black rounded-lg h-auto m-auto'>
                <div className='w-1/4 p-3 md:w-1/4 m-auto'>
                  <Flag flag={company.flag} />
                </div>
                <div className='w-3/4 p-3 md:w-1/4 m-auto'>
                  <img
                    className='w-auto rounded-full'
                    src={`/${company.image}`}
                    alt={company.title}
                  />
                </div>
                <div className='w-1/4 p-3 md:w-1/4 m-auto'>
                  <Flag flag={company.flag} />
                </div>
              </div>
              <div className=' p-3 text-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl bg-white mb-4 border border-black rounded-lg h-auto'>
                <div>{company.title}</div>
                <div className='text-sm md:text-base'>
                  {" "}
                  {company.founded ? (
                    <p className=''>
                      <span className='text-black'>(Founded in</span>{" "}
                      {company.founded})
                    </p>
                  ) : null}
                </div>
              </div>
              <div className='mt-4'>
                <CompanyDescription {...company} />
              </div>
              <CompanySocialMediaLinks {...company} />

              {company.company_type ? (
                <div className='mt-4'>
                  <div className=' text-gray-700 border border-black p-5 bg-white rounded-lg mb-4'>
                    <p>
                      <span className='text-black'>Company type:</span>{" "}
                      {company.company_type}
                    </p>
                  </div>
                </div>
              ) : null}

              {/* use this if it's not a European company - direct link to beers rather than listing them here */}
              {company.taproom_url ? (
                <div className='mb-4'>
                  <BuyButton
                    url={company.taproom_url}
                    text={`Buy some ${company.title} beer!`}
                  />
                </div>
              ) : null}

              <div className='border border-black p-5 bg-white mt-4 rounded-lg m-auto sm:m-0'>
                <h1 className='mb-4'>Share this:</h1>
                <SocialMediaShare id={company.id} title={company.title} />
              </div>
            </div>

            {/* list of beers section below */}
            <div className='bg:white'>
              <div className=''>
                {company.beers ? (
                  <div>
                    {company.beers.length > 0 ? (
                      <div className='tracking-wide text-gray-800 bg-[color:var(--bg-eggshell)] text-md md:text-xl p-5 mt-5 border border-black rounded-lg'>
                        {company.beers[0].title} have {company.beers.length}{" "}
                        naturally gluten-free beer(s)
                      </div>
                    ) : null}
                    <ul>
                      {company.beers.map((item) => (
                        <Beer key={item.name} {...item} />
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
export default CompanyDetailPage;
