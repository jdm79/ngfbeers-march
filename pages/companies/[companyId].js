import { getCompanyById } from "@/companies";
import { useRouter } from "next/router";
import Link from "next/link";
import DefaultLayout from "@/components/DefaultLayout";
import SocialMediaShare from "@/components/SocialMediaShare";

function CompanyDetailPage() {
  const router = useRouter();
  const companyId = router.query.companyId;
  const company = getCompanyById(companyId);

  if (!company) {
    return <p>No company found</p>;
  }

  return (
    <DefaultLayout>
      <section className=" bg-yellow-400">
        <Link href="/companies">
          <button
            className="bg-white
                border-solid 
              border-black 
                border-2
              text-black 
                font-bold 
                py-2 
                px-4 
                rounded 
                my-1 
                ml-1
                transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 hover:bg-white duration-300
                "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </Link>

        {/* beer company section here */}
        <div className="container flex flex-col px-6 py-10 mx-auto sm:w-1/2 space-y-6 lg:py-16 lg:flex-row lg:items-center">
          <div>
            <div className="border-gray-900 bg:white border p-3 bg-white rounded-lg">
              <h1 className="tracking-wide text-gray-800 text-3xl md:text-7xl mb-4 bg-yellow-400 border p-5 border-black rounded-lg ">
                {company.title}
              </h1>
              <div class="flex mb-4 mt-4 border border-black bg-white p-5 rounded-lg">
                <div class="w-1/2">
                  <ul className="space-y-4 md:space-y-4">
                    <li className="flex items-center -mx-2 text-gray-700 mt-4">
                      {/* put social media share here */}
                      {/* <SocialMediaShare id={company.id} title={company.title} /> */}
                    </li>
                    <li className="flex items-center -mx-2  mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-2 text-yellow-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span>{company.location}</span>
                    </li>

                    <li className="flex items-center -mx-2 text-gray-700 mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-2 text-yellow-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                      <a href={company.website_url} target="_blank">
                        Website<span className="mx-2"></span>
                      </a>
                    </li>

                    {company.insta_url ? (
                      <li className="flex items-center -mx-2 text-gray-700 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <a href={company.insta_url} target="_blank">
                          Instagram<span className="mx-2"></span>
                        </a>
                      </li>
                    ) : (
                      <div></div>
                    )}

                    {/* fb  */}
                    {company.fb_url ? (
                      <li className="flex items-center -mx-2 text-gray-700 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-2 text-yellow-400"
                          // style="color: #1769ff"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <a href={company.fb_url} target="_blank">
                          Facebook<span className="mx-2"></span>
                        </a>
                      </li>
                    ) : (
                      <div></div>
                    )}
                  </ul>
                </div>
                <div class="w-1/2">
                  <img
                    className="w-auto rounded-full"
                    src={`/${company.image}`}
                    alt={company.title}
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="flex items-center text-gray-700 border border-black p-5 rounded-lg mb-4">
                  <span className="mx-2">{company.description}</span>
                </p>
              </div>
              <div className="border border-black p-5 mt-4 rounded-lg m-auto sm:m-0">
                <h1 className="mb-4">Share this:</h1>
                <SocialMediaShare id={company.id} title={company.title} />
              </div>
            </div>

            {/* list of beers section below */}
            <div className="bg:white">
              <div className="mt-10 md:mt-20 space-y-5">
                {company.beers ? (
                  <div>
                    {company.beers.length > 0 ? (
                      <h1 className="tracking-wide text-gray-800 bg-white text-md md:text-xl p-5 mt-5 border border-black rounded-lg">
                        {company.beers[0].title} have {company.beers.length}{" "}
                        naturally gluten-free beer(s)
                      </h1>
                    ) : null}
                    <ul className="grid gap-x-3 row-auto w-200 lg:w-200 ">
                      {company.beers.map((item) => (
                        <div>
                          <div className="p-5 mt-4 bg-white border border-gray-900 rounded-lg">
                            <h1 className="flex text-gray-700 -mx-2 text-2xl sm:text-6xl mb-4 border border-black bg-yellow-400 p-5 rounded-lg">
                              <span className="mb-2">
                                {item.beer_name}
                              </span>
                            </h1>
                            <div>
                              {item.strength ? (
                                <h4 className="flex text-xs items-center -mx-2 mb-4 text-gray-700 border border-black p-5 rounded-lg">
                                  <span className="mx-2">{item.strength}</span>
                                </h4>
                              ) : (
                                <div></div>
                              )}
                            </div>
                            <img
                              className="w-auto rounded-full border-4 mb-2 m-auto sm:m-0 border-black"
                              src={`/images/beers/${item.image_url}`}
                              alt={item.beer_name}
                            />
                            <p className="flex items-center -mx-2 my-5 text-gray-700">
                              <a
                                className=" text-black bg-yellow-400 p-5 border rounded-lg border-black hover:bg-yellow-100 mt-4 sm:w-1/2"
                                href={item.beer_url}
                                target="_blank"
                              >
                                {`Click here to see this beer on the ${company.title} website`}
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5 ml-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </a>
                            </p>
                            <p className="flex items-center -mx-2 text-gray-700 border border-black p-5 rounded-lg">
                              <span className="">
                                {item.beer_description}
                              </span>
                            </p>
                          </div>
                        </div>
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
