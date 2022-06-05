import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import PostItem from "../components/PostItem"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const res = await axios.get("http://127.0.0.1:8000/posts")
        setPosts(res.data)
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts
