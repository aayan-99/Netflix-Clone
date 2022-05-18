import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main/>
    <Row rowID='1' title='Upcomming' fetchURL={requests.requestUpcomming}/>
    <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
    <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
    <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
    </>
  )
}

export default Home