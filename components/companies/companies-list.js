import CompanyItem from "./company-item";

function CompaniesList(props) {
    const { items } = props;

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="w-48 h-6 mx-auto rounded-lg">
                    Click on the companies below to find out more
                </h1>
               
                <ul className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                {items.map((company) => (
                    <CompanyItem 
                        key={company.id}
                        id={company.id}
                        image={company.image}
                        title={company.title}
                        location={company.location}
                        beers={company.beers}
                    />
                ))}
                </ul>
            </div>
        </section>                 
    )
}

export default CompaniesList

