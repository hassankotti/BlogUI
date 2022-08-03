import { useState } from "react";
import useDarkMode from "../utils/useDarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/outline"

const ThemeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button
      aria-label='Color Mode'
      className='flex items-center border p-1 rounded-full justify-center transition duration-150 ease-in-out  hover:text-teal-500 focus:outline-none 
      text-gray-600 dark:text-gray-100  dark:hover:text-teal-500    focus:ring-gray-700 focus:text-gray-500'>
      {
        colorTheme === "light" ? (
          <MoonIcon
            className='w-6 h-6'
            onClick={() => setTheme("light")} />

        ) : (
          <SunIcon
            className='w-6 h-6'
            onClick={() => setTheme("dark")} />
        )
      }
    </button>
  );
};

export default ThemeToggle;
