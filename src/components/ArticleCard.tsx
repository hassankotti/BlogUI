import React from 'react'
import ArticleCardType from '../types/ArticleType';
const ArticleCard = ({ article }: ArticleCardType) => {
    return (
        <div className="w-64 border bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-col items-center overflow-hidden">
                <img className="h-[230px] w-[270px] object-cover" src={article.imgUrl} alt="" />
                <div className="flex-col items-start px-3 py-3">
                    <span className="border-spacing-2 border-r-2 border-teal-500 pr-2 text-xs font-medium uppercase">{article.category}</span>
                    <h2 className="block mt-2 text-sm lg:text-lg font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{article.title}</h2>
                    <p className="my-3 break-words text-sm text-gray-600 font-medium">{article.description}</p>
                    <a href="" className="my-4">{"بواسطة " + article.author}</a>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard