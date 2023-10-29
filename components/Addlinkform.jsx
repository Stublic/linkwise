import React, { useState, useEffect } from "react";
import Image from "next/image";

const AddLinkForm = ({ onAddLink, title, index, onRemove }) => {
  const [platform, setPlatform] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const saveToLocalStorage = (data) => {
    localStorage.setItem("linkData", JSON.stringify(data));
  };
  
  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem("linkData");
    return storedData ? JSON.parse(storedData) : [];
  };

  const handleRemove = () => {
    // Remove the linkData for the given index
    const updatedData = loadFromLocalStorage();
    updatedData.splice(index, 1); // Remove the data at the given index
    saveToLocalStorage(updatedData);

    // Call the onRemove function
    onRemove(index);
  };

    const handleBlur = () => {
      validateLink();
    };
  
    const validateLink = () => {
      if (!platform) {
        setError("Please select a platform.");
        clearErrorAfterDelay();
        return;
      }
  
      // Regular expression pattern to validate URLs
      const urlPattern = /^(https?:\/\/)?([\w\d.-]+)\.([a-z.]{2,6})([/\w\d.-]*)*\/?$/;
  
      // Check if the entered link is a valid URL
      if (!link.match(urlPattern)) {
        setError("Please enter a valid URL.");
        clearErrorAfterDelay();
        return;
      }
  
      // Check if the platform name is included in the link
      if (!link.toLowerCase().includes(platform.toLowerCase())) {
        setError(`The link must contain the platform name "${platform}".`);
        clearErrorAfterDelay();
        return;
      }
  
          // Check for duplicate entries
    const updatedData = loadFromLocalStorage();
    const isDuplicate = updatedData.some(
      (entry, i) => entry.platform === platform || entry.link === link
    );

    if (isDuplicate) {
      
      setError("This platform or link is already added.");
      clearErrorAfterDelay();
      return;
    }
      // If all validation passes, clear the error

      setError("");
      onAddLink(platform, link, index);
      setPlatform(platform);
      setLink(link);

      updatedData[index] = { platform, link };
      saveToLocalStorage(updatedData);
    };

    const clearErrorAfterDelay = () => {
      setTimeout(() => {
        setError("");
      }, 2000); // Clear the error message after 2 seconds (2000 milliseconds)
    };

    useEffect(() => {
      // Load data from local storage on component mount
      const data = loadFromLocalStorage();
      if (data.length > 0) {
        setPlatform(data[index]?.platform || "");
        setLink(data[index]?.link || "");
      }
    }, [index]);
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
        <button onClick={handleRemove} className="text-[#a0a0a0] ml-auto">
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
            onBlur={handleBlur}
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
            <option value="StackOverflow">Stack Overflow</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="input" className="body-S text-[#333] pl-1">
            Link
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Image width={20} height={20} src="/link-ico.svg" alt="link" />
            </span>
            <input
              type="url"
              value={link}
              onBlur={handleBlur}
              onChange={(e) => setLink(e.target.value)}
              
              placeholder="Paste your link here"
              className="w-full py-3 border-[2px] border-[#D9D9D9] rounded-xl pl-8"
            />
          </div>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        {/* <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white rounded-lg py-2">
          Save
        </button> */}
      </form>
    </div>
  );
};

export default AddLinkForm;
