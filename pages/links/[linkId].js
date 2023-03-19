import { getLinkById } from "../../linkList";
import DefaultLayout from "@/components/DefaultLayout";
import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";

function LinkDetailPage() {
  const router = useRouter();
  const linkId = router.query.linkId;
  const link = getLinkById(linkId);

  if (!link) {
    return <p>No link found</p>;
  }

  return (
    <DefaultLayout>
      <section className="bg-yellow-400 dark:text-gray-700 px-2">
        <BackButton href="/links" />
        <div className="container flex flex-col px-6 py-6 mx-auto space-y-2 lg:py-4 lg:flex-row lg:items-center bg-white mt-10 mb-10 border border-black">
          <div>
            <div>
              <h1 className="font-bold tracking-wide text-gray-800 text-xl md:text-5xl">
                {link.title}
              </h1>
              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 border border-black p-5 rounded-lg">
                  <span>"{link.blurb}"</span>
                </p>

                <div className="flex items-center -mx-2 bg-yellow-400 w-fit border border-black p-5 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  <a href={link.link_url} target="_blank">
                    Click to read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default LinkDetailPage;
