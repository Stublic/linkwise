"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "@/components/Link";
import { Alert } from "flowbite-react";

const Preview = () => {
  const [links, setLinks] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    // Load links from local storage when the component mounts
    const storedLinks = JSON.parse(localStorage.getItem("links"));
    if (storedLinks) {
      setLinks(storedLinks);
    }

    // Load user details from local storage when the component mounts
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedEmail = localStorage.getItem("email");

    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleCopyToClipboard = () => {
    const shareURL = window.location.href; // Get the current URL
    navigator.clipboard
      .writeText(shareURL) // Copy URL to clipboard
      .then(() => {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy to clipboard: ", error);
      });
  };

  return (
    <div className="min-h-[100vh] bg-[#FAFAFA] relative">
      <div className=" min-h-[40vh] pt-8 bg-[#C6D752] rounded-b-3xl">
        <nav className="m-8 rounded-xl flex justify-between items-center p-8 bg-white shadow">
          <Link
            href="/protected"
            className="py-3 px-5  heading-S text-[#C6D752] border-[2px] rounded-md border-[#C6D752]  hover:bg-[#E9F0A6] hover:text-[#C6D752] "
          >
            Back to Editor
          </Link>
          <button
            className="py-3 px-5  heading-S  border-[2px] rounded-md border-[#C6D752]  bg-[#C6D752] text-[#FAFAFA]"
            onClick={handleCopyToClipboard}
          >
            Share Link
          </button>
        </nav>
      </div>
      <div className=" rounded-xl w-[349px] max-w-[349px] bg-white flex flex-col justify-center items-center p-8 shadow absolute left-1/2 -translate-x-1/2 top-1/3">
        <Image
          width={155}
          height={155}
          src="/profile-pic.png"
          className=" rounded-full border-[2px] border-[#C6D752]"
        />
        <span className="heading-M text-[#333]">
          {firstName} {lastName}
        </span>
        <span className="body-M text-[#737373] py-4">{email}</span>
        <div className="self-stretch h-full flex-col justify-start items-start gap-2 flex my-8">
          {links.map((link, index) => (
            <Links key={index} platform={link.platform} link={link.link} />
          ))}
        </div>
      </div>
      {copy && (
        <div className="absolute bottom-5  left-1/2 -translate-x-1/2">
          <div
            id="toast-simple"
            class="flex items-center w-full max-w-md p-4 space-x-4 text-gray-500 bg-[#333333] rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
            role="alert"
          >
            <Image width={30} height={30} src="/link-ico.svg" alt="link" className="px-1" />
            <div class="heading-S text-[#FAFAFA]">
            The link has been copied to your clipboard!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
