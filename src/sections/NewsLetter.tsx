import React from "react";
import { MailIcon } from "@heroicons/react/outline";
const NewsLetter = () => {
  return (
    <section className='bg-gray-100 dark:bg-heavy-metal-800/70 dark:text-heavy-metal-400 py-12 my-auto flex justify-center mt-8'>
      <div>
        <h3 className='font-normal text-xl text-center py-6'>
          إشترك في نشرتنا البريدية
        </h3>
        <p className='font-normal text-sm text-center pb-6 text-heavy-metal-400'>
          كن انت اول من يعلم عن كل جديد عن عالم التجارة الالكترونية
        </p>
        <div className='flex-1 items-center lg:justify-center container sm:flex   sm:mx-0 sm:px-0 '>
          <div className=' flex flex-1 dark:bg-heavy-metal-800 bg-white items-center rounded-none sm:rounded-r border dark:border-heavy-metal-700'>
            <span className='px-4 py-2'>
              <MailIcon className="w-6 h-6 stroke-[#FF9F4B] " />
            </span>
            <input
              type='text'
              className='dark:bg-heavy-metal-800/70 flex-1 outline-none py-2 ring-0 placeholder:text-base font-normal'
              placeholder='البريد الالكتروني'
            />
          </div>
          <div className='flex-0'>
            <button className='bg-teal-400 hover:bg-teal-500 mt-3 px-6 py-2 sm:mt-0 sm:rounded-l text-white w-full'>
              إشتراك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
