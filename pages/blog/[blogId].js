import { getBlogById } from "../../blog";
import DefaultLayout from "@/components/DefaultLayout";
import { useRouter } from "next/router";

function BlogDetailPage() {
  const router = useRouter();

  const blogId = router.query.blogId;
  const blog = getBlogById(blogId);

  if(!blog) {
    return <p>No blog found</p>
  }

  return (
    <DefaultLayout>
      <div>
        <h1>{blog.title}</h1>
        <h1>{blog.subheading}</h1>
        <p>{blog.body}</p>
      </div>
    </DefaultLayout>

  )
}

export default BlogDetailPage