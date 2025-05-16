import React from 'react'
import MainNavbar from '../components/MainNavbar'

import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
        <header>
            <MainNavbar />
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default DefaultLayout