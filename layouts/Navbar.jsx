"use client";
import React from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  return (
    <div className=" bg-dark fixed left-0 w-full z-50 px-5 flex items-center justify-between  ">
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
      <div className="flex items-center gap-3">
        <ActiveLink href={"/"} children={"Home"} />
       
        <ActiveLink href={"/about"} children={"About"} />
        <ActiveLink href={"/services"} children={"Services"} />
        <ActiveLink href={"/blogs"} children={"Blog"} />
        <ActiveLink href={"/contact"} children={"Contact"} />
      </div>
      <div className="flex items-center gap-2">
        <a
          className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <i className="fa fa-envelope-open -ml-[1px] "></i>
        </a>
        <a
          className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <i className="fa fa-phone-alt me-2"></i>
        </a>
        <a
          className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <i className="fab fa-linkedin-in fw-normal"></i>
        </a>
        <a
          className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
          href=""
        >
          <i className="fab fa-instagram fw-normal"></i>
        </a>
        <a
          className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
          href=""
        >
          <i className="fab -ml-[2px] fa-youtube fw-normal"></i>
        </a>
      </div>
    </div>
  );
};

const ActiveLink = ({ children, ...rest }) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    // you get a global isActive class name, it is better than
    // nothing, but it means you do not have scoping ability in
    // certain cases
    <Link
      {...rest}
      className={
        isActive
          ? "text-pr px-2 py-3 border-b-2 border-b-pr hover:text-secondary hover:border-b-secondary"
          : "px-2 py-3 text-[#FCFAF2] hover:text-pr border-b-2 border-b-transparent hover:border-b-2 hover:border-b-pr"
      }
    >
      {children}
    </Link>
  );
};

export default Navbar;
