import React from "react";
import {
  US,
  GB,
  CA,
  FR,
  IT,
  DE,
  AU,
  AR,
  LU,
  NZ,
} from "country-flag-icons/react/3x2";

function Flag({ flag }) {
  return (
    <div>
      {" "}
      {flag === "AU" ? (
        <AU title='Australia' className='w-full' />
      ) : flag === "AR" ? (
        <AR title='Argentina' className='w-full' />
      ) : flag === "CA" ? (
        <CA title='Canada' className='w-full' />
      ) : flag === "FR" ? (
        <FR title='France' className='w-full' />
      ) : flag === "DE" ? (
        <DE title='Germany' className='w-full' />
      ) : flag === "IT" ? (
        <IT title='Italy' className='w-full' />
      ) : flag === "GB" ? (
        <GB title='United Kingdom' className='w-full' />
      ) : flag === "LU" ? (
        <LU title='Luxembourg' className='w-full' />
      ) : flag === "NZ" ? (
        <NZ title='New Zealand' className='w-full' />
      ) : flag === "US" ? (
        <US title='United States' className='w-full' />
      ) : null}
    </div>
  );
}

export default Flag;
