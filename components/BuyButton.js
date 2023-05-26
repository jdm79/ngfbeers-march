import React from "react";
import Link from "next/link";

function BuyButton({ text, url }) {
  return (
    <div>
      {" "}
      <p className='flex text-gray-700'>
        <Link
          className='text-2xl sm:text-3xl text-white text-center font-extrabold w-full bg-green-500 p-5 border rounded-lg border-black hover:sm:text-4xl'
          href={url}
          target='_blank'
        >
          <span> {text}</span>
        </Link>
      </p>
    </div>
  );
}

export default BuyButton;
