import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ThumbnailRow from "./ThumbnailRow";
import { getAllCompanies } from "@/companies";

const DefaultLayout = ({ children }) => {
    const companies = getAllCompanies();
    return (
        <>
            <Header />
            <Nav />
            <ThumbnailRow items={companies} />
            {children}
            <Footer />
        </>
    )
};

export default DefaultLayout;