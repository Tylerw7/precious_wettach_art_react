import React from 'react'
import NavBar from '../shared/NavBar'
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout