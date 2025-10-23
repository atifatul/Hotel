import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar1 from '../Navbar1'
import Footer_section from '../Footer_section'
import { Company_context } from '../Context/Company_context'

const Layout = () => {
  return (
    <div>
      <Company_context>
        <Navbar1/>
      <Outlet/>
      <Footer_section/>

      <ScrollRestoration/>
      </Company_context>
      
    </div>
  )
}

export default Layout
