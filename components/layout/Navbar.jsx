"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="relative w-full">
      <div className=" bg-dark fixed py-[6px] lg:py-[0px] left-0 w-full z-50 px-3 lg:px-5 flex items-center justify-between  ">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              width={700}
              height={700}
              className="w-[180px]"
              alt=""
              src={"/logo.png"}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/services">Services</ActiveLink>
          <ActiveLink href="/blogs">Blog</ActiveLink>
          <ActiveLink href="https://calendly.com/d/5cz-73r-4nv" schedule>
            Schedule Meeting
          </ActiveLink>
        </div>
        <div className="lg:hidden">
          <i onClick={() => setToggle(true)} className="fa fa-bars  cursor-pointer text-[30px]  text-white -ml-[1px] "></i>
        </div>
        <div className=" hidden lg:flex items-center gap-2">
        </div>
      </div>
      {toggle && <div className="lg:hidden fixed flex flex-col h-full items-center justify-between top-0 py-[6px] px-3 left-0 w-full min-h-screen bg-dark z-[99]">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                width={100}
                height={100}
                className="w-[180px]"
                alt=""
                src={"/logo.svg"}
              />
            </Link>
          </div>
          <i onClick={() => setToggle(false)} className="fa fa-times   cursor-pointer text-[30px]  text-white -ml-[1px] "></i>
        </div>
        <div className="flex items-center flex-col">
          <ActiveLinkMobile href="/">Home</ActiveLinkMobile>
          <ActiveLinkMobile href="/about">About</ActiveLinkMobile>
          <ActiveLinkMobile href="/services">Services</ActiveLinkMobile>
          <ActiveLinkMobile href="/blogs">Blog</ActiveLinkMobile>
          <ActiveLinkMobile href="https://calendly.com/d/5cz-73r-4nv" schedule>
            Schedule Meeting
          </ActiveLinkMobile>
        </div>
        <div className="flex items-center pb-5 gap-2" />
      </div>}
    </div>
  );
};

const ActiveLinkMobile = ({ children, schedule, ...rest }) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    // you get a global isActive class name, it is better than
    // nothing, but it means you do not have scoping ability in
    // certain cases
    <>
      {schedule ? <Link
        {...rest}
        className={
          "px-4 py-2 mt-2 text-[#FCFAF2] hover:text-dark text-[23px] bg-pr border-b-2 border-b-transparent hover:border-b-2 hover:border-b-pr"
        }
      >
        {children}
      </Link> : <Link
        {...rest}
        className={
          isActive
            ? "text-pr px-2 py-3 border-b-2 text-[23px] border-b-pr hover:text-secondary hover:border-b-secondary"
            : "px-2 py-3 text-[#FCFAF2] text-[23px] hover:text-pr border-b-2 border-b-transparent hover:border-b-2 hover:border-b-pr"
        }
      >
        {children}
      </Link>}
    </>
  );
};
const ActiveLink = ({ children, schedule, ...rest }) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    // you get a global isActive class name, it is better than
    // nothing, but it means you do not have scoping ability in
    // certain cases
    <>
      {schedule ? <Link
        {...rest}
        className={
          "px-4 py-2 text-[#FCFAF2] hover:text-dark bg-pr border-b-2 border-b-transparent hover:border-b-2 hover:border-b-pr"
        }
      >
        {children}
      </Link> : <Link
        {...rest}
        className={
          isActive
            ? "text-pr px-2 py-3 border-b-2 border-b-pr hover:text-secondary hover:border-b-secondary"
            : "px-2 py-3 text-[#FCFAF2] hover:text-pr border-b-2 border-b-transparent hover:border-b-2 hover:border-b-pr"
        }
      >
        {children}
      </Link>}
    </>
  );
};

export default Navbar;
