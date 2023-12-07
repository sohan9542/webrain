import React, { useState, useEffect } from "react";
import BlogComponent from "../blog/BlogComponent";
import { get__latest__post } from "@/sanity/api";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function get__new__post() {
      const posts = await get__latest__post();
      setPosts(posts);
    }
    get__new__post();
  }, []);
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className=" text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
          //   style="max-width: 600px;"
        >
          <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 className="mb-0">What's Best For Your Platform?</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          {posts.map((item, ind) => (
            <BlogComponent key={ind} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
