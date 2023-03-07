import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    
    return (
            // <li classNameName="p-2 bg-gray-200 w-full border-b-2 border-black">
                <Link href={companyLink}>
                    <div className="w-full bg-gray-200 rounded-lg lg:mb-2 mb-10">
                        <div className="w-full h-64">
                        <img className="w-full rounded-full" src={`/${image}`} alt={title} />
                        </div>
                        <h1 className="w-80 h-2 mt-4 "></h1>
                        <p className="w-24 h-2 mt-4 "></p>
                    </div>
                </Link>
            // </li>
    )
}

export default CompanyItem;
