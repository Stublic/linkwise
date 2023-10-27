import React from "react";
import AddLinkForm from "@/components/Addlinkform";
import Image from "next/image";

const LinkCustomization = ({ addLinkComponent, showAddLinkForm, linkComponents, addLink, removeLink }) => {
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
      )}
    </div>
  );
};

export default LinkCustomization;
