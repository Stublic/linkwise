"use client";
import React, { useState } from "react";
import Links from "@/components/Link";
import AddLinkForm from "@/components/Addlinkform";
import NavBar from "@/components/Nav";
import Image from "next/image";
import LinkCustomization from '@/components/LinkCustomization'
import Profile from '@/components/Profile'

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [activeTab, setActiveTab] = useState("Links");
  const maxLinks = 5;
  const [linkComponents, setLinkComponents] = useState([]);
  const [showAddLinkForm, setShowAddLinkForm] = useState(false);


  const addLink = (platform, link, index) => {
    // Create a new link object
    const newLink = { platform, link };
    
    // Update the links state
    setLinks([...links, newLink]);
    
    // Update the linkComponents state using the index to replace the corresponding title
    const updatedLinkComponents = [...linkComponents];
    updatedLinkComponents[index] = `Link #${index + 1}`;
    setLinkComponents(updatedLinkComponents);
  };

  const addLinkComponent = () => {
   setShowAddLinkForm(true);
    if (linkComponents.length < maxLinks) {
      const newTitle = `Link #${linkComponents.length + 1}`;
       console.log('object');
      setLinkComponents([...linkComponents, newTitle]);
       // Hide the AddLinkForm after adding a new link
    }else{
      alert("Maximum number of links added!")
    }
  };

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    
    const updatedLinkComponents = [...linkComponents];
    updatedLinkComponents.splice(index, 1);
    
    setLinks(updatedLinks);
    setLinkComponents(updatedLinkComponents);
    if(updatedLinkComponents==0){
      setShowAddLinkForm(false);
    }
  };

  const renderTabBody = () => {
    if (activeTab === "Links") {
      return (
        <LinkCustomization
        addLinkComponent={addLinkComponent}
        showAddLinkForm={showAddLinkForm}
        linkComponents={linkComponents}
        addLink={addLink}
        removeLink={removeLink}
      />
      );
    } else if (activeTab === "Profile") {
      return (
        <Profile/>
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
        <div className="md:w-3/5 sm:w-full rounded-xl my-2 mx-8 p-4 shadow bg-white">
          {renderTabBody()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
