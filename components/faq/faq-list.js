import FaqItem from "./faq-item";

function FaqList(props) {
    const { items } = props;

    return (
      <div className="w-screen flex justify-center">
        <ul>
          {items.map((faq) => (
            <FaqItem
              key={faq.id}
              id={faq.id}
              title={faq.title}
              subheading={faq.subheading}
              body={faq.body}
            />
          ))}
        </ul>
      </div>
    );
}

export default FaqList;