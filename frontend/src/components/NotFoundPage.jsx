import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
        <section className="notFound">
            <h1>Page Not Found!</h1>
            <h1>404</h1>
            <Link to="/">Go back to Home</Link>
        </section>
    </>
  )
}

export default NotFoundPage