import CompanyThumbnail from "./company-thumbnail";

function CompaniesThumbnailList(props) {
    const { items } = props;

    return (
        <div className="w-screen flex justify-center">
            <ul>
                {items.map((company) => (
                    <CompanyThumbnail
                        key={company.id}
                        id={company.id}
                        image={company.image}
                        title={company.title}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CompaniesThumbnailList;