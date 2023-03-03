import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
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