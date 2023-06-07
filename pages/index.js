import { getAllCompanies } from "../companies";
import Hero from "@/components/Hero";
import DefaultLayout from "@/components/DefaultLayout";
import CompaniesList from "@/components/companies/companies-list";
import SearchCompaniesList from "@/components/companies/search-companies-list";
import About from "@/components/About";
import { Icon } from "@iconify/react";

const HomePage = () => {
  const companies = getAllCompanies();

  return (
    <DefaultLayout id='top'>
      <div>
        <Hero items={companies} />
      </div>

      <div id='companies'>
        <SearchCompaniesList items={companies} />
      </div>
      <a href='#top' className='scroll-smooth'>
        <Icon
          icon='material-symbols:expand-circle-down-outline-rounded'
          rotate={2}
          width='40'
          className='mt-2 mb-8 m-auto'
        />
      </a>
    </DefaultLayout>
  );
};

export default HomePage;
