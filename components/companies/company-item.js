import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    
    return (
            <li className="p-2 bg-gray-200 w-full border-b-2 border-black">
                <Link href={companyLink}>
                
                <div>
                    <div>
                        <h1 className="text-5xl p-2">{title}</h1>
                    </div>
                    <div className="w-auto">               
                        <img src={image} alt={title}/>
                    </div>
                    <div>
                        <p>{location}</p>
                    </div>
                </div>
                </Link>
            </li>
    )
}

export default CompanyItem;