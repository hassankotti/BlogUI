import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import NavItem from "../components/NavItem";
import navlist from "../data/NavList";
import NavItemType from "../types/NavItemType";
import Search from "../components/Search";
import { MenuIcon } from "@heroicons/react/solid";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <nav className=' flex-col divide-y space-y-12 bg-white border-b dark:border-gray-700 dark:bg-gray-800'>
      <div className="max-w-7xl mx-auto">
      <div className='container flex-1 px-4 mx-auto lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center pr-4 lg:w-1/5'>
            <button
              aria-label='Menu'
              className='p-2  text-gray-700 rounded-md lg:hidden dark:text-gray-300 focus:outline-none' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className='w-6 h-6' />
            </button>
            <a
              href='https://kotticrm.test/dashboard'
              className='flex items-center flex-shrink-0 '>
              <span className='ml-1 text-gray-700 capitalize text-xl font-medium  dark:text-gray-300'>
                مدونة | Blog
              </span>
            </a>
          </div>
          <div className='flex-1'>
            <ul className='lg:flex hidden justify-start space-x-reverse space-x-12'>
              {navlist.map((item: NavItemType, index) => {
                return <NavItem key={index} item={item} />;
              })}

            </ul>
          </div>
          <div className='flex items-center justify-end -ml-2 lg:w-1/5'>
            <div className="relative flex items-center space-x-2 space-x-reverse text-gray-700 dark:text-gray-200">
              <Search />
              <ThemeToggle />

              {/* responsice menu */}
              <div className={`${isMenuOpen ? 'hidden' : 'hidden'}  'hidden  absolute top-20  bg-white border rounded inset-x-0 '`}>
                <ul className='flex-col  divide-y'>
                  <li>
                    <a href='' className='border-teal-300 border-r block pl-3 pr-4 py-2 border-l-4  text-base font-normal text-teal-50 bg-teal-500 focus:outline-none focus:text-teal-50 focus:bg-teal-500 focus:border-teal-700 transition duration-150 ease-in-out'>
                      الرئيسية
                    </a>
                  </li>
                  <li>
                    <a href='' className=' border-r block pl-3 pr-4 py-2 border-l-4  text-base font-normal  focus:outline-none focus:text-teal-50 focus:bg-teal-500 focus:border-teal-700 transition duration-150 ease-in-out'>
                      المقالات
                    </a>
                  </li>
                  <li>
                    <a href='' className=' border-r block pl-3 pr-4 py-2 border-l-4  text-base font-normal  focus:outline-none focus:text-teal-50 focus:bg-teal-500 focus:border-teal-700 transition duration-150 ease-in-out'>
                      الدراسات والتقارير
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
