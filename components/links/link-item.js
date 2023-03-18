import Link from "next/link";

function LinkItem(props) {
    const { id, type, title  } = props;
    const linkLink = `/links/${id}`;
    
    return (
            <li className="">
                <Link href={linkLink} className="w-screen flex p-5 bg-white hover:bg-yellow-100 border-gray-900 border-t-2">
                <div>
                    <div>
                        <h1 className="text-weight-bold text-xl bg-yellow-400 border border-black p-2 rounded-lg mb-2">{title}</h1>
                        <p className="text-sm">({type})</p>
                    </div>
                </div>
                </Link>
            </li>
    )
}

export default LinkItem;