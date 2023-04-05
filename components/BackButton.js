import Link from "next/link";

function BackButton({ href }) {
  return (
    <Link href={href}>
      <button
        className="bg-white
          border-solid 
        border-black 
          border-2
        text-black 
          font-bold 
          py-2 
          px-4 
          rounded 
          my-2
          
          transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 hover:bg-white duration-300
          "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
    </Link>
  );
}

export default BackButton;
