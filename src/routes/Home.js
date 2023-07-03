import React from 'react'
import CoinSearch from '../components/CoinSearch'
import NewsArticles from '../components/NewsArticles'
import TopBanner from '../components/TopBanner'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div className='h-full'>
      <NewsArticles />
      <Trending />
      <CoinSearch coins={coins} />
     
    </div>
  )
}

export default Home