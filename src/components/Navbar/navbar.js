import React from "react";

const Navbar = () => {
  /* const [open, setOpen] = React.useEffect(false); */
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      <nav className='navbar flex items-center justify-between flex-wrap bg-teal-500 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <span className='font-semibold text-3xl tracking-tight'>Chop</span>
        </div>
        <div className='block lg:hidden'>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='flex items-center px-3 py-2 text-teal-200 border-teal-400 hover:text-white hover:border-white'
          >
            <svg fill='currentColor' viewBox='0 0 20 20' class='w-6 h-6'>
              <path
                x-show='!open'
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto `}
        >
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
      <div className='curved-banner'>
        <div className='banner'>
          <h1 className='banner-text font-thin text-center'>
            What you cookin' ?
            <br />
            Share it with everyone!
          </h1>
          <div className='buttons flex justify-between my-3 space-x-3'>
            <a
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-teal-500 hover:border-white border-transparent hover:text-white hover:bg-transparent bg-white mt-4 px-8 py-3 lg:mt-0'
            >
              Log In
            </a>
            <a
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 px-8 py-3 lg:mt-0'
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
