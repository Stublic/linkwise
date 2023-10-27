"use client";
import React, { useState } from "react";
import Links from "@/components/Link";
import AddLinkForm from "@/components/Addlinkform";
import NavBar from "@/components/Nav";
import Image from "next/image";

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
    if(updatedLinks==0){
      setShowAddLinkForm(false);
    }
  };

  const renderTabBody = () => {
    if (activeTab === "Links") {
      return (
        <div className="p-6">
          <h2 className="heading-M text-[#333]">Customize your links</h2>
          <p className="body-M text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
          <button onClick={addLinkComponent} className="text-[#C6D752] border-[2px] border-[#C6D752] w-full rounded-lg shadow-sm py-3 my-8 hover:bg-[#E9F0A6] hover:text-[#C6D752]">+ Add new link</button>
          {showAddLinkForm ? (
          <div>
            {linkComponents.map((title, index) => (
              <AddLinkForm
                onAddLink={addLink}
                onRemove={removeLink}
                title={title}
                key={index}
                index={index}
              />
            ))}
          </div>
           ) : (
             <div className="flex flex-col justify-center items-center">
               <Image className="mt-6" width={280} height={260} src="/start.svg" alt="start creating links"/>
               <h2 className="heading-M my-6 text-center">Let’s get you started</h2>
               <p className="body-M max-w-lg text-center">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
             </div>
           )
     }
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
        <div className="md:w-3/5 sm:w-full rounded-xl my-2 mx-8 p-4 shadow bg-white">
          {renderTabBody()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
