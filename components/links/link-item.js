import Link from "next/link";

function LinkItem(props) {
    const { id, image, title, subheading, body } = props;
    const faqLink = `/faq/${id}`;
    
    return (
            <li>
                <Link href={faqLink} className="w-screen flex p-5 bg-gray-200 border-gray-900 border-b-2">
                <div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                </div>
                </Link>
            </li>
    )
}

export default LinkItem;