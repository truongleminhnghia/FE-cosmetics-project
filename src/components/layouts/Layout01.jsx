import React from 'react'
import TopHeader from '../ui/TopHeader'
import Header1 from '../ui/Header1'
import { Outlet } from 'react-router-dom'
import Footer01 from '../ui/Footer01'
import Menu from '../navigations/Menu'

const Layout01 = () => {
  return (
    <div>
      <TopHeader />
      <Header1 />
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer01 />
    </div>
  )
}

export default Layout01
