import React from "react";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      <nav className='navbar flex items-center justify-between flex-wrap py-3 px-6 fixed w-full z-10'>
        <div className='flex items-center flex-no-shrink text-white mr-6'>
          <a
            className='text-white no-underline hover:text-white hover:no-underline'
            href='#'
          >
            <span className='text-2xl pl-2'>
              <i className='em em-grinning'></i> Chop
            </span>
          </a>
        </div>

        <div className='block lg:hidden'>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='flex items-center px-3 py-2 text-teal-200 border-teal-400 hover:text-white hover:border-white'
          >
            <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
              {isExpanded === false ? (
                <path
                  x-show='!open'
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              ) : (
                <path
                  x-show='open'
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0`}
        >
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            <li className='mr-3'>
              <a
                className='inline-block py-2 px-4 text-white no-underline'
                href='#'
              >
                Active
              </a>
            </li>
            <li className='mr-3'>
              <a
                className='inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-2 px-4'
                href='#'
              >
                link
              </a>
            </li>
            <li className='mr-3'>
              <a
                className='inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-2 px-4'
                href='#'
              >
                link
              </a>
            </li>
            <li className='mr-3'>
              <a
                className='inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-2 px-4'
                href='#'
              >
                link
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
};


