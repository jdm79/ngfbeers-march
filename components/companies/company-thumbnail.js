import Link from "next/link";

function CompanyThumbnail(props) {
    const { image, id, title } = props;
    const companyLink = `/companies/${id}`;
    return (
            <li>
                <Link href={companyLink}>
                    <div className="p-2 rounded-full w-12 lg:w-4/5" >
                        <img src={image} alt={title} />
                    </div>
                </Link>
            </li>
    )
}

export default CompanyThumbnail;