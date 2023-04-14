import Link from "next/link";

function CompanyCountry(props) {
  const { country, amount } = props;

  return (
    <h1 className='mt-12 bg-[color:var(--bg-eggshell)] border-2 border-black p-4 text-center'>
      {country} Companies: {amount}
    </h1>
  );
}

export default CompanyCountry;
