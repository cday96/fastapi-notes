import React from "react"
import NavIcon from "./NavIcon"
import { FaEdit } from "react-icons/fa"

const PostItem = ({ post }) => {
    return (
        <div className="post">
            <div className="post-content">
                <p className="post-title">{post.title}</p>
                <p className="post-text">{post.content}</p>
            </div>
            <NavIcon to={`/${post.id}`} icon={<FaEdit size="28" />} tooltip={"Edit Post"} />
        </div>
    )
}

export default PostItem
