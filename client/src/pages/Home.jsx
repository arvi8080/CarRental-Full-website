import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Login from '../components/Login'
import { useAppContext } from '../context/AppContext'

const Home = () => {
  const { user, setUser } = useAppContext();

  // Pass this to Login to set login state
  const handleLogin = (userObj) => setUser(userObj);

  return (
    <>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Hero />
          <FeaturedSection />
          <Banner />
          <Testimonial />
          <NewsLetter />
        </>
      )}
    </>
  )
}

export default Home