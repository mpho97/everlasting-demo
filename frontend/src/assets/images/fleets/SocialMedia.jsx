import React from 'react'
import Img1 from '../assets/images/fleets/fleet1.jpg'
import Img2 from '../assets/images/fleets/fleet2.jpg'
import Img3 from '../assets/images/fleets/fleet3.jpg'
import Img4 from '../assets/images/fleets/fleet4.jpg'
import Img5 from '../assets/images/fleets/fleet5.jpg'
import Img6 from '../assets/images/fleets/fleet6.jpg'
import Img7 from '../assets/images/fleets/fleet7.jpg'
const SocialMedia = () => {
  return (
    <section className="social-media">
        <br />
        <h1>Everlasting Funeral Tik Tok Feed</h1>
        <br/>
        <div className="wrapper-grid">
          <div>
          <img src={Img1} />
          </div>
          <div>
            <img src={Img2} />
           </div>
           <div>
            <img src={Img3}/>
            </div>
            <div>
             <img src={Img4} />
             </div>
             <div>
             <img src={Img5} />
             </div>
             <div>
             <img src={Img6} />
             </div>
             <div>
             <img src={Img7} />
             </div>
        </div>
      </section>
  )
}

export default SocialMedia