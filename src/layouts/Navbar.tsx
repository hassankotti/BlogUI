import navlist from "../data/NavList";
import React, { useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import NavItem from "../components/NavItem";
import ThemeToggle from "../components/ThemeToggle";
import Search from "../components/Search";
import { useLocation } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <nav className=' flex-col divide-y space-y-12 bg-white border-b dark:border-heavy-metal-700 dark:bg-heavy-metal-900'>
      <div className=''>

        <Disclosure as="nav">
          {({ open }) => (
            <div className="relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex">
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button aria-label='menu-button' className=" inline-flex items-center justify-center p-2 rounded-md dark:text-heavy-metal-100 dark:hover:text-white dark:hover:bg-heavy-metal-700 ">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex items-center mr-5">
                      {/*  Logo  */}
                      <div className="flex-shrink-0">
                        <a
                          href='/home'
                          className='flex items-center flex-shrink-0 '>
                          <span className='ml-1 text-heavy-metal-700 capitalize text-xl font-medium  dark:text-white'>
                            مدونة | Blog
                          </span>
                        </a>
                      </div>
                      {/*  Menu Button  */}
                      <div className="hidden md:block">
                        <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
                          {navlist.map((item) => (
                            <NavItem item={item} key={item.key} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">


                      {/* Left menu */}
                      <Menu as="div" className="ml-3 relative">
                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                          <Search />
                          <ThemeToggle />
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {navlist.map((item, index) => (
                              <Menu.Item key={index}>
                                {({ active }) => (
                                  <a
                                    href={item.path}
                                    className={classNames(
                                      active ? 'bg-heavy-metal-100' : '',
                                      'block px-4 py-2 text-sm text-heavy-metal-700'
                                    )}
                                  >
                                    {item.title}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 space-x-reverse md:hidden">

                    <ThemeToggle />
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden border-t dark:border-heavy-metal-700 absolute inset-x-0 top-16 z-60 bg-white dark:bg-heavy-metal-900">
                <div className="divide-y dark:divide-heavy-metal-700">
                  {navlist.map((item) => (
                    <Disclosure.Button
                      key={item.key}
                      as="a"
                      href={item.path}
                      className={classNames(
                        item.path === location.pathname ? 'text-teal-500 border-teal-500 border-r-2 hover:text-white' : ' hover:text-white dark:bg-heavy-metal-900 dark:text-white',
                        'block px-3 py-3  text-base font-medium text-heavy-metal-300 hover:bg-heavy-metal-500/50 dark:hover:bg-heavy-metal-700/50',
                      )}
                      aria-current={item.path ? 'page' : undefined}
                      aria-label={item.title}
                    >
                      {item.title}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </nav>
  );
};

export default Navbar;
