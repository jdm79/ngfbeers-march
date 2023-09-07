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
        <ul className='grid grid-cols-1 gap-1 mt-2 mb-2 xl:gap-2 xl:grid-cols-4 lg:grid-cols-4 bg-yellow-400'>
          {items.map((article) => (
            <Link href={article.url} target='_blank'>
              <div className='bg-white text-center h-auto w-auto'>
                <img className='w-auto m-auto' src={article.image}></img>
                <div className='h-10'>this is added info</div>
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
        {/* <div className='flex justify-center '>
            <SocialMediaShare title={title} />
          </div> */}
      </div>
    </section>
  );
}

export default NewsList;
