import React from 'react'
import articles from '../data/Articles'
import Layout from '../layouts/Layout'
import ArticleBody from '../sections/ArticleBody'
import ArticlesHero from '../sections/ArticlesHero'
import Comments from '../sections/Comments'
import Tags from '../sections/Tags'

const Articles = () => {
  const article = articles[0];
  return (
    <Layout>
      <ArticlesHero />
      <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex-col divide-y space-y-12 bg-white my-8'>
        <ArticleBody article={article.body} />
        <Tags tags={article.tags} />
        <Comments comments={article.comments} />
      </div>
    </Layout>
  )
}

export default Articles