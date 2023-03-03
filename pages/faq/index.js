import { getAllFaqs } from "@/faq";
import FaqsList from "@/components/faq/faq-list";
import DefaultLayout from "@/components/DefaultLayout";

const FaqsPage = () => {
    const faqs = getAllFaqs();
    
    return (
        <DefaultLayout>
            <h1 className="w-screen flex p-5 justify-center border-b-2 border-black" >Faqs Page</h1>
            <FaqsList items={faqs}/>
        </DefaultLayout>                
    )
}

export default FaqsPage;