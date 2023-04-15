import Link from "next/link";

function CompanyItem(props) {
  const { id, title, image, city, stateCode } = props;
  const companyLink = `/companies/${id}`;

  return (
    // <li classNameName="p-2 bg-gray-200 w-full border-b-2 border-black">
    <Link href={companyLink}>
      <div className='m-auto w-full mb-0'>
        <div className='border-black border-2 bg-white hover:border-4 active:bg-yellow-400'>
          <img
            className='w-3/4 sm:w-1/2 m-auto rounded-full my-4'
            src={`/${image}`}
            alt={title}
          />
          <div className='flex bg-yellow-400 h-12 py-2 w-full m-auto border border-t-black text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-black ml-2 my-auto pr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
              />
            </svg>
            <div className='text-xs md:text-base my-auto'>
              {city ? `${city}, ` : null}
              {stateCode ? `${stateCode} ` : null}
            </div>
          </div>
        </div>
      </div>
    </Link>
    // </li>
  );
}

export default CompanyItem;
