import React from 'react'
import Tag from '../components/Tag'
const Tags = ({ tags }) => {
    return (
        <section className='flex items-center justify-between py-2.5  w-full  px-4 md:px-6 lg:px:8 xl:px-10 '>
            <div className="flex items-center justify-start space-x-2 space-x-reverse ">
                {
                    tags.map((tag, index) => (
                        <Tag tag={tag} key={index} />
                    ))
                }
            </div>
            <div className='flex items-center justify-center space-x-reverse space-x-1 text-gray-500 dark:text-heavy-metal-100'>
                <a href="" className='rounded-full border p-2'>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='w-5 h-5'>
                        <path d="M17 9.808V16h-3.645v-5.776c0-1.45-.525-2.442-1.846-2.442-1.006 0-1.604.668-1.868 1.314-.097.23-.121.55-.121.874V16H5.874s.05-9.783 0-10.796H9.52v1.53c-.007.012-.017.023-.024.035h.024v-.035C10.004 6 10.868 4.95 12.805 4.95 15.203 4.95 17 6.494 17 9.808zM2.062 0C.815 0 0 .806 0 1.865 0 2.902.791 3.73 2.015 3.73h.022C3.31 3.73 4.1 2.902 4.1 1.865 4.076.807 3.309 0 2.062 0zM.216 16H3.86V5.204H.216V16z" fill="currentColor" />
                    </svg>
                </a>
                <a href="" className='rounded-full border p-2'>

                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" className='w-5 h-5'>
                        <path d="M16 1.421a7.29 7.29 0 01-1.89.479A3.067 3.067 0 0015.553.226c-.643.352-1.346.6-2.08.733a3.354 3.354 0 00-1.675-.885 3.537 3.537 0 00-1.925.138 3.246 3.246 0 00-1.507 1.114 2.866 2.866 0 00-.567 1.704c-.002.232.023.463.076.69a9.897 9.897 0 01-3.747-.917A9.184 9.184 0 011.114.553 2.83 2.83 0 00.748 2.76c.187.752.678 1.41 1.373 1.839A3.449 3.449 0 01.64 4.227v.033c0 .699.263 1.377.741 1.919a3.351 3.351 0 001.887 1.056c-.28.068-.57.102-.86.1a3.135 3.135 0 01-.621-.052c.212.601.62 1.127 1.17 1.504.548.378 1.21.59 1.895.605a6.95 6.95 0 01-4.067 1.292A6.64 6.64 0 010 10.642a9.803 9.803 0 005.032 1.359c6.036 0 9.336-4.615 9.336-8.616 0-.134-.005-.263-.012-.391A6.29 6.29 0 0016 1.42z" fill="currentColor" />
                    </svg>
                </a>
                <a href="" className='rounded-full border p-2'>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" className='w-5 h-5'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 5.5H5v-2a1 1 0 011-1h1V0H5a3 3 0 00-3 3v2.5H0V8h2v8h3V8h2l1-2.5z" fill="currentColor" />
                    </svg>
                </a>
            </div>
        </section>

    )
}

export default Tags