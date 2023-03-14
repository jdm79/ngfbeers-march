import Link from "next/link";

function LinkItem(props) {
    const { id, type, title  } = props;
    const linkLink = `/links/${id}`;
    
    return (
            <li>
                <Link href={linkLink} className="w-screen flex p-5 bg-white hover:bg-yellow-100 border-gray-900 border-t-2">
                <div>
                    <div>
                        <h1 className="text-weight-bold text-xl">{title}</h1>
                        <p className="text-sm">({type})</p>
                    </div>
                </div>
                </Link>
            </li>
    )
}

export default LinkItem;