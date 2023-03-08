import { ImFacebook, ImInstagram } from 'react-icons/im';
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-yellow-400">
        <div className="container mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center">
                    <Link href={'https://www.facebook.com/profile.php?id=100082957466636'} target="_blank"><ImFacebook /></Link>
                    <Link href={'https://www.instagram.com/ngfbeers_europe/'}  target="_blank"><ImInstagram /></Link>
                </div>
                <p className="py-5 text-gray-800 text-center">Copyright ngfbeers ©2023 All rights reserved</p>
                <p className="text-gray-600 text-center">Terms & conditions GDPR analytics</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
