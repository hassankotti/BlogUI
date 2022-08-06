import React, { useEffect, useState } from 'react'
import Feature from '../sections/Feature';
import Layout from '../layouts/Layout';
import Hero from '../sections/Hero';
import MostRead from '../sections/MostRead';
import NewsLetter from '../sections/NewsLetter';
import PopularArticles from '../sections/PopularAritcles';
import LoadingSpinner from '../components/LoadingSpinner';
import Helmet from 'react-helmet'

const Home = () => {

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
        <title>Blog | الرئيسية</title>
        <meta name="articles" content='article' />
      </Helmet>
      {/*  Site sections */}
      <Hero />
      <div className='max-w-7xl mx-auto flex-col divide-y dark:divide-heavy-metal-800 space-y-12 relative min-h-screen'>
        {isLoading ? <LoadingSpinner /> : (
          <>
            <MostRead />
            <Feature />
            <PopularArticles />
          </>)}
      </div>
      <NewsLetter />
    </Layout>
  );
}

export default Home