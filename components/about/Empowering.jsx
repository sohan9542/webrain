import Image from "next/image";
import React, { useState } from "react";

const Empower = () => {
  const [hoverActive, setHoverActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleMouseLeave = () => {
    if (clicked) {
      setClicked(false);
    }
  };
  return (
    <div className="  grid grid-cols-1 lg:grid-cols-5">
         <div className="lg:col-span-2 relative p-[16px] lg:p-[40px] bg-[#FAF5E2]">
        <div className="relative z-20">
          <h1 className="text-txt onest text-[40px] lg:text-[48px] font-[500] leading-[40px] lg:leading-[48px]">
            Empowering Student Entrepreneurs
          </h1>
          <p className="text-[18px] text-txt mt-[24px] leading-[24px]">
          You can build your start-up full time, leveraging networks in the US and EU, whilst obtaining a master's degree. no need to wait for years of experience. With us, your transformation from student to entrepreneur begins today.
          </p>
        </div>
        <div className="absolute hidden lg:block top-2 left-2 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path
              d="M9.8152 0L56 9.81796L46.1847 56L0 46.182L9.8152 0Z"
              fill="#EDE5C4"
            />
          </svg>
        </div>
        <div className="absolute  lg:hidden top-0 right-2 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="233"
            height="145"
            viewBox="0 0 233 145"
            fill="none"
          >
            <path
              d="M53.1072 -158L303 -104.878L249.892 145L0 91.8778L53.1072 -158Z"
              fill="#EDE5C4"
            />
          </svg>
        </div>
        <div className=" lg:absolute mt-[24px] lg:mt-0 wtkwu w-full lg:w-auto right-[24px] z-30 bottom-[24px]">
          <button
            onMouseOver={() => setHoverActive(true)}
            onMouseOut={() => setHoverActive(false)}
            onMouseDown={handleClick}
            onMouseUp={handleMouseLeave}
            className={`flex justify-center w-full border-[1px] lg:w-auto wtkwu uppercase items-center gap-2 px-[24px] py-[12px]    ${clicked ? 'text-[#FCFAF2] bg-[#0B2217] border-[#0B2217]': 'text-[#193E2C] border-[#193E2C] hover:bg-[#193E2C] hover:text-white'}`}
          >
            Want to know why us?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.477 9.16658L9.00698 4.69657L10.1855 3.51807L16.6673 9.99992L10.1855 16.4817L9.00698 15.3032L13.477 10.8332H3.33398V9.16658H13.477Z"
                fill={hoverActive ? "#fff" : "#193E2C"}
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:col-span-3">
        <Image
          alt="logo"
          src={"/img/carousel-1.jpg"}
          width={800}
          height={550}
          className="w-full object-cover h-[275px] lg:h-[550px]"
        />
      </div>
     
    </div>
  );
};

export default Empower;
