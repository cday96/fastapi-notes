import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

const Post = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
    })

    const navigate = useNavigate()
    const params = useParams()
    const postId = params.id

    useEffect(() => {
        if (postId !== "add") getPost()
    }, [postId])

    const getPost = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/posts/${postId}`)
        const data = res.data
        setPost(data)
    }

    const handleChange = e => {
        setPost(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const postData = {
            title: post.title,
            content: post.content,
        }
        console.log(postId)
        try {
            if (postId !== "add") {
                const res = await axios.put(`http://127.0.0.1:8000/posts/${postId}`, postData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            } else {
                const res = await axios.post(`http://127.0.0.1:8000/posts/`, postData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            }
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async e => {
        e.preventDefault()
        await axios.delete(`http://127.0.0.1:8000/posts/${postId}`)
        navigate("/")
    }

    return (
        <div>
            <Link to={"/"}>Go Back</Link>
            {postId !== "add" && (
                <button className="w-36 btn btn-lg" type="submit" onClick={deletePost}>
                    Delete
                </button>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input className="w-full pr-40 bg-neutral input input-lg text-zinc-300" id="title" name="title" value={post?.title} placeholder="Title..." onChange={handleChange} required />
                    </div>
                    <div className="relative">
                        <textarea className="w-full pr-40 bg-neutral input input-lg text-zinc-300" id="content" name="content" value={post?.content} placeholder="Content..." onChange={handleChange} required />
                    </div>
                    <button className="absolute top-0 right-0 w-36 btn btn-lg" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Post
