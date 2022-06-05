import React from "react"
import { Link } from "react-router-dom"

const PostItem = ({ post }) => {
    return (
        <div>
            <Link to={`/${post.id}`}>
                <p>{post.title}</p>
                <p>{post.content}</p>
            </Link>
        </div>
    )
}

export default PostItem
