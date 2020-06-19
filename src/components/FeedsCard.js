import React from "react";
import Dish from "../images/dish.jpeg";


export const FeedsCard=()=>{
    return(
        <div className='feeds-card-container'>
            <div className='feeds-card flex flex-col  pb-1 pt-4 max-w-sm mx-auto rounded-lg shadow-lg'>
                <div className='flex justify-between px-4 items-center mt-4'>
                    <div className='flex items-center'>
                        <img
                            src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            className='w-8 h-8 object-cover rounded-full'
                            alt='avatar'
                        />
                        <a className='text-gray-700 text-sm mx-3' href='#'>
                            Mickie Gates
                        </a>
                    </div>
                    <span className='font-light text-sm text-gray-600'>
              Jun 7, 2020
            </span>
                </div>
                <div className='mt-4'>
                    <div className='w-full'>
                        <img src={Dish} alt='uploaded_picture' className='w-full' />
                    </div>
                    <div className='py-4 px-5'>
                        <p className='text-sm text-gray-700 font-medium'>
                            Pig's balls and squashed pigeon brain sauce.
                        </p>
                        <p className='text-xs py-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                            error sapiente, impedit quos perferendis deleniti voluptas
                            ratione eos officia praesentium, iste tempore cum iusto
                            provident?
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs'>30 likes</p>
                            <p className='text-xs'>150 Comments</p>
                            <a
                                href='#'
                                className='inline-block text-sm leading-none border rounded text-black border-black  mt-4 sm:px-4 sm:py-2 px-5 py-2 lg:mt-0'
                            >
                                + Save
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='feeds-card flex flex-col mt-6 pb-1 pt-4 max-w-sm mx-auto rounded-lg shadow-lg'>
                <div className='flex justify-between px-4 items-center mt-4'>
                    <div className='flex items-center'>
                        <img
                            src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            className='w-8 h-8 object-cover rounded-full'
                            alt='avatar'
                        />
                        <a className='text-gray-700 text-sm mx-3' href='#'>
                            Mickie Gates
                        </a>
                    </div>
                    <span className='font-light text-sm text-gray-600'>
              Jun 7, 2020
            </span>
                </div>
                <div className='mt-4'>
                    <div className='w-full'>
                        <img src={Dish} alt='uploaded_picture' className='w-full' />
                    </div>
                    <div className='py-4 px-5'>
                        <p className='text-sm text-gray-700 font-medium'>
                            Pig's balls and squashed pigeon brain sauce.
                        </p>
                        <p className='text-xs py-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                            error sapiente, impedit quos perferendis deleniti voluptas
                            ratione eos officia praesentium, iste tempore cum iusto
                            provident?
                        </p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs'>30 likes</p>
                            <p className='text-xs'>150 Comments</p>
                            <a
                                href='#'
                                className='inline-block text-sm leading-none border rounded text-black border-black  mt-4 sm:px-4 sm:py-2 px-5 py-2 lg:mt-0'
                            >
                                + Save
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}