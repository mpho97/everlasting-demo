import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
          <div className="box-left footer-box">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">HOME</a></li>
					    <li><a href="About">ABOUT</a></li>
					    <li><a href="funeral_policies">FUNERAL PLANS</a></li>
					    <li><a href="Gallery">GALLERY</a></li>
					    <li><a href="contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="box-center footer-box">
            <h2>Business Hours</h2>
            <ul>
              <li>Mon 08:00 - 16:30</li>
              <li>Tue 08:00 - 16:30</li>
              <li>Wed 08:00 - 16:30</li>
              <li>Thu 08 :00 - 16:30</li>
              <li>Fri 08:00 - 16:30</li>
              <li>Sat 08:00 - 13:00</li>
              <li>Sun Closed</li>
            </ul>
          </div>
          <div className="box-right footer-box">
            <h2>Contact Us</h2>
            <div className="contact-us">
              <ul>
                <li>
                  <span className="fas fa-map-marker"></span>
                  <p>364 Allemansdrift B, Mbibane, Libangeni Mpumalanga 0449</p>
                </li>
                   <li>
                  <span className="fas fa-phone"></span>
                  <p>076 145 6114 | 071 130 9065</p>
                </li>
                <li>
                  <span className="fas fa-envelope"></span>
                  <p>everlastingFuneral@gmail.com</p>
                </li>
              </ul>
              <div className="socials">
                <ul>
                  <li><i className="fab fa-tiktok"></i></li>
                  <li><i className="fab fa-facebook"></i><a href="https://www.facebook.com"></a></li>
                  <li><i className="fab fa-instagram"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p>Copyright &copy; 2025 | All rights reserved | Created by ViolTechSolutions</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer