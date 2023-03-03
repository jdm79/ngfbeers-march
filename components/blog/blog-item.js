import Link from "next/link";

function BlogItem(props) {
    const { id, image, title, subheading, body } = props;
    const blogLink = `/blog/${id}`;
    
    return (
            <li>
                <Link href={blogLink} className="w-screen flex p-5 bg-gray-200 border-gray-900 border-b-2">
                <div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                </div>
                </Link>
            </li>
    )
}

export default BlogItem;