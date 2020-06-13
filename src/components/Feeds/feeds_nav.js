import React from "react";
import Notify from "../../images/notifications.svg";

const FeedsNav = () => {
  return (
    <div>
      <nav className='feeds-navbar flex items-center justify-between  py-3 px-6 fixed w-full z-10'>
        <div className='flex items-center flex-no-shrink text-white mr-6'>
          <a
            className='text-white no-underline hover:text-white hover:no-underline'
            href='#'
          >
            <span className='text-2xl pl-2 sm:text-sm'>
              <i className='em em-grinning'></i> Chop
            </span>
          </a>
        </div>

        <div>
          <ul className='flex'>
            <li className='mr-3'>
              <img className='notify float-right' src={Notify} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FeedsNav;
