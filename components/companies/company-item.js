import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    
    return (
            // <li classNameName="p-2 bg-gray-200 w-full border-b-2 border-black">
                <Link href={companyLink}>
                    <div className="m-auto w-full bg-white mb-10">
                        <div className="border-black border-2 hover:border-4 p-4 active:bg-yellow-400 shadow-md shadow-black">
                            <img className=" m-auto rounded-full" src={`/${image}`} alt={title} />
                            <h1 className="text-center">{location}</h1>
                        </div>
                    </div>
                </Link>
            // </li>
    )
}

export default CompanyItem;
