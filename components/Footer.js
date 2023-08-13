import { ImFacebook, ImInstagram } from "react-icons/im";
import Link from "next/link";

function Footer() {
  return (
    <footer className='bg-yellow-400'>
      <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
          <div className='flex gap-6 justify-center'>
            <Link
              href={"https://www.facebook.com/profile.php?id=100082957466636"}
              target='_blank'
            >
              <ImFacebook />
            </Link>
            <Link
              href={"https://www.instagram.com/ngcibeers/"}
              target='_blank'
              className='text-blue'
            >
              <ImInstagram />
            </Link>
          </div>
          <div className='px-2'>
            <p className='py-5 text-gray-800 text-center'>
              Copyright © 2023 ngcibeers
            </p>
            <p className='text-gray-800 text-center underline'>
              <Link href='/tocs'>Terms & conditions</Link>
            </p>
            <p className='text-gray-800 text-center mt-5'>
              This website was built by{" "}
              <Link
                href='https://jamesmalvern.com'
                className='underline'
                target='_blank'
              >
                James Malvern
              </Link>{" "}
              using{" "}
              <Link
                href='https://nextjs.org/'
                className='underline'
                target='_blank'
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href='https://tailwindcss.com/'
                className='underline'
                target='_blank'
              >
                Tailwind CSS
              </Link>
              , and deployed to{" "}
              <Link
                href='https://www.netlify.com/'
                className='underline'
                target='_blank'
              >
                Netlify
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
