import { getAllCategories, getLatestPosts } from "@/lib/sanity/api";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadSidebarData() {
      try {
        const [nextCategories, nextPosts] = await Promise.all([
          getAllCategories(),
          getLatestPosts(),
        ]);
        if (!cancelled) {
          setCategories(nextCategories);
          setRecentPosts(nextPosts);
        }
      } catch {
        if (!cancelled) {
          setCategories([]);
          setRecentPosts([]);
        }
      }
    }

    loadSidebarData();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
        <div className="= -sm position-relative pb-3 mb-4">
          <h3 className="mb-0">Categories</h3>
        </div>
        <div className="link-animated d-flex flex-column justify-content-start">
          {categories?.map((item, ind) => (
            <Link
              key={item._id || ind}
              className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
              href={`/blog?category=${item?.description}`}
            >
              <i className="bi bi-arrow-right me-2"></i>
              {item?.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className=" -sm position-relative pb-3 mb-4">
          <h3 className="mb-0">Recent Posts</h3>
        </div>
        {recentPosts?.map((item, ind) => (
          <Link
            href={`/blog/${item?.slug?.current}`}
            key={item._id || ind}
            className="flex items-center rounded bg-[#FAF5E2] hover:text-pr overflow-hidden mb-3"
          >
            <Image
              width={500}
              height={500}
              alt={item?.title || "Recent post"}
              src={item?.mainImage}
              className="img-fluid object-cover"
              style={{ width: "100px", height: "100px" }}
            />

            <p className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">
              {item?.title}
            </p>
          </Link>
        ))}
      </div>

      <div className="wow slideInUp" data-wow-delay="0.1s">
        <div className=" -sm position-relative pb-3 mb-4">
          <h3 className="mb-0">Description</h3>
        </div>
        <div className="bg-light text-center p-[30px]">
          <p>
            We provide all the service that you learn here. <br /> Let&apos;s
            build a best product together.{" "}
          </p>
          <a
            href="https://calendly.com/d/5cz-73r-4nv"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary py-2 px-4 mt-4"
          >
            Schedule a Meeting
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
