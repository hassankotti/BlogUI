import React from 'react'
import Feature from '../sections/Feature';
import Layout from '../layouts/Layout';
import Hero from '../sections/Hero';
import MostRead from '../sections/MostRead';
import NewsLetter from '../sections/NewsLetter';
import PopularArticles from '../sections/PopularAritcles';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className='max-w-7xl mx-auto flex-col divide-y space-y-12'>
        <MostRead />
        <Feature />
        <PopularArticles />
      </div>
      <NewsLetter />
    </Layout>
  );
}

export default Home