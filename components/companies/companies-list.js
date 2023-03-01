import CompanyItem from "./company-item";

function CompaniesList(props) {
    const { items } = props;

    return (
        <div>
            <ul>
                {items.map((company) => (
                    <CompanyItem 
                        key={company.id}
                        id={company.id}
                        image={company.image}
                        title={company.title}
                        location={company.location}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CompaniesList