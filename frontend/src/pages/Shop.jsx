import React from 'react'
import Hero from '../components/hero/hero'
import Popular from "../components/popular/popular"
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newcollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop