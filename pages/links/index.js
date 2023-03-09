import { getAllLinks } from "@/linkList";
import LinksList from "@/components/links/link-list";
import DefaultLayout from "@/components/DefaultLayout";

const LinksPage = () => {
    const links = getAllLinks();
    
    return (
        <DefaultLayout>
            <h1 className="w-screen flex p-5 justify-center border-b-2 border-black" >Links Page</h1>
            <LinksList items={links}/>
        </DefaultLayout>                
    )
}

export default LinksPage;