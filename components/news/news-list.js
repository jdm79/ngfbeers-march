import SocialMediaShare from "../../components/SocialMediaShare";
import CompanyCountry from "../CompanyCountry";
import FlagList from "../FlagList";
import Link from "next/link";
import NavIcon from "../NavIcon";

function NewsList(props) {
  const { items } = props;

  return (
    <section className='bg-yellow-400 mb-10 pl-2 pr-2'>
      <div className='mt-12'>
        <ul className='grid grid-cols-1 gap-1 mt-2 mb-2 xl:gap-2 xl:grid-cols-4 bg-yellow-400'>
          {items.map((article) => (
            <Link href={article.url} target='_blank' className='m-auto w-full'>
              <div className='bg-gray-100 text-center h-full xl:h-80 w-full xl:w-11/12 p-2'>
                <img className='w-1/3 p-1' src={article.image}></img>
                <div className='h-fit p-1 text-left m-auto font-bold text-2xl mt-2 bg-white hover:underline'>
                  {article.headline}
                </div>
                <div className='h-fit p-1 text-left m-auto font-bold text-sm mt-1 mb-2'>
                  {article.author
                    ? `by ${article.author} (${article.date})`
                    : `${article.author} (${article.date})`}
                </div>
              </div>
            </Link>
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
