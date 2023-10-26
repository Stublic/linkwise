"use client";
import React, { useState } from "react";
import Links from "@/components/Link";
import AddLinkForm from "@/components/AddLinkForm";
import NavBar from "@/components/Nav";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [activeTab, setActiveTab] = useState("Links");
  const [linkComponents, setLinkComponents] = useState(["Link #1"])
  const [linkNames, setLinkNames] = useState(['Link #2', 'Link #3', 'Link #4', 'Link #5'])

  const addLink = (platform, link) => {
    const newLink = { platform, link };
    setLinks([...links, newLink]);
  };

  const addLinkComponent = () =>{
    if (linkNames.length > 0) { 
      
      setLinkComponents([...linkComponents, linkNames[0]]);
      linkNames.splice(0, 1);
      
    } else { 
      
      window.alert("Maximum number of links added!");
      
    } 
  }

  const renderTabBody = () => {
    if (activeTab === "Links") {
      return (
        <div className="p-6">
          <h2 className="heading-M text-[#333]">Customize your links</h2>
          <p className="body-M text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
          <button onClick={addLinkComponent} className="text-[#C6D752] border-[2px] border-[#C6D752] w-full rounded-lg shadow-sm py-3 my-8 hover:bg-[#E9F0A6] hover:text-[#C6D752]">+ Add new link</button>
          <div>
            {linkComponents.map((title, i) => ( <AddLinkForm onAddLink={addLink} title={title} /> ))}
          </div>
          
        </div>
      );
    } else if (activeTab === "Profile") {
      // You can create a Profile tab with profile settings here
      return (
        <div className="">
          <h2>Profile Tab</h2>
          {/* Add profile settings components here */}
        </div>
      );
    }
  };

  return (
    <div className="bg-[#FAFAFA]">
      <NavBar activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />
      <div className="flex">
        <div className="hidden md:inline-flex h-full min-h-[75vh] w-2/5 p-2 mx-8 my-2 rounded-xl bg-white shadow justify-center items-center gap-8 ">
          <div className="h-[70vh] flex flex-col justify-between items-center w-80 bg-[url('/mobile.png')] bg-center bg-no-repeat bg-auto">
              <div className="flex-col justify-start items-center gap-6 flex my-12 pt-2">
                <div className="w-24 h-24 bg-[#737373] rounded-full" />
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="w-40 h-4 bg-[#737373] rounded-full" />
                  <div className="w-16 h-2 bg-[#737373] rounded-full" />
                </div>
              </div>
              <div className=" self-stretch h-full flex-col justify-start items-start gap-5 flexm px-10">
                
                {
                links<=0 ? (
                  <div className=" self-stretch h-full flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch h-11 bg-[#737373] rounded-lg" />
                  <div className="self-stretch h-11 bg-[#737373] rounded-lg" />
                  <div className="self-stretch h-11 bg-[#737373] rounded-lg" />
                  </div>
                ) : (
                  links.map((link, index) => (
                  <Links
                    key={index}
                    platform={link.platform}
                    link={link.link}
                  />
                ))
                )
                
                
                }
              </div>
          </div>
        </div>
        <div className="md:w-3/5 sm:w-full sm:ml-8 rounded-xl my-2 mr-8 p-4 shadow bg-white">
          {renderTabBody()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
