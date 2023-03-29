import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Nav from './Nav'
const Layout = ({children}) => {
  return (
   <>
   <Nav />
{children}
   <Footer />
   </>
  )
}

export default Layout