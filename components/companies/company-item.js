import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    
    return (
            // <li classNameName="p-2 bg-gray-200 w-full border-b-2 border-black">
                <Link href={companyLink}>
                    <div className="w-full bg-white dark:bg-gray-800 rounded-lg lg:mb-2 mb-10">
                        <div className="w-full h-64">
                        <img className="w-4/5 rounded-full ml-8" src={`/${image}`} alt={title} />
                        </div>
                        <h1 className="w-80 h-2 mt-4 "></h1>
                        <p className="w-24 h-2 mt-4 "></p>
                    </div>
                </Link>
            // </li>
    )
}

export default CompanyItem;
