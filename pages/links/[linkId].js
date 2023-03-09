import { getLinkById } from "../../linkList";
import DefaultLayout from "@/components/DefaultLayout";
import { useRouter } from "next/router";
import Link from 'next/link';

function LinkDetailPage() {
  const router = useRouter();
  const linkId = router.query.linkId;
  const link = getLinkById(linkId);

  if(!link) {
    return <p>No link found</p>
  }

  return (
    <DefaultLayout>
      <section className="bg-white dark:bg-gray-800">
        <Link href="/links" >
          <button className="bg-yellow-400 hover:bg-black text-black font-bold py-2 px-4 rounded my-1 ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          </button>
        </Link>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center">
            <div >
                <div >
                    <h1 className="font-bold tracking-wide text-gray-800 dark:text-white text-xl md:text-5xl">
                        {link.title}
                    </h1>
                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 ">
                          <span>"{link.blurb}"</span>
                        </p>

                        <div className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 text-yellow-400">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                          <a href={link.link_url} target="_blank" className="underline">Click to read more</a>
                        </div>
                        <div className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                       
                          <p>Source: <span className="mx-2">{link.link_type}</span></p>


                        </div>

                        </div> 
                    </div>
                </div>
            </div>
      </section>
    </DefaultLayout>

  )
}
 
export default LinkDetailPage;