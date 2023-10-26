'use client'
import React, { useState } from 'react';
import Nav from "@/components/Nav";
import "styles/globals.css";

import Link from '@/components/Link';
import AddLinkForm from '@/components/AddLinkForm';


export default function Home() {
  const [links, setLinks] = useState([]);
  const addLink = (platform, link) => {
    const newLink = { platform, link };
    setLinks([...links, newLink]);
  };
  return (
    <div className="flex">
    <div className="w-1/4 p-4">
      {/* Left Section */}
      {links.map((link, index) => (
        <Link key={index} platform={link.platform} link={link.link} />
      ))}
    </div>
    <div className="w-3/4 p-4">
      {/* Right Section */}
      <AddLinkForm onAddLink={addLink} />
    </div>
  </div>
  );
}
