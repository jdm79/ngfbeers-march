import { getAllCompanies } from "../companies";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/Banner";
import ThumbnailRow from "@/components/ThumbnailRow";
import Links from "./links";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout>
        <Hero />
        <ThumbnailRow />
    </DefaultLayout>
       

  )
}

export default HomePage;
