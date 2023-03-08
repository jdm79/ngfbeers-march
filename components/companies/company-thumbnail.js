import Link from "next/link";

function CompanyThumbnail(props) {
    const { image, id, title } = props;
    const companyLink = `/companies/${id}`;
    return (
            <li>
                <Link href={companyLink}>
                    <div className="p-1 text-sm w-20" >
                        <img src={image} alt={title} />
                    </div>
                </Link>
            </li>
    )
}

export default CompanyThumbnail;