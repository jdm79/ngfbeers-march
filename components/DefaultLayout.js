import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ThumbnailRow from "./ThumbnailRow";
import { getAllCompanies } from "@/companies";
import Banner from "./Banner";

const DefaultLayout = ({ children }) => {
    const companies = getAllCompanies();
    return (
        <>
            <Header />
            <Nav />
            {children}
            <Footer />
        </>
    )
};

export default DefaultLayout;