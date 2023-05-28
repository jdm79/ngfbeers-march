import React from "react";
import BuyButton from "./BuyButton";

function Beer(props) {
  const {
    strength,
    image_url,
    beer_description,
    beer_description2,
    ingredients,
    beer_url,
    beer_name,
  } = props;
  return (
    <div className='grid'>
      <div className='px-5 py-3 mt-4 bg-gray-900 border border-gray-900 rounded-lg'>
        <div className=' text-gray-700 -mx-2 text-2xl sm:text-6xl mb-4 border border-black bg-white p-5 rounded-lg'>
          {beer_name}
        </div>
        <div>
          {strength ? (
            <div className='flex items-center bg-white -mx-2 mb-4 text-gray-700 border border-black p-5 rounded-lg'>
              <span className='mx-2'>{strength}</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='m-auto'>
          <img
            className='w-auto rounded-full border-4 mb-4 m-auto border-black'
            src={`/images/beers/${image_url}`}
            alt={beer_name}
          />
        </div>
        <p className='flex flex-col -mx-2 text-gray-700 border bg-white border-black p-5 rounded-lg'>
          <span className=''>{beer_description}</span>
          {beer_description2 ? (
            <span className='mt-4'>{beer_description2}</span>
          ) : (
            <span></span>
          )}
          {ingredients ? (
            <span className='mt-4'>{ingredients}</span>
          ) : (
            <span></span>
          )}
        </p>
        <div className='-mx-2 mt-3'>
          {" "}
          <BuyButton url={beer_url} text={`Buy this beer!`} />
        </div>
      </div>
    </div>
  );
}

export default Beer;
