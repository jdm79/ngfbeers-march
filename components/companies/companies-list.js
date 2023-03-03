import CompanyItem from "./company-item";

function CompaniesList(props) {
    const { items } = props;

    return (
        <div className="w-screen flex justify-center">
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