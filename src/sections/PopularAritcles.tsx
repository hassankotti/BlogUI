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
  const tabs = ['الاكثر مشاهدة', 'الاكثر شهرة', 'الاكثر قراءة'];

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
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <section className="py-8 mb-0 space-y-6">
      <Tab.Group>
        <div className='flex items-center space-x-2 space-x-reverse justify-between'>
          <Tab.List>
            {
              tabs.map((tab, index) => (
                <Tab key={index} className={({ selected }) =>
                  classNames('h-10 px-4 py-2 -mb-px  text-sm text-center dark:text-white text-gray-600 bg-transparent sm:text-base  whitespace-nowrap focus:outline-none'
                    , selected ? ' border-b-2 border-teal-500 font-semibold' : '')}>
                  {tab}
                </Tab>))
            }

          </Tab.List>
          <div className='flex items-center space-x-2 space-x-reverse'>
            {scrollX !== 0 && (
              <button onClick={() => slide(180)} aria-label='scroll-right'>
                <ChevronRightIcon className="h-8 w-8 text-gray-500 border border-gray-400 p-2 rounded-full" />
              </button>)}
            {!scrolEnd && (
              <button onClick={() => slide(-180)} aria-label='scroll-left'>
                <ChevronLeftIcon className="h-8 w-8 text-gray-500 border border-gray-400 p-2 rounded-full" />
              </button>)}

          </div>
        </div>
        <Tab.Panels className='overflow-hidden overflow-x-scroll no-scrollbar'>
          <Tab.Panel>
            <div className="grid  gap-8 mt-9  md:grid-flow-col md:auto-cols-max" ref={scrl} onScroll={scrollCheck} id="scr">
              {
                articles.slice(0, 3).map((article, index) => {
                  return <ArticleCard article={article} key={index} />;
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid  gap-8 mt-9  md:grid-flow-col md:auto-cols-max">
              {
                articles.slice(0, 4).map((article, index) => {
                  return <ArticleCard article={article} key={index} />;
                })
              }
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid  gap-8 mt-9  md:grid-flow-col md:auto-cols-max">
              {
                articles.map((article, index) => {
                  return <ArticleCard article={article} key={index} />;
                })
              }
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <div>
        <div className="md:flex items-start">
          <div className='divide-y  p-3 space-y-0'>
            {
              articles.slice(0, 3).map((article, index) => (
                <div key={index} className="flex flex-col items-start md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-800  dark:hover:bg-heavy-metal-700 px-2 py-3">
                  <div className="flex flex-col justify-between leading-normal space-y-3">
                    <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 text-sm font-medium uppercase">{article.category}</span>
                    <h5 className="mb-2 text-xl	 font-medium tracking-tight text-heavy-metal-900 dark:text-white">{article.title}</h5>
                    <p className="mb-3 font-normal text-heavy-metal-500 dark:text-heavy-metal-400">{article.description}</p>
                    <a href="" className="my-4">{"بواسطة " + article.author}</a>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="group relative w-full md:h-[590px] h-64 aspect-square text-white bg-gray-900">
            <img src={articles[0].imgUrl} className="object-cover aspect-square w-full md:h-[590px] h-64 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,.2))] brightness-50" alt="" />
            <div className="absolute inset-x-0 z-10 bottom-5 p-4 space-y-3">
              <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 text-sm font-medium uppercase">{articles[0].category}</span>
              <h5 className="mb-2 text-xl	 font-medium tracking-tight text-white ">{articles[0].title}</h5>
              <p className="mb-3 font-normal text-white">{articles[0].description}</p>
              <a href="" className="my-4">{"بواسطة " + articles[0].author}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularArticles