import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar1 from '../Navbar1'
import Footer_section from '../Footer_section'

const Layout = () => {
  return (
    <div>
        <Navbar1/>
      <Outlet/>
      <Footer_section/>

      <ScrollRestoration/>
      
    </div>
  )
}

export default Layout
