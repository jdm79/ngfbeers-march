import CompanyItem from "./company-item";
import SocialMediaShare from "../../components/SocialMediaShare";
import CompanyCountry from "../CompanyCountry";
import FlagList from "../FlagList";

function CompaniesList(props) {
  const { items } = props;
  const title = "Coeliac-safe beers";
  const ausCompanies = items.filter(company => company.country == "Australia")
  const canCompanies = items.filter(company => company.country == "Canada")
  const fraCompanies = items.filter(company => company.country == "France")
  const deCompanies = items.filter(company => company.country == "Germany")
  const itCompanies = items.filter(company => company.country == "Italy")
  const ukCompanies = items.filter(company => company.flag == "GB")
  const usaCompanies = items.filter(company => company.country == "USA")


  return (
    <section className='bg-yellow-400 mb-10 pl-2 pr-2'>
      <div>
        <CompanyCountry country='Australian' amount={ausCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {ausCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              flag={company.flag}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
            />
          ))}
        </ul>

        <CompanyCountry country='Canadian' amount={canCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {canCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
            />
          ))}
        </ul>
        <CompanyCountry country='French' amount={fraCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {fraCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
            />
          ))}
        </ul>
        <CompanyCountry country='German' amount={deCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {deCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
            />
          ))}
        </ul>

        <CompanyCountry country='Italian' amount={itCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {itCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
            />
          ))}
        </ul>

        <CompanyCountry country='UK' amount={ukCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {ukCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
            />
          ))}
        </ul>

        <CompanyCountry country='USA' amount={usaCompanies.length} />
        <ul className='grid grid-cols-2 gap-1 mt-2 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400'>
          {usaCompanies.map((company) => (
            <CompanyItem
              key={company.id}
              id={company.id}
              image={company.image}
              title={company.title}
              country={company.country}
              beers={company.beers}
              city={company.city}
              state={company.state}
              stateCode={company.stateCode}
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
