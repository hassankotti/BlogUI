import { Transition } from '@headlessui/react'
import { MoonIcon, SunIcon, SearchIcon, XIcon } from "@heroicons/react/outline"
import React, { useState } from "react";
const Search = () => {
    const [isShowing, setIsShowing] = useState(false)

    return (
        <div className={` ${isShowing ? 'flex' : ''}  border dark:border-heavy-metal-400 items-center  dark:bg-heavy-metal-900  sm:mx-auto sm:max-w-lg rounded-full sm:px-[5px]`}>
            <button onClick={() => setIsShowing((isShowing) => !isShowing)}
                aria-label='open-search'
                className={`flex items-center  px-[6px] md:px-[0px] py-[7px] rounded-full justify-center   hover:text-teal-500 focus:outline-none text-heavy-metal-600 dark:text-heavy-metal-100  dark:hover:text-teal-500    focus:ring-heavy-metal-700 focus:text-heavy-metal-500"`}>
                <SearchIcon className='w-6 h-5' />
            </button>

            <Transition
                show={isShowing}
                as="div"
                enter="transition-width flex-grow  duration-500"
                enterFrom="w-0 opacity-0"
                enterTo="w-72 opacity-100"
                leave="transition-width   duration-500"
                leaveFrom="w-72 opacity-100"
                leaveTo="w-0 opacity-0">
                <input type="text" className="text-right flex-1 text-md outline-none ring-0 dark:bg-heavy-metal-900" aria-label='search input' placeholder='اكتب كلمة بحثك' />
            </Transition>

            <Transition
                show={isShowing}
                as="button"
                enter="transition duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0" onClick={() => setIsShowing((isShowing) => !isShowing)} className="flex-none pl-2"
                aria-label='close-search'>
                <XIcon className="w-5 h-5" />
            </Transition>
        </div>
    )
}

export default Search