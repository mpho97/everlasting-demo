import React, {useState} from 'react'
import ResponsiveNavBar from './ResponsiveNavBar'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showNavBar, SetShowNavbar] = useState(false)
  //const HandleOpenMenu=()=>{
    // SetisOpened(isOpened)
 // }
  return (
  <>
  <ul className="navigation">
		<li><Link to="/">HOME</Link></li>
		<li><Link to="About">ABOUT</Link></li>
		<li><Link to="Funeral_Plans">FUNERAL PLANS</Link></li>
		<li><Link to="Gallery">GALLERY</Link></li>
		<li><Link to="Contact">CONTACT</Link></li>
	</ul>
   <div className="menu">
    <span className="fas fa-hamburger" onClick={()=> SetShowNavbar(curr => !curr)}></span>
  </div>
  {showNavBar && <ResponsiveNavBar/>}
  </>
  )
}

export default Navbar