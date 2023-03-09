import React from 'react';

function Banner(props) {
  return (
    <div >
        <h1 className="w-screen flex p-5 justify-center bg-white text-black text-center">
          {props.message}
        </h1>
    </div>
  )
}

export default Banner;
