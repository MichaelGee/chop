import React from "react";
import Navbar from "../Home/Navbar/navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='form-container'>
        <div class='login-form flex flex-col  px-8 py-6 mx-auto rounded-lg shadow-lg max-w-xs'>
          <form>
            <div class='mb-4'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='username'
              >
                Username
              </label>
              <input
                class='appearance-none block w-full bg-gray-100 text-black border border-grey-lighter rounded py-3 px-4'
                id='username'
                type='text'
                placeholder='Username'
              />
            </div>
            <div class='mb-6'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='password'
              >
                Password
              </label>
              <input
                class='appearance-none block w-full bg-gray-100 text-black border border-grey-lighter rounded py-3 px-4'
                id='password'
                type='password'
                placeholder='Password'
              />
              <p class='text-red-500 text-xs italic'>
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

export default Login;
