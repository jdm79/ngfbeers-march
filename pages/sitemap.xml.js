import { getAllCompanies } from "@/companies";
import { getAllLinks } from "@/linkList";

function generateSiteMap(companies) {
    const links = getAllLinks()


  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://ngfbeers.com</loc>
     </url>
     <url>
       <loc>https://ngfbeers.com/about</loc>
     </url>

     ${links
        .map(({ id }) => {
          return `
        <url>
            <loc>${`https://ngfbeers.com/links/${id}`}</loc>
        </url>
      `;
        })
        .join('')}



     ${companies
       .map(({ id }) => {
         return `
       <url>
           <loc>${`https://ngfbeers.com/companies/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const companies = getAllCompanies();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(companies);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;