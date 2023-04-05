function Hero() {
  return (
    <div className='w-screen bg-gradient-to-r bg-yellow-400 text-black min-h-screen'>
      <div className='mt-10 relative'>
        <div className='text-center text-5xl ml-3 mr-3 mt-10 lg:text-8xl w-auto md:ml-20 md:mr-20 md:mt-20'>
          <h1>Naturally </h1>
          <h1>gluten-free beers</h1>
          <a href='/companies'>
            <img
              src='/logo-ngfbeers.png'
              className='m-auto mt-10 w-3/4 sm:w-1/5'
              alt='ngfbeers logo - a circle inside of which is a black beer glass with foam spilling over. the words ngfbeers outside the circle'
            />
          </a>

          <p className='text-base mt-10 bg-white p-3 w-fit border-2 border-black m-auto rounded-full'>
            A showcase of gluten-free beers made without barley
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
