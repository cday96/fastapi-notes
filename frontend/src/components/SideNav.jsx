import React from "react"
import NavIcon from "./NavIcon"
import { FaHome, FaPlus } from "react-icons/fa"

const SideNav = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">
            <NavIcon to={"/"} icon={<FaHome size="28" />} tooltip="View Posts" />
            <NavIcon to={"/create"} icon={<FaPlus size="28" />} tooltip="Create Post" />
        </div>
    )
}

export default SideNav
