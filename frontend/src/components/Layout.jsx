import React from 'react'
import TopNav from './TopNav'

const Layout = ({ children }) => {
  return (
    <div className = "content-container">
        <TopNav />
        <div className = "content-list">
            { children }
        </div>
    </div>
  )
}

export default Layout