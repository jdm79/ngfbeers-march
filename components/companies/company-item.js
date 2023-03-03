import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    
    return (
            <li>
                <Link href={companyLink}>

                <img src={image} alt={title}/>
                <div>
                    <div>
                        <h2>{title}</h2>
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