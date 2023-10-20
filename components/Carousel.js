import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getAllCompanies, getAllCompaniesRandom } from "@/companies";
import Link from "next/link";
import Flag from "./Flag";
const data = getAllCompanies();

function CarouselSlider() {
  // const companies = data.sort((a, b) =>
  //   a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  // );

  const [randomArray, setRandomArray] = useState([]);

  useEffect(() => {
    const shuffled = data
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setRandomArray(shuffled);
  }, []);

  return (
    <Carousel
      className='w-2/3 sm:w-2/5 xl:w-1/5 m-auto mt-10 px-2'
      autoPlay={true}
      interval='4000'
      infiniteLoop
      showThumbs={false}
      showIndicators={false}
      key={randomArray.length}
    >
      {randomArray.map((company, i) => (
        <Link href={`/companies/${company.id}`} key={company.length}>
          <div key={i}>
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
  );
}

export default CarouselSlider;
