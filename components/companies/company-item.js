import Link from "next/link";

function CompanyItem(props) {
    const { id, title, image, location } = props;
    const companyLink = `/companies/${id}`;
    return (
            <li>
                <img src={image} alt={title}/>
                <div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <p>{location}</p>
                    </div>
                    <div>
                        <Link href={companyLink}>See company detail</Link>
                    </div>
                </div>
            </li>
    )
}

export default CompanyItem;