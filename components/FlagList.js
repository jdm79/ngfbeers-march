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

function FlagList(props) {
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
        <div className='text-lg'>Click on the flags:</div>
        <a href='#argentina' className='scroll-smooth'>
          <AR title='Argentina' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#australia' className='scroll-smooth'>
          <AU title='Australia' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#canada' className='scroll-smooth'>
          <CA title='Canada' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#france' className='scroll-smooth'>
          <FR title='France' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#germany' className='scroll-smooth'>
          <DE title='Germany' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#italy' className='scroll-smooth'>
          <IT title='Italy' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#newzealand' className='scroll-smooth'>
          <NZ title='New Zealand' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#uk' className='scroll-smooth'>
          <GB title='United Kingdom' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
        <a href='#usa' className='scroll-smooth'>
          <US title='United States' className='w-6 md:w-12 mt-1 md:mb-2' />
        </a>
      </div>
    </>
  );
}

export default FlagList;
