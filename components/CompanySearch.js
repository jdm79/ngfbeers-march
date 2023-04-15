// import { NextSeo } from "next-seo";
// import { useState, useEffect } from "react";
// import CompanySearchResult from "./CompanySearchResult";
// import { getAllCompanies } from "@/companies";
// import CompanyItem from "./companies/company-item";

// const CompanySearch = () => {
//   /**
//    * get all cities array
//    */
//   const [companies, setCompanies] = useState([]);
//   /**
 
//   /**
//    * input field keyword onchage
//    */
//   const [search, setSearch] = useState("");
//   /**
//    * loop over the cities
//    */
//   const [filteredCompanies, setFilteredCompanies] = useState([]);

//   /**
//    * Fetch api
//    */
//   useEffect(() => {

//     const data = getAllCompanies();
//     console.log(data)

//     setCompanies(data);
//   }, []);

//   /**
//    * fetch this effect while entering the keywords
//    */
//   useEffect(() => {
//     setFilteredCompanies(
//       companies.filter((company) =>
//         company.state.toLowerCase().includes(search.toLowerCase()) ||
//         company.city.toLowerCase().includes(search.toLowerCase()) ||
//         company.title.toLowerCase().includes(search.toLowerCase()) ||
//         company.country.toLowerCase().includes(search.toLowerCase() ))
//       )
//   }, [search, companies]);

//   return (
//     <>
//       <NextSeo
//         title={`Top companies`}
//         description={`Top companies `}
//         openGraph={{
//           title: `Top companies`,
//           description: `Top companies `,
//         }}
//       />
//       <input
//         type='text'
//         placeholder='Search Companies'
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <div className='flex'>
//         <div className='w-screen mb-5 px-4 md:px-5'>
//           <div className='flex flex-wrap -mx-1 lg:-mx-4'>
//             {filteredCompanies.map((company, id) => (
//               <CompanyItem key={id} {...company} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CompanySearch;
