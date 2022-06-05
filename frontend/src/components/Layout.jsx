import React from 'react'
import TopNav from './TopNav'

const Layout = () => {
  return (
    <div className = "content-container">
        <TopNav />
        <div className = "content-list">
            {/* Add PostItem here */}
        </div>
    </div>
  )
}

export default Layout