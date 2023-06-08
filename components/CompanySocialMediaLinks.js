import { Icon } from "@iconify/react";
import Link from "next/link";

function CompanySocialMediaLinks(props) {
  const { city, state, country, website_url, insta_url, fb_url, untappd_url } =
    props;
  return (
    <div className='mb-4 mt-4 border border-black bg-white p-5 rounded-lg'>
      <div className='w-full'>
        <ul className='font-extrabold'>
          <li className='flex items-center text-black font-extrabold  mt-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-yellow-400'
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
            <span className='pl-2'>
              {city ? `${city}` : null}
              {state ? `, ${state}` : null}
              {country ? ` - ${country}` : null}
            </span>
          </li>
          {website_url ? (
            <li className='flex items-center -mx-2 text-gray-700 mt-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 mx-2 text-yellow-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <Link href={website_url} target='_blank'>
                <span className=''>Website</span>
              </Link>
            </li>
          ) : (
            <div></div>
          )}

          {insta_url ? (
            <li className='flex items-center -mx-2 text-gray-700 mt-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 mx-2 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
              <Link href={insta_url} target='_blank'>
                Instagram<span className='mx-2'></span>
              </Link>
            </li>
          ) : (
            <div></div>
          )}

          {/* fb  */}
          {fb_url ? (
            <li className='flex items-center -mx-2 text-gray-700 mt-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 mx-2 text-yellow-400'
                // style="color: #1769ff"
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
              </svg>
              <Link href={fb_url} target='_blank'>
                Facebook<span className='mx-2'></span>
              </Link>
            </li>
          ) : (
            <div></div>
          )}
          {/* untappd  */}
          {untappd_url ? (
            <li className='flex items-center  text-gray-700 mt-4 '>
              <Icon icon='fa-brands:untappd' style={{ color: "#FACC14" }} />
              <Link href={untappd_url} target='_blank' className='ml-3'>
                {"  "}
                Untappd<span className=''></span>
              </Link>
            </li>
          ) : (
            <div></div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CompanySocialMediaLinks;
