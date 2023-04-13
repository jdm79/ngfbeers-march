import DefaultLayout from "@/components/DefaultLayout";
import PageTitle from "@/components/PageTitle";
import { useRouter } from "next/router";
import About from "@/components/About";

const aboutPage = () => {
  const router = useRouter();
 
  return (
    <DefaultLayout>
      <PageTitle title='About Page' />
      <About />
    </DefaultLayout>
  );
};

export default aboutPage;
