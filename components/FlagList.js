import Link from "next/link";
import { useEffect, useState } from "react";

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

function FlagList() {
  return (
    <div className='flex flex-row gap-2 justify-center mt-4 flex-wrap'>
      <div className='text-base'>Click on countries:</div>
      <a href='#argentina' className='scroll-smooth'>
        <AR title='Argentina' className='w-6 mt-1' />
      </a>
      <a href='#australia' className='scroll-smooth'>
        <AU title='Australia' className='w-6 mt-1' />
      </a>
      <a href='#canada' className='scroll-smooth'>
        <CA title='Canada' className='w-6 mt-1' />
      </a>
      <a href='#france' className='scroll-smooth'>
        <FR title='France' className='w-6 mt-1' />
      </a>
      <a href='#germany' className='scroll-smooth'>
        <DE title='Germany' className='w-6 mt-1' />
      </a>
      <a href='#italy' className='scroll-smooth'>
        <IT title='Italy' className='w-6 mt-1' />
      </a>
      <a href='#newzealand' className='scroll-smooth'>
        <NZ title='New Zealand' className='w-6 mt-1' />
      </a>
      <a href='#uk' className='scroll-smooth'>
        <GB title='United Kingdom' className='w-6 mt-1' />
      </a>
      <a href='#usa' className='scroll-smooth'>
        <US title='United States' className='w-6 mt-1' />
      </a>
    </div>
  );
}

export default FlagList;
