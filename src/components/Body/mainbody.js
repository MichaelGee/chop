import React from "react";
import Diet from "../../images/diet.png";
import Plate from "../../images/plate.png";
import Profile from "../../images/profile.png";

const Mainbody = () => {
  return (
    <div className='body-contaniner mt-20'>
      <section className='first flex'>
        <div className='flex-auto'>
          <img src={Profile} className='w-full' />
        </div>
        <div className='flex-auto px-12'>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde error
            sapiente, impedit quos perferendis deleniti voluptas ratione eos
            officia praesentium, iste tempore cum iusto provident? Consequatur
            provident nam iure architecto.
          </h3>
        </div>
      </section>
      <section className='second flex mt-12'>
        <div className='flex-auto px-12'>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde error
            sapiente, impedit quos perferendis deleniti voluptas ratione eos
            officia praesentium, iste tempore cum iusto provident? Consequatur
            provident nam iure architecto.
          </h3>
        </div>
        <div className='flex-auto'>
          <img src={Diet} className='w-full' />
        </div>
      </section>
      <section className='third flex mt-12'>
        <div className='flex-auto'>
          <img src={Plate} className='w-full' />
        </div>
        <div className='flex-auto px-12'>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde error
            sapiente, impedit quos perferendis deleniti voluptas ratione eos
            officia praesentium, iste tempore cum iusto provident? Consequatur
            provident nam iure architecto.
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Mainbody;
