import { getFaqById } from "../../faq";
import DefaultLayout from "@/components/DefaultLayout";
import { useRouter } from "next/router";

function FaqDetailPage() {
  const router = useRouter();

  const faqId = router.query.faqId;
  const faq = getFaqById(faqId);

  if(!faq) {
    return <p>No FAQ found</p>
  }

  return (
    <DefaultLayout>
      <div>
        <h1>{faq.title}</h1>
        <h1>{faq.subheading}</h1>
        <p>{faq.body}</p>
      </div>
    </DefaultLayout>

  )
}

export default FaqDetailPage