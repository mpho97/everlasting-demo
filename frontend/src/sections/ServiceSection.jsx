import React from 'react';
import Vid from '../assets/images/vid1.mp4';

const ServiceSection = () => {
  return (
    <section className="services">
        <div className="wrapper-flex">
          <div className="box first-child">
            <h2>FUNERAL COVERS</h2>
            <p>From as little as R135.00 you can cover yourself and loved ones, with additional benefits to suite your needs.</p>
          </div>
           <div className="box">
            <h2>CASH POLICIES</h2>
            <p>One main member plus 6 additional members between 0 - 73 Years @ only R135/Month. Our joining fee is as little as R120.00</p>
          </div>
           <div className="box box-last">
            <h2>CATERING PLANS</h2>
            <p>We believe in compassion, attention to detail and excellent service. We strive to uphold these values in every funeral service we provide.</p>
          </div>
        </div>
        <div className="banner">
          <div className="banner-video">
            <video autoplay={true} muted plays-inline={true} className="back-video" width={400}>
              <source src={Vid} type="video/mp4"></source> 
            </video>
          </div>
          <div className="banner-content">
            <h1>Always At Your Service At Your Time of Need</h1>
            <h2>EVELASTING FUNERALS</h2>
            <p>Everlasting Funerals is providing affordable and professional funeral services to families in need. We have provided beautiful funerals to
            families for over 40 years. We pride ourselves on being upfront with our prices and having no hidden costs. We service all areas of Gauteng, Mpumalanga, North West & Polokwane. We're available 24 hours a day, 7 days a week, and are always there when you need us.</p>
          </div>
        </div>
      </section>
  )
}

export default ServiceSection