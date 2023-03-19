import CompanyItem from "./company-item";
import SocialMediaShare from "../../components/SocialMediaShare"

function CompaniesList(props) {
  const { items } = props;
  const title = "Coeliac-safe beers";

  return (
    <section className="bg-yellow-400 mb-10 pl-2 pr-2">
      <div>
        <ul className="grid grid-cols-2 gap-1 mt-12 xl:mt-12 xl:gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 bg-yellow-400">
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
      <div className="w-fit px-5 m-auto">
          <div className="px-5 mb-4 mt-5">
            <h1 className="text-center">Share this website</h1>
          </div>
          <div className="flex justify-center ">
            <SocialMediaShare title={title} />
          </div>
        </div>
    </section>
  );
}

export default CompaniesList;
