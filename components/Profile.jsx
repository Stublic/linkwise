'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SignOut from './sign-out';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // Load user details from local storage when the component mounts
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

    // Load image preview from local storage
    const storedImage = localStorage.getItem('userImage');
    if (storedImage) {
      setImagePreview(storedImage);
    }
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const { url } = await response.json();
          setImagePreview(url);
          console.log(imagePreview);
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Image upload error:', error);
      }
    }
  };

  const handleSave = () => {
    // Save user details to local storage
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
          <label className='flex flex-col items-center justify-center w-48 h-48 my-4 mr-4 rounded-xl bg-[#E9F0A6] text-[#C6D752]'>
            <img
              width={150}
              height={150}
              alt='img'
              src={imagePreview || '/image-placeholder.svg'}
              className='animate-pulse'
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            + Upload Image
          </label>
          <p className='body-S text-[#737373] sm:flex-1 md:flex-none'>
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
        <div className='bg-[#FAFAFA] rounded-xl shadow-md p-4 flex flex-col gap-4'>
          <div className='flex justify-between items-center flex-wrap'>
            <label htmlFor='input' className='body-M text-[#737373]'>
              First name*
            </label>
            <input
              type='text'
              placeholder='e.g. John'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4'
            />
          </div>
          <div className='flex justify-between items-center flex-wrap'>
            <label htmlFor='input' className='body-M text-[#737373]'>
              Last name*
            </label>
            <input
              type='text'
              placeholder='e.g. Appleseed'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4'
            />
          </div>
          <div className='flex justify-between items-center flex-wrap'>
            <label htmlFor='email' className='body-M text-[#737373]'>
              Email
            </label>
            <input
              type='email'
              placeholder='e.g. email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full md:max-w-[500px] sm:max-w-[300px] py-3 border-[2px] border-[#D9D9D9] rounded-lg pl-4'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <SignOut/>
        <button onClick={handleSave} className='py-3 px-5 mx-2 rounded-md heading-S border-[2px] border-[#C6D752] bg-none text-[#C6D752] hover:bg-[#E9F0A6]'>Save</button>
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



// import { useState, useRef } from 'react';

// const Profile = () => {
//   const inputFileRef = useRef(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageUpload = async (event) => {
//     event.preventDefault();

//     const file = inputFileRef.current.files[0];

//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
//           method: 'POST',
//           body: formData,
//         });

//         if (response.ok) {
//           const newBlob = await response.json();
//           setImagePreview(newBlob.url);

//           // Save the image URL to local storage
//           localStorage.setItem('userImage', newBlob.url);
//         } else {
//           console.error('Image upload failed');
//         }
//       } catch (error) {
//         console.error('Image upload error:', error);
//       }
//     }
//   };

//   return (
//     <>
//       <h1>Profile Details</h1>

//       <form onSubmit={handleImageUpload}>
//         <input name="file" ref={inputFileRef} type="file" required />
//         <button type="submit">Upload Image</button>
//       </form>
//       {imagePreview && (
//         <div>
//           <img src={imagePreview} alt="Uploaded Image" />
//         </div>
//       )}
//     </>
//   );
// };

// export default Profile;
