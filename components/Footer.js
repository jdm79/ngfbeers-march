import { ImFacebook, ImInstagram } from 'react-icons/im';
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-gray-900">
        <div className="container mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center">
                    <Link href={'https://www.facebook.com/profile.php?id=100082957466636'} target="_blank"><ImFacebook /></Link>
                    <Link href={'https://www.instagram.com/ngfbeers/'}  target="_blank" className='text-blue'><ImInstagram /></Link>
                </div>
                <p className="py-5 text-gray-800 text-center">Copyright © 2023 ngfbeers</p>
                <p className="text-gray-800 text-center underline">
                  <Link href='/tocs'>
                     Terms & conditions
                  </Link>
                </p>
                <p className="text-gray-800 text-center mt-5">Created by <Link href='https://jamesmalvern.com' className='underline' target="_blank">
                     James Malvern
                  </Link>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
