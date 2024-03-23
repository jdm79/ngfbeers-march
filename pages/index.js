import { getAllCompanies } from "../companies";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import CompaniesList from "@/components/companies/companies-list";
import About from "@/components/About";
import { Icon } from "@iconify/react";
import CarouselSlider from "@/components/Carousel";
import PageTitle from "@/components/PageTitle";
import SearchCompaniesList from "@/components/companies/search-companies-list";
import CountriesCount from "@/components/CountriesCount";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout id='top'>
      <div>
        <Hero />
        <About />
      </div>
      <div id='companies'>
        <CompaniesList items={companies} />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
