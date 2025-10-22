import React from 'react'
import ServiceSection from './ServiceSection'
import SocialMedia from './SocialMedia'
import BannerBlue from './BannerBlue'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className="home">
        <div className="wrapper">
          <h1>Welcome to Everlasting Funerals</h1>
          <p>We are established since 2015, we provide dignified Funerals services for our loved ones. We have a very good record in providing families with quality of funeral services.</p>
          <br />
          <Link to="Funeral_Plans" className="btn">GET A COVER</Link>
        </div>
      </section>
      <ServiceSection />
      <BannerBlue/>
      <SocialMedia/>
    </>
  )
}

export default Home