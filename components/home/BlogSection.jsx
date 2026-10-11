import React, { useState, useEffect } from "react";
import BlogComponent from "../blog/BlogComponent";
import { getLatestPosts } from "@/lib/sanity/api";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const nextPosts = await getLatestPosts();
        if (!cancelled) setPosts(nextPosts);
      } catch {
        if (!cancelled) setPosts([]);
      }
    }

    loadPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full">
      <div className="px-3 mx-auto lg:container py-5">
        <div
          className=" text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 className="mb-0 text-white">What&apos;s Best For Your Platform?</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          {posts.map((item) => (
            <BlogComponent key={item._id || item.slug?.current} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
