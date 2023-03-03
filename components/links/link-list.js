import LinkItem from "./link-item";

function LinkList(props) {
    const { items } = props;

    return (
        <div className="w-screen flex justify-center">
            <ul>
                {items.map((link) => (
                    <LinkItem 
                        key={link.id}
                        id={link.id}
                        title={link.title}
                        subheading={link.subheading}
                        body={link.body}
                    />
                ))}
            </ul>
        </div>
    )
}

export default LinkList;