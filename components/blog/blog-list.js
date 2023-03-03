import BlogItem from "./blog-item";

function BlogList(props) {
    const { items } = props;

    return (
        <div className="w-screen flex justify-center">
            <ul>
                {items.map((blog) => (
                    <BlogItem 
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        subheading={blog.subheading}
                        body={blog.body}
                    />
                ))}
            </ul>
        </div>
    )
}

export default BlogList