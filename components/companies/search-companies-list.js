import CompanyItem from "./company-item";
import SocialMediaShare from "../../components/SocialMediaShare";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

function SearchCompaniesList(props) {
  const { items } = props;
  const title = "Coeliac-safe beers";

    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState([]);
  
    useEffect(() => {
      setCompanies(items);
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
        <div className='w-full md:w-3/4 md:max-w-full mt-10 mb-10 mx-auto px-2 sm:px-0'>
          <div className='m-auto text-center w-auto '>
            <input
              type='text'
              className='w-full h-10 md:w-1/2 pl-2 border-2 border-black rounded-md'
              placeholder='Search companies using city, state, country or name'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {filteredCompanies.map((company, id) => (
            <CompanyItem key={company.id} {...company} />
          ))}
        </ul>
        <div className='bg-white text-black border-2 border-black rounded-lg p-5 mb-5 mt-10 shadow-md shadow-black'>
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
