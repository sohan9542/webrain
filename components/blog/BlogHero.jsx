import React, { useState } from "react";
import Image from "next/image";
const BlogHero = () => {

  return (
    <div className=" bg-dark min-h-[600px] pt-[61px]   w-full">
    <div className="  w-full relative">
        <div className="relative  h-[300px] lg:h-[320px]">
      
        <Image
            width={2500}
            alt=""
            height={2500}
            className="  w-full h-full object-center object-cover "
            src={"/img/blog.jpg"}
          />
        </div>

        </div>
        <div className="mt-[60px] px-[16px] lg:px-[40px] w-full">
          <h1 className="uppercase text-center leading-[44px] lg:leading-[64px] font-[500] onest text-[#FCFAF2] text-[46px] lg:text-[70px]">
        Our Blogs
          </h1>
          <p className="text-center text-[18px] pt-[8px] leading-[24px] lg:leading-[32px]  lg:text-[24px] text-[#FCFAF2]">
          Know Everything To Build A Best Platform For Your Customers.
          </p>
      
          {/* <div className="flex pt-[24px] flex-col lg:flex-row items-center justify-center gap-[16px]">
            <button
              onMouseDown={() => setClicked(true)}
              // onMouseLeave={() => setClicked(false)}
              onMouseUp={() => setClicked(false)}
              className={`text-[#FCFAF2] wtkwu uppercase ${
                !clicked
                  ? "hover:bg-[#FCFAF2] hover:text-[#193E2C]"
                  : "bg-[#E0DBC9] text-[#193E2C]"
              } font-[500] border  border-[#FCFAF2] text-[16px] w-full lg:w-auto px-[24px] py-[12px]`}
            >
              Explore our programs
            </button>
            <a
              target="_blank"
              href={"https://calendly.com/ges-guglielmo/30min?month=2023-11"}
              onMouseDown={() => setClicked2(true)}
              onMouseUp={() => setClicked2(false)}
              className={`text-[#FCFAF2] wtkwu uppercase ${
                !clicked2 ? "hover:bg-[#5FD528]" : "bg-[#38970A]"
              } border-[1px] bg-[#43AA13] border-[#43AA13] hover:text-white text-[16px] flex items-center justify-center gap-2 w-full lg:w-auto px-[64px] py-[12px]`}
            >
              Apply now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z"
                  fill="#FCFAF2"
                />
              </svg>
            </a>
          </div> */}
        </div>
    </div>
  );
};

export default BlogHero;
