"use client";
import React, { useState } from "react";

import Image from "next/image";

const AddLinkForm = ({ onAddLink, title, index, onRemove  }) => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLink(platform, link, index);
    setPlatform(platform);
  };

  return (
    <div className="p-8 bg-[#FAFAFA] rounded-xl shadow my-6" draggable>
      <div className="flex justify-start items-center cursor-pointer mb-3">
        <div className="w-3 h-2 flex-col justify-center items-center gap-1 flex px-2">
          <span className="w-3 h-4 bg-[#a0a0a0]" />
          <span className="w-3 h-4 bg-[#a0a0a0]" />
        </div>
        <h4 className="text-[#737373] text-base font-bold font-['Instrument Sans'] leading-normal pl-3">
          {title}
        </h4>
        <button onClick={() => onRemove(index)} className="text-red-500 ml-auto">
  Remove
</button>
      </div>

      <form>
        <div className="flex flex-col">
          <label htmlFor="select" className="body-S text-[#333] pl-1">
            Platform
          </label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full py-3 border-[2px] border-[#D9D9D9] rounded-xl px-6"
          >
            <option>Choose platform</option>
            <option value="Github">Github</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitch">Twitch</option>
            <option value="Dev.to">Dev.to</option>
            <option value="Codewars">Codewars</option>
            <option value="freeCodeCamp">freeCodeCamp</option>
            <option value="GitLab">GitLab</option>
            <option value="Hashnode">Hashnode</option>
            <option value="Stack Overflow">Stack Overflow</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="input" className="body-S text-[#333] pl-1">
            Link
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2"><Image width={20} height={20} src="/link-ico.svg" alt="link" /></span>
          <input
            type="url"
            value={link}
            onInput={(e) => setLink(e.target.value)}
            onChange={handleSubmit}
            placeholder="Paste your link here"
            className="w-full py-3 border-[2px] border-[#D9D9D9] rounded-xl pl-8"
          />
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default AddLinkForm;
