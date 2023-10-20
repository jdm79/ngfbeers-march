import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { getAllCompanies } from "@/companies";

import {
  US,
  GB,
  CA,
  FR,
  IT,
  DE,
  AU,
  AR,
  NZ,
} from "country-flag-icons/react/3x2";

function CountryCount(props) {
  const ElementRef = useRef(null);
  const [countriesCount, setCountriesCount] = useState("");
  const companies = getAllCompanies();

  useEffect(() => {
    const Elementcount = ElementRef.current.childNodes.length;
    let count = Elementcount - 1; // the -1 is the div at the top of the children list that is not a country list
    setCountriesCount(count);
    console.log(countriesCount);
  });

  return (
    <>
      <div className='text-lg'>
        {companies.length} companies from {countriesCount} countries are listed
        here as producing NGCI beer
      </div>
      <div
        className='flex flex-row gap-2 justify-center mt-4 flex-wrap'
        ref={ElementRef}
      >
        <div className='text-lg'>Countries so far:</div>
        <AR title='Argentina' className='w-6 md:w-12 mt-1 md:mb-2' />
        <AU title='Australia' className='w-6 md:w-12 mt-1 md:mb-2' />
        <CA title='Canada' className='w-6 md:w-12 mt-1 md:mb-2' />
        <FR title='France' className='w-6 md:w-12 mt-1 md:mb-2' />
        <DE title='Germany' className='w-6 md:w-12 mt-1 md:mb-2' />
        <IT title='Italy' className='w-6 md:w-12 mt-1 md:mb-2' />
        <NZ title='New Zealand' className='w-6 md:w-12 mt-1 md:mb-2' />
        <GB title='United Kingdom' className='w-6 md:w-12 mt-1 md:mb-2' />
        <US title='United States' className='w-6 md:w-12 mt-1 md:mb-2' />
      </div>
    </>
  );
}

export default CountryCount;
