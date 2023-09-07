import { getAllCompanies } from "../../companies";
import SearchCompaniesList from "@/components/companies/search-companies-list";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import NewsList from "@/components/news/news-list";
import { getAllArticles } from "@/articles";

const NewsPage = () => {
  // const companies = getAllCompanies();
  // const articles = [
  //   "elisa",
  //   "mass spectrometry",
  //   "forbes",
  //   "csiro",
  //   "elisa",
  //   "mass spectrometry",
  //   "forbes",
  //   "csiro",
  //   "elisa",
  //   "mass spectrometry",
  //   "forbes",
  //   "csiro",
  // ];

  const articles = getAllArticles();

  return (
    <DefaultLayout>
      <PageTitle title='Latest News' />
      <NewsList items={articles} />
    </DefaultLayout>
  );
};

export default NewsPage;
