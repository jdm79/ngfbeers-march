import LinkItem from "./link-item";

function LinksList(props) {
  const { items } = props;

  return (
    <div className="w-screen flex justify-center bg-white mb-10 mt-12">
      <ul>
        {items.map((link) => (
          <LinkItem
            key={link.id}
            id={link.id}
            title={link.title}
            blurb={link.blurb}
            link={link.link_url}
            type={link.link_type}
            body={link.link_type}
          />
        ))}
      </ul>
    </div>
  );
}

export default LinksList;
