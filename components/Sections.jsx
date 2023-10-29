import React from "react";
import Links from "@/components/Link";

const LeftSection = ({ links }) => (
  <div className="hidden md:inline-flex h-full min-h-[75vh] w-2/5 p-2 mx-8 my-2 rounded-xl bg-white shadow justify-center items-center gap-8 ">
    <div className="h-[70vh] flex flex-col justify-between items-center w-80 bg-[url('/mobile.png')] bg-center bg-no-repeat bg-auto">
      <div className="flex-col justify-start items-center gap-6 flex my-12 pt-2">
        <div className="w-24 h-24 bg-[#EEE] rounded-full" />
        <div className="flex-col justify-start items-center gap-3 flex">
          <div className="w-40 h-4 bg-[#EEE] rounded-full" />
          <div className="w-16 h-2 bg-[#EEE] rounded-full" />
        </div>
      </div>
      <div className="self-stretch h-full flex-col justify-start items-start gap-5 flexm px-10">
        {links <= 0 ? (
          <div className="self-stretch h-full flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch h-11 bg-[#EEE] rounded-lg animate-pulse" />
            <div className="self-stretch h-11 bg-[#EEE] rounded-lg animate-pulse" />
            <div className="self-stretch h-11 bg-[#EEE] rounded-lg animate-pulse" />
          </div>
        ) : (
          links.map((link, index) => (
            <Links key={index} platform={link.platform} link={link.link} />
          ))
        )}
      </div>
    </div>
  </div>
);

const RightSection = ({ renderTabBody }) => (
  <div className="md:w-3/5 sm:w-full rounded-xl my-2 mx-8 p-4 shadow bg-white">
    {renderTabBody()}
  </div>
);

export { LeftSection, RightSection };
