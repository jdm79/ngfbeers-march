import React from "react";
import Link from "next/link";

function NewsItem(props) {
  const { image, url, headline, date } = props;

  return (
    <Link href={url} target='_blank' className='m-auto w-full'>
      <div className='bg-gray-100 text-center h-full xl:h-64 w-full xl:w-11/12 p-2'>
        <img className='h-1/4 p-1' src={image}></img>
        <div className='h-fit font-sans p-1 text-left m-auto font-bold text-2xl mt-2 bg-white hover:underline'>
          {headline}
        </div>
        <div className='h-fit p-1 text-left m-auto font-bold text-sm mt-1 mb-2'>
          Published: {date}
        </div>
      </div>
    </Link>
  );
}

export default NewsItem;
