import React from "react";

function CompanyDescription(props) {
  const { description, description2, description3, description4 } = props;
  return (
    <p className=' text-black font-extrabold border border-black p-5 bg-white rounded-lg mb-4'>
      <span>{description}</span>
      {description2 ? (
        <p className='mt-4'>
          {" "}
          <span>{description2}</span>
        </p>
      ) : null}

      {description3 ? (
        <p className='mt-4'>
          <span>{description3}</span>
        </p>
      ) : null}

      {description4 ? (
        <p className='mt-4'>
          <span>{description4}</span>
        </p>
      ) : null}
    </p>
  );
}

export default CompanyDescription;
