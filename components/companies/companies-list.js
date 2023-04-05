import CompanyItem from "./company-item";
import SocialMediaShare from "../../components/SocialMediaShare";
import Link from "next/link";

function CompaniesList(props) {
  const { items } = props;
  const title = "Coeliac-safe beers";

  return (
    <section className='bg-yellow-400 mb-10 pl-2 pr-2'>
      <div>
        <div className='w-full md:w-3/4 md:max-w-full mt-12 mb-20 mx-auto px-2 sm:px-0'>
          <h1 className='bg-white text-black border-2 border-black rounded-lg p-5 mb-5 shadow-md shadow-black'>
            This list of gluten-free brewers is constantly being updated and draws heavily upon
            information from the Zero Tolerance Gluten-Free Brewing Wiki{" "}
            <Link
              target='_blank'
              href='https://zerotolerance.mywikis.wiki/wiki/List_of_GF_breweries'
              className='border-2 border-black bg-yellow-400 rounded-lg px-1'
            >
              website
            </Link>.{" "}
            If you have any feedback, please use our contact form{" "}
            <Link
              href='/contact'
              className='border-2 border-black bg-yellow-400 rounded-lg px-1'
            >
              here
            </Link>
            .
          </h1>
        </div>
        <ul className='grid grid-cols-2 gap-1 mt-12 xl:mt-12 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {items.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              location={company.location}
              beers={company.beers}
            />
          ))}
        </ul>
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

export default CompaniesList;
