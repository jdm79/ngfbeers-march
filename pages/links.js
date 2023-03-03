import LinkItem from "@/components/links/link-item";
import { getAllLinks } from "@/link";

function Links() {
    const links = getAllLinks();

    return (
        <div>
            <h1>Links</h1>
            <ul>
                {links.map((link) => (
                    <h1>{link.title}</h1>
                ))}
            </ul>
        </div>
    )
}

export default Links