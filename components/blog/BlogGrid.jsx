import React, { useEffect, useState } from "react";
import BlogComponent from "./BlogComponent";
import { getAllPosts } from "@/lib/sanity/api";
import BlogSidebar from "./BlogSidebar";

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const nextPosts = await getAllPosts();
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
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className=" lg:col-span-2">
            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
              {posts?.map((item) => (
                <BlogComponent key={item._id || item.slug?.current} item={item} />
              ))}
            </div>
          </div>

          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;