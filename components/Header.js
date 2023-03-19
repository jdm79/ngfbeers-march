import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>ngfbeers | naturally gluten-free beers | ngci no barley</title>
        <meta
          property="og:title"
          content="ngfbeers | beers made without gluten"
          key="title"
        />
        <meta name="author" content="James Malvern" />
        <meta
          name="description"
          content="A showcase of naturally gluten-free beer companies. ngci beers. made without barley or any other gluten containing ingredients"
          key="desc"
        />
        <meta name="keywords" content="gluten-free, beer, ngci, barley-free" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dlrwbckxi/image/upload/v1678833616/social-media-logo_fahafl.jpg"
        />
        <meta
          property="og:description"
          content="A showcase of naturally gluten-free beer companies. ngci beers. made without barley or any other gluten containing ingredients"
        />
      </Head>
    </div>
  );
};

export default Header;
