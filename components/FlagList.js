import { US, GB, CA, FR, IT, DE, AU } from 'country-flag-icons/react/3x2'


function FlagList() {
  return (
    <div className='flex flex-row gap-2 justify-left mt-4'>
      <h1 className='text-sm md:base'>Countries:</h1>
      <AU title='United States' className='w-6' />
      <CA title='United States' className='w-6' />
      <FR title='United States' className='w-6' />
      <DE title='United States' className='w-6' />
      <IT title='United States' className='w-6' />
      <GB title='United States' className='w-6' />
      <US title='United States' className='w-6' />

    </div>
  );
}

export default FlagList