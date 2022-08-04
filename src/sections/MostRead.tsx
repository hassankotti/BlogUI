import { ChevronLeftIcon } from "@heroicons/react/outline";
import articles from "../data/Articles";
import React, { useState } from "react";

const MostRead = () => {
    return (
        <div className="py-8 mb-0">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-normal text-gray-900 dark:text-gray-200"> الاكثر قراءة</h2>
                <a href="#" className="flex items-center justify-center space-x-reverse space-x-2 ">
                    <span className="text-base font-normal text-gray-900 dark:text-gray-200 leading-6 align-top pb-1">عرض المزيد</span>
                    <ChevronLeftIcon className="w-6 h-6 text-teal-500 stroke-current" />
                </a>
            </div>

            <div className="flex-col">
                <div className="grid gap-8 my-9 grid-flow-col auto-cols-max overflow-hidden overflow-x-scroll no-scrollbar">
                    {articles.slice(0, 4).map((article, index) => (
                        <div key={index} className="group relative w-[280px] h-[250px]">
                            <div className="absolute inset-0 z-0"
                                style={{
                                    background: `linear-gradient(180deg,rgba(0,0,0,.2), rgba(0,0,0,.5),rgba(0,0,0,1)), url(${article.imgUrl})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundBlendMode: "multiply",
                                }} >



                            </div>
                            <div className="">
                                <h3 className="mt-6 text-sm text-white dark:text-white">
                                    <a href={article.href}> {article.title} </a>
                                </h3>
                                <p className="text-base font-semibold text-white">{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-5 gap-3 place-items-start">
                    <div className="flex-col  col-span-3 row-span-3">
                        <img src="https://s3-alpha-sig.figma.com/img/7305/4b83/f05b5512a1287cc074983ac59d4e69c0?Expires=1660521600&Signature=MSyys3FFlHcMS3rB5fWHZAQs6R43IwKUUh-ZrXqN5BSmqL5YyjgEB1XtwrpvYVocxpmPT81TXRVIZJ3QTmOwpcFTk3QdqL7PCxXJwGis8puuXJfgL8URokV6~Fc5EKTcD3Y19bFgO98tzhJYHfgJqg5w29JDMz0yfqzrUpe~noigFqgqP-ekBac-g9GDr9eMrOxDmYa71XnzcUtRnJrgLegSZ44HJpUD9SvNsZ2uZMOqJ0Re3sHp7~FpbtP6l20J~oQQ-IJAJKppvW7bFwOKnJ03gZExaMp~RYmGqPUUt6Gf6oSnzsHkw~vzmAd-fagqJcUoLjEVzYxDF~tEHNNNRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="object-cover" alt="Tailwind Play" />

                        <div className="flex-col items-start h-[0px]  py-3">
                            <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 text-xs font-medium uppercase">أفكار البزنس </span>
                            <h2 className="mt-2 block transform text-sm font-semibold text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline dark:text-gray-200 lg:text-lg">ماهو مستقبل التجارة الالكترونية</h2>
                            <p className="my-3 break-words text-sm font-medium text-gray-600 dark:text-gray-300">ترليون في عام 2014 إلى 4.5 في عام 2024 من المتوقع ا تريد إلى 1.5</p>
                            <a href="" className="my-4">بواسطة عبد الله عادل</a>
                        </div>
                    </div>
                    {
                        articles.slice(0, 3).map((article, index) => (
                            <a key={index} href="#" className="flex flex-col col-span-2 items-center   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-fit w-full h-64 md:h-auto md:w-48" src={article.imgUrl} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 text-xs font-medium uppercase">{article.category}</span>
                                    <h5 className="mb-2 text-base font-medium tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default MostRead