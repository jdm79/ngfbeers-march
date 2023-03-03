import Head from 'next/head';

const Header = () => {
  return (
    <div>
      <Head>
        <title>ngfbeers | naturally gluten-free beers</title>
        <meta property="og:title" content="Sepono Properties" key="title" />
        <meta
          name="description"
          content="Naturally gluten-free beers. ngci beers. made without barley."
          key="desc"
        />
         <meta
          property="og:image"
          content="https://res.cloudinary.com/dlrwbckxi/image/upload/v1677762451/logo-ngfbeers_bdw7s1.jpg"
        />
      </Head>
    </div>
  )
}

export default Header;