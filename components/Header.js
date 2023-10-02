import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>
          NGCI Beers | naturally gluten-free beers | NGCI = no barley
        </title>
        <meta
          property='og:title'
          content='ngci beers | beers made without gluten-containing ingredients'
          key='title'
        />
        <meta name='author' content='James Malvern' />
        <meta
          name='description'
          content='A showcase of naturally gluten-free beer companies. ngci beers. made without barley or any other gluten containing ingredients'
          key='desc'
        />
        <meta name='keywords' content='gluten-free, beer, ngci, barley-free' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dlrwbckxi/image/upload/v1692047928/ngci-logo_gxlx8l.jpg'
        />
        <meta
          property='og:description'
          content='A showcase of naturally gluten-free beer companies. ngci beers. made without barley or any other gluten containing ingredients'
        />
      </Head>
    </div>
  );
};

export default Header;
