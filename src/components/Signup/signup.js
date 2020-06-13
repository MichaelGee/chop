import React from "react";
import Navbar from "../Home/Navbar/navbar";
import User from "../../images/user2.png";
import Lock from "../../images/lock2.png";
import Email from "../../images/email.png";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='form-container'>
        <div className='signup-form flex flex-col px-8 py-6 mx-auto max-w-xs '>
          <form>
            <div className='mb-4'>
              <label
                className='block text-black text-sm font-normal mb-2 '
                for='username'
              >
                Email
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                  <img src={Email} alt='' className='w-5' />
                </div>
                <input
                  className='flex appearance-none block pr-4 pl-10 w-full bg-gray-200 text-black border border-black rounded sm:py-3 py-2  px-4'
                  id='email'
                  type='text'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='mb-4'>
              <label
                className='block text-black text-sm font-normal mb-2 '
                for='username'
              >
                Username
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                  <img src={User} alt='' className='w-5' />
                </div>
                <input
                  className='flex appearance-none block pr-4 pl-10 w-full bg-gray-200 text-black border border-black rounded sm:py-3 py-2  px-4'
                  id='username'
                  type='text'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='mb-4'>
              <label
                className='block text-black text-sm font-normal mb-2'
                for='password'
              >
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                  <img src={Lock} alt='' className='w-5' />
                </div>
                <input
                  className='appearance-none block w-full pr-4 pl-10 bg-gray-200 text-black border border-black rounded sm:py-3 py-2 px-4'
                  id='password'
                  type='password'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                className='block text-black text-sm font-normal mb-2'
                for='password'
              >
                Re-Enter Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                  <img src={Lock} alt='' className='w-5' />
                </div>
                <input
                  className='appearance-none block w-full pr-4 pl-10 bg-gray-200 text-black border border-black rounded sm:py-3 py-2 px-4'
                  id='re-password'
                  type='password'
                  placeholder='Re-enter Password'
                />
              </div>
            </div>
            <a
              href='#'
              className=' signup-btn inline-block text-sm px-4 py-2 leading-none border rounded mt-0 sm:px-8 py-3 px-5'
            >
              Sign Up
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
