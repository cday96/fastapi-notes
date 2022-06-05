import React from 'react'
import { FaHome, FaEdit } from "react-icons/fa"

const SideNav = () => {
  return (
    <div className = "fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
        <SideNavIcon icon = { <FaHome size = "28" />} tooltip = "View Posts" />
        <SideNavIcon icon = { <FaEdit size = "28" />} tooltip = "Create Post" />
    </div>
  )
}

const SideNavIcon = ({ icon, tooltip = "tooltip 💡" }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {tooltip}
        </span>
    </div>
)

export default SideNav