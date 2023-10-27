import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className="p-6">
    <h2 className="heading-M text-[#333]">Profile Details</h2>
    <p className="body-M text-[#737373]">Add your details to create a personal touch to your profile.</p>
    <div className='flex flex-col gap-8 my-8'>
        <div className='bg-[#FAFAFA] rounded-xl shadow-md flex justify-between items-center p-4 flex-wrap'>
            <p className='Body-M text-[#737373] mr-4'>Profile picture</p>
            <button className='flex flex-col items-center justify-center w-48 h-48 my-4 mr-4  rounded-xl bg-[#E9F0A6] text-[#C6D752]'>
                <Image width={35} height={35} alt='img' src='/image-placeholder.svg'/>
                + Upload Image
            </button>
            <p className='body-S text-[#737373] sm:flex-1 md:flex-none'>Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>
        <div className='bg-[#FAFAFA] rounded-xl shadow-md p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center flex-wrap'>
            <label htmlFor="input" className="body-M text-[#737373]">
            First name*
          </label>
          <input
            type="text"
            placeholder="e.g. John"
            className="w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4"
          />
            </div>
            <div className='flex justify-between items-center flex-wrap'>
            <label htmlFor="input" className="body-M text-[#737373]">
            Last name*
          </label>
          <input
            type="text"
            placeholder="e.g. Appleseed"
            className="w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4"
          />
            </div>
            <div className='flex justify-between items-center flex-wrap'>
            <label htmlFor="email" className="body-M text-[#737373]">
            Email
          </label>
          <input
            type="email"
            placeholder="e.g. email@example.com"
            className="w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4"
          />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile