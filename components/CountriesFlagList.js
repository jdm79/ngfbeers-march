import {
  US,
  GB,
  CA,
  FR,
  IT,
  DE,
  AU,
  AR,
  NZ,
} from "country-flag-icons/react/3x2";

function CountriesFlagList({}) {
  return (
    <div className='flex flex-row gap-2'>
      <AR title='Argentina' className='w-6' />
      <AU title='Australia' className='w-6' />
      <CA title='Canada' className='w-6' />
      <NZ title='New Zealand' className='w-6' />
      <US title='United States' className='w-6' />
    </div>
  );
}

export default CountriesFlagList;
