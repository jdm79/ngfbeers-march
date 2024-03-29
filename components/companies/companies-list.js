import CompanyItem from "./company-item";
import SocialMediaShare from "../../components/SocialMediaShare";
import CompanyCountry from "../CompanyCountry";
import FlagList from "../FlagList";
import NavIcon from "../NavIcon";

function CompaniesList(props) {
  const { items } = props;
  const data = items.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );

  const title = "Coeliac-safe beers";
  const argCompanies = items.filter(
    (company) => company.country == "Argentina"
  );
  const ausCompanies = items.filter(
    (company) => company.country == "Australia"
  );
  const canCompanies = items.filter((company) => company.country == "Canada");
  const fraCompanies = items.filter((company) => company.country == "France");
  const deCompanies = items.filter((company) => company.country == "Germany");
  const itCompanies = items.filter((company) => company.country == "Italy");
  const nzCompanies = items.filter(
    (company) => company.country == "New Zealand"
  );
  const ukCompanies = items.filter((company) => company.flag == "GB");
  const usaCompanies = data.filter((company) => company.country == "USA");

  return (
    <section className='bg-yellow-400 mb-10 pl-2 pr-2'>
      <div className='mt-10 relative' id='top'>
        <div className='text-center text-1xl lg:text-5xl m-auto md:ml-20 md:mr-20 md:mt-10'>
          <div className='w-auto m-auto'>
            <div className='text-lg text-center mt-10 bg-white p-4 border-2 border-black  sm:m-auto'>
              <FlagList />{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id='argentina'>
          <CompanyCountry country='Argentine' amount={argCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {argCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='australia'>
          <CompanyCountry country='Australian' amount={ausCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {ausCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='canada'>
          <CompanyCountry country='Canadian' amount={canCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {canCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='france'>
          <CompanyCountry country='French' amount={fraCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {fraCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='germany'>
          <CompanyCountry country='German' amount={deCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {deCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='italy'>
          <CompanyCountry country='Italian' amount={itCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {itCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='newzealand'>
          <CompanyCountry country='New Zealand' amount={nzCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {nzCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='uk'>
          <CompanyCountry country='UK' amount={ukCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {ukCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />

        <div id='usa'>
          <CompanyCountry country='USA' amount={usaCompanies.length} />
          <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
            {usaCompanies.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))}
          </ul>
        </div>
        <NavIcon />
      </div>
      <div className='w-fit px-5 m-auto'>
        <div className='px-5 mb-4 mt-5'>
          <div className='text-center'>Share this website</div>
        </div>
        <div className='flex justify-center '>
          <SocialMediaShare title={title} />
        </div>
      </div>
    </section>
  );
}

export default CompaniesList;
