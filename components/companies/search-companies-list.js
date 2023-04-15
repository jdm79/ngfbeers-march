import CompanyItem from "./company-item";
import SocialMediaShare from "../../components/SocialMediaShare";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';

function SearchCompaniesList(props) {
  const { items } = props;
  const data = items.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

  const title = "Coeliac-safe beers";

    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState([]);
  
    useEffect(() => {
      setCompanies(data);
    }, []);

    useEffect(() => {
      setFilteredCompanies(
        companies.filter((company) =>
          company.state.toLowerCase().includes(search.toLowerCase()) ||
          company.city.toLowerCase().includes(search.toLowerCase()) ||
          company.title.toLowerCase().includes(search.toLowerCase()) ||
          company.flag.toLowerCase().includes(search.toLowerCase()) ||
          company.region.toLowerCase().includes(search.toLowerCase()) ||
          company.country.toLowerCase().includes(search.toLowerCase() ))
        )
    }, [search, companies]);




 
  // add the search stuff here and filter down 

  return (
    <section className='bg-yellow-400 mb-10 pl-2 pr-2'>
      <div>
        <div className='w-full md:w-3/4 mt-10 mb-10 mx-auto'>
          <div className='relative w-full md:w-1/2 mx-auto'>
            <div className='absolute inset-y-0 left-0 flex m-auto items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              type='text'
              id='simple-search'
              className='bg-white border-2 border-black  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5'
              placeholder='Search for companies using location or company name'
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </div>
        </div>

        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {filteredCompanies.map((company, id) => (
            <CompanyItem key={company.id} {...company} />
          ))}
        </ul>
        <div className='bg-[color:var(--bg-eggshell)] text-black border-2 border-black rounded-lg p-5 mb-5 mt-10 shadow-md shadow-black'>
          This list of gluten-free brewers is constantly being updated and draws
          heavily upon information from the Zero Tolerance Gluten-Free Brewing
          Wiki{" "}
          <Link
            target='_blank'
            href='https://zerotolerance.mywikis.wiki/wiki/List_of_GF_breweries'
            className='border-2 border-black bg-yellow-400 rounded-lg px-1'
          >
            website
          </Link>
          . If you have any feedback, please use our contact form{" "}
          <Link
            href='/contact'
            className='border-2 border-black bg-yellow-400 rounded-lg px-1'
          >
            here
          </Link>
          .
        </div>
      </div>
      <div className='w-fit px-5 m-auto'>
        <div className='px-5 mb-4 mt-5'>
          <h1 className='text-center'>Share this website</h1>
        </div>
        <div className='flex justify-center '>
          <SocialMediaShare title={title} />
        </div>
      </div>
    </section>
  );
}

export default SearchCompaniesList;
