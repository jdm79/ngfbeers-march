import { US, GB, CA, FR, IT, DE, AU } from 'country-flag-icons/react/3x2'


function FlagList() {
  return (
    <div className='flex flex-row gap-2 justify-left mt-4'>
      <div className='text-base'>Countries:</div>
      <AU title='Australia' className='w-6' />
      <CA title='Canada' className='w-6' />
      <FR title='France' className='w-6' />
      <DE title='Germany' className='w-6' />
      <IT title='Italy' className='w-6' />
      <GB title='United Kingdom' className='w-6' />
      <US title='United States' className='w-6' />
    </div>
  );
}

export default FlagList