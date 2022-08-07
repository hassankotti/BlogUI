import { ChevronLeftIcon } from "@heroicons/react/outline";
import articles from "../data/Articles";
import React, { useState } from "react";
const MostRead = () => {
    return (
        <section className="py-8 mb-0">
            <div className="flex justify-between items-center">
                <h2 className="md:text-2xl text-lg font-normal text-heavy-metal-900 dark:text-heavy-metal-200"> الاكثر قراءة</h2>
                <a href="#" className="flex items-center justify-center space-x-reverse space-x-2 ">
                    <span className="text-base font-normal text-heavy-metal-900 dark:text-heavy-metal-200 leading-6 align-top pb-1">عرض المزيد</span>
                    <ChevronLeftIcon className="w-6 h-6 text-teal-500 stroke-current" />
                </a>
            </div>

            <div className="flex-col">
                <div className="grid gap-8 my-9 md:grid-flow-col md:auto-cols-max overflow-hidden overflow-x-scroll no-scrollbar space-y-6">
                    {articles.slice(0, 3).map((article, index) => (
                        <div key={index} className="group relative w-full md:w-[405px]  h-[280px] aspect-square text-white bg-heavy-metal-900 mt-4">
                            <img src={article.imgUrl} className="object-cover   aspect-square w-[594px] h-[353px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,.2))] brightness-50" alt="" />

                            <div className="absolute inset-x-0 z-10 bottom-2 p-4 space-y-3">
                                <h3 className="text-sm md:text-lg  font-medium dark:text-white">
                                    {article.title}
                                </h3>
                                <p className="text-base font-normal dark:text-heavy-metal-200">{article.description}</p>
                                <p className="text-sm font-medium dark:text-heavy-metal-100">{"بواسطة " + article.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6 place-items-start ">
                    <div className="flex-col  md:row-span-3  bg-white dark:bg-heavy-metal-800 rounded h-full">
                        <img src={articles[0].imgUrl} className="object-cover md:w-full rounded-t aspect-video max-w-full max-h-1/3" alt="" />
                        <div className="flex-col items-start py-3 px-4 ">
                            <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 md:text-sm font-medium uppercase">{articles[0].category}</span>
                            <h2 className="block mt-2 text-lg lg:text-xl font-semibold text-gray-800 transform dark:text-gray-50">{articles[0].title}</h2>
                            <p className="my-3 break-words text-sm text-heavy-metal-400 font-medium">{articles[0].description}</p>
                            <a href="" className="my-4 ">{"بواسطة " + articles[0].author}</a>
                        </div>
                    </div>
                    {
                        articles.slice(0, 3).map((article, index) => (
                            <div key={index} className="flex items-start  hover:bg-gray-100 dark:border-gray-800 dark:bg-heavy-metal-900 dark:hover:bg-heavy-metal-700 ">
                                <img className="object-fit w-48 h-40 rounded shadow-sm aspect-square" src={article.imgUrl} alt="" />
                                <div className="flex flex-col justify-between pr-4 leading-normal space-y-3">
                                    <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 text-sm font-medium uppercase">{article.category}</span>
                                    <h5 className="mb-2 md:text-xl	 font-medium tracking-tight text-heavy-metal-900 dark:text-white">{article.title}</h5>
                                    <p className="mb-3 font-normal md:text-md text-sm text-heavy-metal-500 dark:text-heavy-metal-400">{article.description}</p>
                                    <a href="" className="my-4 md:text-base text-xs">{"بواسطة " + article.author}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default MostRead