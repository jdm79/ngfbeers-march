import { getAllBlogs } from "@/blog";
import BlogsList from "@/components/blog/blog-list";
import DefaultLayout from "@/components/DefaultLayout";

const BlogsPage = () => {
    const blogs = getAllBlogs();
    
    return (
        <DefaultLayout>
            <h1 className="w-screen flex p-5 justify-center" >Blogs Page</h1>
            <BlogsList items={blogs}/>
        </DefaultLayout>                
    )
}

export default BlogsPage;