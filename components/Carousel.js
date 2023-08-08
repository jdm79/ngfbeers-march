import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getAllCompanies, getAllCompaniesRandom } from "@/companies";
import Link from "next/link";
import Flag from "./Flag";
import dynamic from "next/dynamic";
import NoSSR from "react-no-ssr";
const Loading = () => <div>Loading...</div>;

function CarouselSlider() {
  // const data = getAllCompanies();
  // const companies = data.sort((a, b) =>
  //   a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  // );

  const data = getAllCompaniesRandom();

  return (
    <NoSSR onSSR={<Loading />}>
      <Carousel
        className='w-auto xl:w-1/3 m-auto mt-10 px-2'
        autoPlay
        interval='4000'
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
      >
        {data.map((company) => (
          <Link href={`/companies/${company.id}`} key={company.id}>
            <div>
              <h1
                className='text-md  bg-white p-2 border-black border'
                key={company.id}
              >
                {company.title}
              </h1>
              <div className='border-black border max-h-200px'>
                <img src={company.image} alt={company.title} />
              </div>
              <div className='text-sm bg-white p-2 border-black border flex flex-row'>
                <h1 className='m-auto'>
                  {company.city}
                  {company.state ? `, ${company.state}` : null}
                </h1>
                <span className='w-10 m-auto'>
                  <Flag flag={company.flag} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </NoSSR>
  );
}

export default CarouselSlider;
