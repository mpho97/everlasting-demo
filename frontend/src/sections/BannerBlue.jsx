import React from 'react'

const BannerBlue = () => {
  return (
    <section className="banner-blue">
        <div className="banner-wrapper">
          <div className="wrapper-icon">
            <span className="fas fa-briefcase"></span>
            <h2>2015</h2>
            <p>Since</p>
          </div>
          <div className="wrapper-icon">
            <span className="fas fa-users"></span>
            <h2>2000</h2>
            <p>Satisfied Clients</p>
          </div>
          <div className="wrapper-icon">
            <span className="fas fa-car"></span>
            <h2>70</h2>
            <p>Fleet Size</p>
          </div>
          <div className="wrapper-icon">
            <span className="fas fa-user"></span>
            <h2>84</h2>
            <p>Team Members</p>
          </div>
        </div>
      </section>
  )
}

export default BannerBlue