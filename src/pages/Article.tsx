import React, { useState, useEffect } from 'react'
import articles from '../data/Articles'
import Layout from '../layouts/Layout'
import ArticleBody from '../sections/ArticleBody'
import ArticlesHero from '../sections/ArticlesHero'
import Comments from '../sections/Comments'
import NewsLetter from '../sections/NewsLetter'
import Tags from '../sections/Tags'
import LoadingSpinner from '../components/LoadingSpinner'
import Helmet from 'react-helmet'
import { useParams } from 'react-router-dom'; import NoData from '../components/NoData';
const Article = () => {
    let params = useParams < article_params>();
    const article = articles[params.id ?? 0];
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
                <title>Blog | {article.title ?? ''}</title>
                <meta name="article" content={article.title ?? ''} />
            </Helmet>
            <ArticlesHero article={article} />
            <div className='relative min-h-screen'>
                {isLoading ? <LoadingSpinner /> : (
                    article ? (<div className='container flex-col space-y-12  my-8 bg-white dark:bg-heavy-metal-800'>
                        <ArticleBody article={article.body} />
                        <Tags tags={article.tags} />
                        <Comments comments={article.comments} />
                    </div>) : (<NoData />))}
            </div>
            <NewsLetter />
        </Layout>
    )
}
type article_params = {
    id: string;
};
export default Article