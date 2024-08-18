import Link from "next/link";
import blogs from "./data/blogs.json";
import Image from "next/image";

const BlogList = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
            <Image src={blog.image} alt={blog.title} width={500} height={300} />
            <h2 className="text-2xl font-bold mt-4">{blog.title}</h2>
            <p className="mt-2 text-gray-700">
              {blog.content.substring(0, 100)}...
            </p>
            <Link
              href={`/blog/${blog.id}`}
              className="mt-4 text-[#BD2720] font-bold"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
