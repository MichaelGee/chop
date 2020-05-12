import React from "react";

const Navbar = () => {
  /* const [open, setOpen] = React.useEffect(false); */

  return (
    <div>
      <div className='curved-banner'>
        <nav className='banner flex items-center justify-between flex-wrap bg-teal-500 p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <span className='font-semibold text-3xl tracking-tight'>Chop</span>
          </div>
          <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className='menu w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
            <div className='text-sm lg:flex-grow'></div>
            <div>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
              >
                Docs
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
              >
                About
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
        <div className='banner-text'>
          <h1 className='text-4xl font-thin text-center'>
            What you cookin' ?
            <br />
            Share it with everyone!
          </h1>
          <div className='buttons flex justify-between my-3 space-x-3'>
            <a
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 hover:border-white border-transparent hover:text-white hover:bg-transparent bg-white mt-4 px-8 lg:mt-0'
            >
              Log In
            </a>
            <a
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 px-8 lg:mt-0'
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
