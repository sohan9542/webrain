import Image from "next/image";
import React from "react";
import BlogComponent from "../blog/BlogComponent";

const BlogSection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className=" text-center position-relative pb-3 mb-5 mx-auto"
          style={{maxWidth:'600px'}}
        //   style="max-width: 600px;"
        >
          <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
          <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
   <BlogComponent/>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
