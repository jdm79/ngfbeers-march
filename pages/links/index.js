import { getAllLinks } from "@/linkList";
import LinksList from "@/components/links/link-list";
import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";

const LinksPage = () => {
  const links = getAllLinks();

  return (
    <DefaultLayout>
      <PageTitle title="Links Page" />
      <LinksList items={links} />
    </DefaultLayout>
  );
};

export default LinksPage;
