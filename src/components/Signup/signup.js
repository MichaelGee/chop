import React from "react";
import Navbar from "../Home/Navbar/navbar";
import User from "../../images/user2.png";
import Lock from "../../images/lock2.png";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='form-container'>
        <div className='login-form flex flex-col  px-8 py-6 mx-auto rounded-lg max-w-xs shadow-xl'>
          <form>
            <div className='mb-4'>
              <label
                className='block text-black text-sm font-bold mb-2 '
                for='username'
              >
                Username
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                  <img src={User} className='w-5' />
                </div>
                <input
                  className='flex appearance-none block pr-4 pl-10 w-full bg-gray-200 text-black border border-grey-lighter rounded py-3 px-4'
                  id='username'
                  type='text'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                className='block text-black text-sm font-bold mb-2'
                for='password'
              >
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                  <img src={Lock} className='w-5' />
                </div>
                <input
                  className='appearance-none block w-full pr-4 pl-10 bg-gray-200 text-black border border-grey-lighter rounded py-3 px-4'
                  id='password'
                  type='password'
                  placeholder='Password'
                />
              </div>
              <p className='text-red-500 text-xs italic'>
                Please choose a password.
              </p>
            </div>
            <a
              href='#'
              className='login-btn inline-block text-sm px-4 py-2 leading-none border rounded  mt-4 sm:px-8 sm:py-3 px-5 py-2 lg:mt-0'
            >
              Log In
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;