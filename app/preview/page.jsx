'use client';
import React from 'react';
import Links from '@/components/Link';


const Preview = ({ links }) => {

    return (
      <div>
        <h1>Link Preview</h1>
        {links.map((link, index) => (
          <Links key={index} platform={link.platform} link={link.link} />
        ))}
      </div>
    );
  };
  
  export default Preview;