import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ServiceHero = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  return (
    <div className=" bg-dark min-h-[700px]    w-full">
    <div className="  w-full pt-[81px] relative">
        <div className="relative -mt-5 h-[300px] lg:h-[320px]">
      
        <Image
            width={2500}
            alt=""
            height={2500}
            className="  w-full h-full object-center object-cover "
            src={"/img/service.jpg"}
          />
        </div>

        </div>
        <div className="mt-[50px] px-[16px] lg:px-[40px] w-full">
          <h1 className="uppercase text-center leading-[44px] lg:leading-[64px] font-[500] onest text-[#FCFAF2] text-[46px] lg:text-[70px]">
        Our Services
          </h1>
          <p className="text-center text-[18px] pt-[8px] leading-[24px] lg:leading-[32px]  lg:text-[24px] text-[#FCFAF2]">
          We believe in the power of innovation and strive to deliver exceptional web solutions that <br className="hidden lg:block"/> empower businesses to thrive in the digital age. 
          </p>
      
          <div className="flex pt-[24px] flex-col lg:flex-row items-center justify-center gap-[16px]">
            <Link
            href={'/blogs'}
              onMouseDown={() => setClicked(true)}
              // onMouseLeave={() => setClicked(false)}
              onMouseUp={() => setClicked(false)}
              className={`text-[#FCFAF2] wtkwu uppercase ${
                !clicked
                  ? "hover:bg-[#FCFAF2] hover:text-[#193E2C]"
                  : "bg-[#E0DBC9] text-[#193E2C]"
              } font-[500] border  border-[#FCFAF2] text-[16px] w-full lg:w-auto px-[24px] py-[12px]`}
            >
              Explore our blogs
            </Link>
            <a
              target="_blank"
              href={"https://calendly.com/d/5cz-73r-4nv"}
              onMouseDown={() => setClicked2(true)}
              onMouseUp={() => setClicked2(false)}
              className={`text-[#FCFAF2] wtkwu uppercase ${
                !clicked2 ? "hover:bg-[#5FD528]" : "bg-[#38970A]"
              } border-[1px] bg-[#43AA13] border-[#43AA13] hover:text-white text-[16px] flex items-center justify-center gap-2 w-full lg:w-auto px-[64px] py-[12px]`}
            >
              GET IN TOUCH
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
          </div>
        </div>
    </div>
  );
};

export default ServiceHero;
