import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useState, useEffect } from 'react'

const Carousel = (props) => {
    const { children } = props


    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const carouselInfiniteLoop = () => {
        if (currentIndex === children.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
        const interval = setInterval(() => { carouselInfiniteLoop() }, 3000)
        return clearInterval(interval)
    })

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(children.length - 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const jump = (index) => {
        console.log(index)
        if (currentIndex > 0) {
            setCurrentIndex(index)
        }
    }
    return (
        <div className='bg-cover bg-center bg-red-500 relative' >
            <div id="default-carousel" className="relative" data-carousel="static">

                <div className="relative h-[513px] overflow-hidden md:h-[513px]">
                    <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 bg-gradient-to-r from-cyan-500 to-blue-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                <div className="absolute z-50 flex space-x-3 space-x-reverse -translate-x-1/2 bottom-5 left-1/2">
                    {
                        children.map((child, index) => {
                            return (<button key={index} type="button" className={` ${index === currentIndex ? "bg-teal-500 w-6 border-0" : "w-3 border-white/50 border"} h-3 rounded-full border border-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800`} onClick={() => jump(index)}></button>)
                        })
                    }

                </div>
                <div className=' absolute inset-0 z-30  bg-gray-900/60'>

                </div>
                <div className=' absolute inset-0 z-40 flex items-center  justify-center '>
                    <div className='max-w-4xl max-auto text-white '>
                        <h1 className='text-5xl font-bold text-center leading-[36px] mb-8'>مركز المدونة</h1>
                        <p className='text-2xl font-normal break-words  text-center leading-[50px]'>
                            مركــز للتعليـــم ونشــر المعرفة عبر المقالات والدونات المتخصصة بموضوعات التجارة الالكترونى والاقتصاد والتقنية , ومايخص حياتنا كتجار , كل ماتريده عن التجارة الالكترونية والاقتصاد
                        </p>
                    </div>

                </div>
                <div>
                    <button type="button" onClick={prev} className="absolute top-0 left-[250px] z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <ChevronLeftIcon className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
                        </span>
                    </button>
                    <button type="button" onClick={next} className="absolute top-0 right-[250px] z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <ChevronRightIcon className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Carousel