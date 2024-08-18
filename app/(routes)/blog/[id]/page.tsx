"use client";
import { useParams } from "next/navigation";
import blogs from "../data/blogs.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <Button className="font-semibold bg-[#BD2720] text-white hover:text-black hover:bg-[#FD542B] rounded-3xl" >
         <Link href="/blog" className="text-white hover:text-black font-semibold p-2">Back to Blog</Link>
        </Button>
      </div>
      <div className="mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-3xl"
        />
      </div>
      <div className="text-lg leading-relaxed text-black">
        {Array.isArray(blog.content) ? (
          blog.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <p>{blog.content}</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
