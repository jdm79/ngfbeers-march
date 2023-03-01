import Link from "next/link";

const HomePage = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link href="/companies">Companies</Link>
          </li>
          <li>
            <Link href="/blog">Blog Posts</Link>
          </li>
        </ul>
    </div>
  )
}

export default HomePage;
