import React from "react";

const Link = ({ platform, link }) => {
  let icon = "";
  let alt = "";
  let bgColor = "";

  switch (platform) {
    case "Github":
      icon = "./github.svg";
      alt = "github";
      bgColor = "bg-[#191919]";
      break;
    case "Twitter":
      icon = "./twitter.svg";
      alt = "twitter";
      bgColor = "bg-[#42B6E8]";
      break;
    case "LinkedIn":
      icon = "./linkedin.svg";
      alt = "linkedin";
      bgColor = "bg-[#2D68FF]";
      break;
    case "YouTube":
      icon = "./youtube.svg";
      alt = "youtube";
      bgColor = "bg-[#EE3838]";
      break;
    case "Facebook":
      icon = "./facebook.svg";
      alt = "facebook";
      bgColor = "bg-[#2341AC]";
      break;
    case "Twitch":
      icon = "./twitch.svg";
      alt = "twitch";
      bgColor = "bg-[#EE3FC7]";
      break;
    case "Dev.to":
      icon = "./devTo.svg";
      alt = "devTo";
      bgColor = "bg-[#333]";
      break;
    case "Codewars":
      icon = "./codewars.svg";
      alt = "codewars";
      bgColor = "bg-[#8A1A50]";
      break;
    case "freeCodeCamp":
      icon = "./freeCodeCamp.svg";
      alt = "freeCodeCamp";
      bgColor = "bg-[#2F2167]";
      break;
    case "GitLab":
      icon = "./gitlab.svg";
      alt = "gitlab";
      bgColor = "bg-[#EA4825]";
      break;
    case "Hashnode":
      icon = "./hashnode.svg";
      alt = "hashnode";
      bgColor = "bg-[#0230D1]";
      break;
    case "Stack Overflow":
      icon = "./stackoverflow.svg";
      alt = "stackoverflow";
      bgColor = "bg-[#EB7100]";
      break;
      default:
        icon = "./link-ico.svg";
        alt = "link";
        bgColor = "bg-[#191919]";
  }

  return (
    <div
      className={`self-stretch h-11 rounded-xl flex items-center justify-start px-4 gap-5 mb-2 ${bgColor}`}
    >
      <img src={icon} alt={alt} />
      <a href={link} className="text-white body-M" target="_blank" rel="noopener noreferrer">
        {platform}
      </a>
    </div>
  );
};

export default Link;
