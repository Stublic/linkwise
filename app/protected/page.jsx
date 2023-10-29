"use client";
import React, { useState, useEffect } from "react";
import { LeftSection, RightSection } from "@/components/Sections";
import NavBar from "@/components/Nav";
import LinkCustomization from "@/components/LinkCustomization";
import Profile from "@/components/Profile";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [activeTab, setActiveTab] = useState("Links");
  const maxLinks = 5;
  const [linkComponents, setLinkComponents] = useState([]);
  const [showAddLinkForm, setShowAddLinkForm] = useState(false);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links"));
    const storedLinkComponents = JSON.parse(
      localStorage.getItem("linkComponents")
    );

    if (storedLinks && storedLinkComponents) {
      setLinks(storedLinks);
      setLinkComponents(storedLinkComponents);
    }
  }, []);

  const addLink = (platform, link, index) => {
    const newLink = { platform, link };
    setLinks([...links, newLink]);
    const updatedLinkComponents = [...linkComponents];
    updatedLinkComponents[index] = `Link #${index + 1}`;
    setLinkComponents(updatedLinkComponents);
    localStorage.setItem("links", JSON.stringify([...links, newLink]));
    localStorage.setItem(
      "linkComponents",
      JSON.stringify(updatedLinkComponents)
    );
  };

  const addLinkComponent = () => {
    setShowAddLinkForm(true);
    if (linkComponents.length < maxLinks) {
      const newTitle = `Link #${linkComponents.length + 1}`;
      console.log("object");
      setLinkComponents([...linkComponents, newTitle]);
    } else {
      alert("Maximum number of links added!");
    }
  };

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);

    const updatedLinkComponents = [...linkComponents];
    updatedLinkComponents.splice(index, 1);

    setLinks(updatedLinks);
    setLinkComponents(updatedLinkComponents);
    if (updatedLinkComponents == 0) {
      setShowAddLinkForm(false);
    }

    localStorage.setItem("links", JSON.stringify(updatedLinks));
    localStorage.setItem(
      "linkComponents",
      JSON.stringify(updatedLinkComponents)
    );
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
      return <Profile />;
    }
  };

  return (
    <div className="bg-[#FAFAFA]">
      <NavBar activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />
      <div className="flex">
        <LeftSection
          links={links}
          linkComponents={linkComponents}
          addLinkComponent={addLinkComponent}
          showAddLinkForm={showAddLinkForm}
          addLink={addLink}
          removeLink={removeLink}
        />
        <RightSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          renderTabBody={renderTabBody}
        />
      </div>
    </div>
  );
};

export default Dashboard;
