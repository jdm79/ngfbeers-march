import SocialMediaShare from "../../components/SocialMediaShare";
import CompanyCountry from "../CompanyCountry";
import FlagList from "../FlagList";
import Link from "next/link";
import NavIcon from "../NavIcon";
import NewsItem from "./news-item";

function NewsList(props) {
  const { items } = props;

  return (
    <section className='bg-yellow-400 mb-10 pl-2 pr-2'>
      <div className='justify-center border-2 text-3xl border-black font-extrabold rounded-lg bg-gray-200 mt-12 mb-4 shadow-md shadow-black sm:w-3/4 mx-auto'>
        <p className='px-5 py-2 font-courier'>
          We currently have {items.length} articles here about NGCI beer. Let us
          know if you've seen any and we'll add them here!
        </p>
      </div>
      <div className='mt-10'>
        <ul className='grid grid-cols-1 gap-1 mt-2 mb-2 lg:gap-1 xl:grid-cols-4 bg-yellow-400'>
          {items.map((article) => (
            <NewsItem {...article} />
          ))}
        </ul>
      </div>
      <NavIcon />

      <div className='w-fit px-5 m-auto'>
        <div className='px-5 mb-4 mt-5'>
          <div className='text-center'>Share this website</div>
        </div>
        <div className='flex justify-center '>
          <SocialMediaShare title='Coeliac-safe beers' />
        </div>
      </div>
    </section>
  );
}

export default NewsList;
