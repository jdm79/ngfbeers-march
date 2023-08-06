import { getAllCompanies } from "../companies";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import CompaniesList from "@/components/companies/companies-list";
import About from "@/components/About";
import { Icon } from "@iconify/react";
import CarouselSlider from "@/components/Carousel";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout id='top'>
      <div>
        <Hero />
        <CarouselSlider />
      </div>

      <div id='companies'>
        <CompaniesList items={companies} />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
