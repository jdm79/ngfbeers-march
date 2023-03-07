import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    
    return (
            // <li classNameName="p-2 bg-gray-200 w-full border-b-2 border-black">
                <Link href={companyLink}>
                    <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600">
                        <img className="w-16 md:w-32 lg:w-48" src={`/${image}`} alt={title} />
                        </div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">{title}</h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    </div>
                </Link>
            // </li>
    )
}

export default CompanyItem;
