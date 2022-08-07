import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline"
import useDarkMode from "../hooks/useDarkMode";

const ThemeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const toggleTheme = () => {
    colorTheme === "light" ? "dark" : "light"
    setTheme(colorTheme)
    console.log(colorTheme)
  }
  return (
    <button
      aria-label='Color-Mode'
      className='flex items-center dark:bg-teal-500 dark:border-0 border dark:border-heavy-metal-400 p-1 rounded-full justify-center transition duration-150 ease-in-out  hover:text-teal-500 focus:outline-none 
      text-heavy-metal-600 dark:text-white  dark:hover:text-heavy-metal-500    focus:ring-heavy-metal-700 focus:text-heavy-metal-500' onClick={() => { toggleTheme() }}>
      {
        colorTheme === "light" ? (
          <MoonIcon
            className='w-6 h-6'
          />

        ) : (
          <SunIcon
            className='w-6 h-6'
          />
        )
      }
    </button>
  );
};
export default ThemeToggle;