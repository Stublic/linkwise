'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SignOut from './sign-out';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');

    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
      localStorage.setItem('userImage', reader.result);
    }
  };

  const handleSave = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <h2 className="heading-M text-[#333]">Profile Details</h2>
      <p className="body-M text-[#737373]">Add your details to create a personal touch to your profile.</p>
      <div className='flex flex-col gap-8 my-8'>
        <div className='bg-[#FAFAFA] rounded-xl shadow-md flex justify-between items-center p-4 flex-wrap'>
          <p className='Body-M text-[#737373] mr-4'>Profile picture</p>
          <label className='flex flex-col items-center justify-center w-48 h-48 my-4 mr-4  rounded-xl bg-[#E9F0A6] text-[#C6D752] cursor-pointer'>
            <Image
              width={150}
              height={150}
              alt='img'
              src={imagePreview || '/image-placeholder.svg'}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            + Upload Image
          </label>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4"
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <SignOut/>
        <button onClick={handleSave} className='py-3 px-5 mx-2 rounded-md heading-S border-[2px] border-[#C6D752] bg-none text-[#C6D752] hover:bg-[#E9F0A6] '>Save</button>
      </div>
      {
        message && <div className="absolute bottom-5  left-1/2 -translate-x-1/2">
          <div
            id="toast-simple"
            class="flex items-center w-full max-w-md p-4 space-x-4 text-gray-500 bg-[#333333] rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
            role="alert"
          >
            <Image width={30} height={30} src="/floppy-disk.svg" alt="link" className="px-1" />
            <div class="heading-S text-[#FAFAFA]">
            Your changes have been successfully saved!
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Profile;
