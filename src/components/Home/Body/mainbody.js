import React from "react";
import { Link } from "react-router-dom";
import Diet from "../../../images/diet.png";
import Post from "../../../images/post.png";
import Profile from "../../../images/profile.png";

const Mainbody = () => {
  return (
    <div>
      <div className='curved-banner'>
        <div className='banner'>
          <h1 className='banner-text font-thin text-center'>
            <p>What you cookin' ?</p>
            <p>Share it with everyone!</p>
          </h1>
          <div className='buttons flex justify-between my-3 space-x-4'>
            <Link to='/login'>
              <a
                href='#'
                className='inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 hover:border-white border-transparent hover:text-white hover:bg-transparent bg-white mt-4 sm:px-8 sm:py-3 px-5 py-2 lg:mt-0'
              >
                Log In
              </a>
            </Link>
            <Link to='/signup'>
              <a
                href='#'
                className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:px-8 sm:py-3 px-5 py-2 lg:mt-0'
              >
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='body-contaniner mt-20 text-gray-700'>
        <section className='first flex'>
          <div className='flex-auto'>
            <img src={Profile} alt='profile_image' className='w-full' />
          </div>
          <div className='flex-auto px-24'>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              error sapiente, impedit quos perferendis deleniti voluptas ratione
              eos officia praesentium, iste tempore cum iusto provident?
              Consequatur provident nam iure architecto.
            </h3>
          </div>
        </section>
        <section className='second flex mt-12'>
          <div className='flex-auto px-24'>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              error sapiente, impedit quos perferendis deleniti voluptas ratione
              eos officia praesentium, iste tempore cum iusto provident?
              Consequatur provident nam iure architecto.
            </h3>
          </div>
          <div className='flex-auto'>
            <img src={Diet} alt='diet_img' className='w-full' />
          </div>
        </section>
        <section className='third flex mt-12'>
          <div className='flex-auto'>
            <img src={Post} alt='post_img' className='w-full' />
          </div>
          <div className='flex-auto px-24'>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              error sapiente, impedit quos perferendis deleniti voluptas ratione
              eos officia praesentium, iste tempore cum iusto provident?
              Consequatur provident nam iure architecto.
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mainbody;
