import React from 'react';

function Banner(props) {
  return (
    <div className='shadow-md shadow-black'>
        <h1 className="p-5 bg-[color:var(--bg-eggshell)] text-black text-center border-black border-t-2 border-b-2">
          {props.message}
        </h1>
    </div>
  )
}

export default Banner;
