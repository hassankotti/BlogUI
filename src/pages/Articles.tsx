import React, { useState,useEffect } from 'react'
import articles from '../data/Articles'
import Layout from '../layouts/Layout'
import NewsLetter from '../sections/NewsLetter'
import LoadingSpinner from '../components/LoadingSpinner'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Artilces = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);
  return (
    <Layout>
      <Helmet>
        <title>Blog | المقالات</title>
        <meta name="articles" content='article' />
      </Helmet>
      <div className='container py-6 flex-col space-y-10 bg-gray-50 my-8 dark:bg-heavy-metal-900 min-h-screen'>
        <h1 className='font-medium text-2xl  text-center dark:text-white'> المقالات</h1>
        <div className='grid md:grid-cols-3 gap-6 relative'>
          {isLoading ? <LoadingSpinner /> : (
            <>
              {articles ?
                (
                  articles.map((article, index) => (
                    <Link to={`/article/${article.id}`} className="flex justify-center" key={index}>
                      <div className="bg-white dark:bg-heavy-metal-800/50 max-w-sm">
                        <a href="#!">
                          <img className="object-cover aspect-video" src={article.imgUrl ?? '-'} alt="" />
                        </a>
                        <div className="p-4 space-y-4 ">
                          <span className="border-r-2 border-teal-500 pr-2 text-sm font-medium uppercase">{article.category ?? '-'}</span>
                          <h5 className="text-heavy-metal-900 dark:text-heavy-metal-50 text-xl font-medium">{article.title ?? '-'}</h5>
                          <p className="text-heavy-metal-700 dark:text-heavy-metal-200 text-base">
                            {article.description ?? "No description"}
                          </p>
                          <a href="" className='text-sm'>{"بواسطة " + article.author ?? '-'}</a>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (<div>Loading</div>)}
            </>)}
        </div>

      </div>
      <NewsLetter />
    </Layout>
  )
}

export default Artilces