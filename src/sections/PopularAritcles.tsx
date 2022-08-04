import React, { useRef, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import articles from '../data/Articles';
import { Tab } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon } from '@heroicons/react/solid';
const PopularArticles = () => {
  let scrl;
  if (typeof HTMLDivElement === 'undefined')
    scrl = useRef(null);
  else
    scrl = useRef<HTMLDivElement>(null);




  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    if (null !== scrl.current) {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);

      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    }

  }


  const scrollCheck = () => {
    if (null !== scrl.current) {
      setscrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    }
  };

  return (
    <div className="py-8 mb-0">
      <Tab.Group>
        <div className='flex items-center space-x-2 space-x-reverse justify-between'>
          <Tab.List>
            <Tab className="h-10 px-4 py-2 -mb-px font-bold text-sm text-center text-gray-600 bg-transparent border-b-2 border-teal-500 sm:text-base dark:border-teal-400 dark:text-teal-300 whitespace-nowrap focus:outline-none">ألاكثر مشاهدة</Tab>
            <Tab className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">ألاكثر شهرة</Tab>
            <Tab className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">ألاكثر قراءة</Tab>
          </Tab.List>
          <div className='flex items-center space-x-2 space-x-reverse'>
            {scrollX !== 0 && (
              <ChevronRightIcon className="h-8 w-8 text-gray-500 border border-gray-400 p-2 rounded-full" onClick={() => slide(180)} />)}
            {!scrolEnd && (
              <ChevronLeftIcon className="h-8 w-8 text-gray-500 border border-gray-400 p-2 rounded-full" onClick={() => slide(-180)} />)}
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid  gap-8 mt-9  grid-flow-col auto-cols-max overflow-hidden overflow-x-scroll no-scrollbar" ref={scrl} onScroll={scrollCheck} id="scr">
              {
                articles.map((article, index) => {
                  return <ArticleCard article={article} key={index} />;
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid  gap-8 mt-9  grid-flow-col auto-cols-max">
              {
                articles.map((article, index) => {
                  return <ArticleCard article={article} key={index} />;
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            content 3
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default PopularArticles