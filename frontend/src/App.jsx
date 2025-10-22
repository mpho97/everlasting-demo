import Footer from './components/Footer'
import Header from './components/Header'
import Home from './sections/Home'
import ServiceSection from './sections/ServiceSection'
import BannerBlue from './sections/BannerBlue'
import SocialMedia from './sections/SocialMedia'
import About from './pages/About'
import FuneralPlans from './pages/FuneralPlans'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Loader from './components/Loader'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  },[])
  return (
    <>
   { isLoading ? (<Loader isLoading={isLoading} />):(
       <BrowserRouter>
      <div classNameName="container" >
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Funeral_Plans" element={<FuneralPlans />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
       
      </div>
       </BrowserRouter>)}
      </>
    
  )
}

export default App