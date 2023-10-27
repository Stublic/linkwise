"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = ({ activeTab, onTabChange }) => {
  return (
        <div className="m-8 rounded-xl flex justify-between items-center p-8 bg-white shadow">
      <div className="flex justify-start items-center  h-[60px]">
        <Image width={45} height={45} src="/logo.svg" alt="linkwise" />
        <h1
          className="text-zinc-800
                      text-[40px]
                      font-bold
                      font-['Arial']
                      leading-[60px]
                      hidden
                      md:inline-flex
                      pl-2"
        >
          Linkwise
        </h1>
      </div>
      <div className="flex">
        <button
          className={` flex py-3 px-5 mx-2 rounded-md heading-S ${
            activeTab === "Links"
              ? "bg-[#E9F0A6] text-[#C6D752]"
              : "bg-none text-[#737373]"
          }`}
          onClick={() => onTabChange("Links")}
        >
          {activeTab === "Links" ? (
            <Image width={25} height={25} src="/link-green.svg" alt="" className="px-1" />
          ) : (
            <Image width={25} height={25} src="/link-ico.svg" alt="" className="px-1" />
          )}

          <span className="hidden sm:inline-flex">Links</span>
        </button>
        <button
          className={`flex py-3 px-5  mx-2 rounded-md heading-S ${
            activeTab === "Profile"
              ? "bg-[#E9F0A6] text-[#C6D752]"
              : "bg-none text-[#737373]"
          }`}
          onClick={() => onTabChange("Profile")}
        >
          {activeTab === "Profile" ? (
            <Image width={25} height={25} src="/user-circle-green.svg" alt="" className="px-1" />
          ) : (
            <Image width={25} height={25} src="/user-circle.svg" alt="" className="px-1" />
          )}
          <span className="hidden sm:inline-flex">Profile</span>
        </button>
      </div>
      <Link
        href="/preview"
        className="py-3 px-5  heading-S text-[#C6D752] border-[2px] rounded-md border-[#C6D752]  hover:bg-[#E9F0A6] hover:text-[#C6D752] "
      >
        <span className="hidden sm:inline-flex">Preview</span>
        <Image width={25} height={25}
          src="/preview-eye.svg"
          alt="preview"
          className="px-1 inline-flex sm:hidden"
        />
      </Link>
    </div>
  );
};

export default Nav;
