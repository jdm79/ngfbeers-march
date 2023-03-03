import Link from "next/link";

function CompanyThumbnail(props) {
    const { image, id, title } = props;
    const companyLink = `/companies/${id}`;
    return (
            <li>
                <Link href={companyLink}>
                    <img src={image} alt={title} />
                </Link>
            </li>
    )
}

export default CompanyThumbnail;