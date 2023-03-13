import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ThumbnailRow from "./ThumbnailRow";
import { getAllCompanies } from "@/companies";
import Banner from "./Banner";

const DefaultLayout = ({ children }) => {
    const companies = getAllCompanies();
    return (
        <div className="font-courier bg-yellow-400">
            <Header />
            <Nav />
            {children}
            {/* <Banner message="Campaigning to make gluten-free beer gluten-free!" /> */}

            <Footer />
        </div>
    )
};

export default DefaultLayout;