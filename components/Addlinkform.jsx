"use client";
import React, { useState } from "react";

const AddLinkForm = ({ onAddLink, title }) => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLink(platform, link);
    setPlatform(platform);
    setLink(link);
  };

  return (
    <div className="p-8 bg-[#FAFAFA] rounded-xl shadow my-6">
      <div className="flex justify-start items-start">
        <div className="w-3 h-1.5 flex-col justify-center items-center gap-1 inline-flex pr-2">
          <span className="w-3 h-px bg-[#737373]" />
          <span className="w-3 h-px bg-[#737373]" />
        </div>
        <h4 className="text-[#737373] text-base font-bold font-['Instrument Sans'] leading-normal">
          {title}
        </h4>
      </div>

      <form>
        <div className="flex flex-col">
          <label htmlFor="select" className="body-S text-[#333]">
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
        <div className="flex flex-col">
          <label htmlFor="input" className="body-S text-[#333]">
            Link
          </label>
          <input
            type="url"
            value={link}
            onInput={(e) => setLink(e.target.value)}
            onChange={handleSubmit}
            placeholder="Paste your link here"
            className="w-full py-3 border-[2px] border-[#D9D9D9] rounded-xl px-6"
          />
        </div>
      </form>
    </div>
  );
};

export default AddLinkForm;
