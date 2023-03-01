import Link from "next/link";
import { getAllCompanies } from "../companies";
import CompaniesList from "@/components/companies/companies-list";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <div>
        <h1>Home Page (THIS SITE IS UNDER HEAVY CONSTRUCTION!)</h1>
        <ul>
          <li>
            <Link href="/companies">Companies</Link>
          </li>
          <li>
            <Link href="/blog">Blog Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <CompaniesList items={companies} />
        </div>
    </div>
  )
}

export default HomePage;
