"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortableText from "react-portable-text";
import { getPostBySlug } from "@/lib/sanity/api";
import { useParams } from "next/navigation";
import BlogSidebar from "@/components/blog/BlogSidebar";

const SingleBlog = () => {
  const { blogid } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      try {
        const post = await getPostBySlug(blogid);
        if (!cancelled) setPosts(post);
      } catch {
        if (!cancelled) setPosts(null);
      }
    }

    if (blogid) {
      loadPost();
    }

    return () => {
      cancelled = true;
    };
  }, [blogid]);

  return (
    <div className="min-h-screen w-full relative">
      <Navbar />
      <div className="container ">
        <div className=" w-full pt-[80px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          <div className="lg:col-span-2">
            <div className="mb-5 custom_div">
              {posts && (
                <PortableText
                  content={posts?.content}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  serializers={{
                    h1: (props) => <h1 {...props} />,
                    h2: (props) => <h2 className="mt-[30px] mb-3" {...props} />,
                    normal: (props) => <p className="my-[6px]" {...props} />,
                    li: ({ children }) => (
                      <li className="my-[3px]">{children}</li>
                    ),
                  }}
                />
              )}
            </div>
          </div>

          <BlogSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
