import { Transition } from '@headlessui/react'
import { MoonIcon, SunIcon, SearchIcon, XIcon } from "@heroicons/react/outline"
import { useState } from 'react'
const Search = () => {
    const [isShowing, setIsShowing] = useState(true)

    return (
        <div className="sm:flex border items-center  dark:bg-gray-800  sm:mx-auto sm:max-w-lg sm:rounded-full sm:px-[9px] hidden">
            <Transition
                show={isShowing}
                as="button"
                enter="transition-width transition-all  duration-500"
                enterFrom="w-0"
                enterTo="w-64"
                leave="transition-width   duration-500"
                leaveFrom="w-64"
                leaveTo="w-0"
            >


                <div className='flex items-center pr-2'>
                    <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
                        <XIcon className="w-5 h-5" />
                    </button>
                    <input type="text" className="text-right text-xl outline-none ring-0 dark:bg-gray-800" />
               </div>


            </Transition>
        
            <button onClick={() => setIsShowing((isShowing) => !isShowing)} className={`${isShowing ? 'block' : 'block'} flex items-center  px-[0px] py-[7px] rounded-full justify-center   hover:text-teal-500 focus:outline-none text-gray-600 dark:text-gray-100  dark:hover:text-teal-500    focus:ring-gray-700 focus:text-gray-500"`}>
                <SearchIcon className='w-6 h-5' />
            </button>
        </div>
    )
}

export default Search