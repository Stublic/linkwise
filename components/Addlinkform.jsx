"use client";
import React, { useState, useRef } from "react";

const AddLinkForm = ({ onAddLink, title }) => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");
  // const [dragLink, setDragLink] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLink(platform, link);
    setPlatform("");
    setLink("");
  };

  return (
    <div className="p-8 bg-[#FAFAFA] rounded-xl shadow my-6" draggable>
      <div className="flex my-4">
        <div className="w-3 h-1.5 flex-col justify-start items-start gap-1 inline-flex pr-2">
          <div className="w-3 h-px bg-neutral-500" />
          <div className="w-3 h-px bg-neutral-500" />
        </div>
        <h4 className="text-[#737373] text-base font-bold font-['Instrument Sans'] leading-normal">{title}</h4>
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

        <input
          type="url"
          value={link}
          onInput={(e) => setLink(e.target.value)}
          onChange={handleSubmit}
          placeholder="Paste your link here"
          className="w-1/2 p-2"
        />
      </form>
    </div>
  );
};

export default AddLinkForm;
