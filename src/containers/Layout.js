import React from "react"
import { Outlet } from "react-router-dom"
import "../styles/containers/Layout.scss"

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default Layout
