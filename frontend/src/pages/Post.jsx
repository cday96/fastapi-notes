import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaArrowLeft, FaRegTrashAlt } from "react-icons/fa"
import NavIcon from "../components/NavIcon"

const Post = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
    })

    const navigate = useNavigate()
    const params = useParams()
    const postId = params.id

    useEffect(() => {
        if (postId !== "create") getPost()
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
            if (postId !== "create") {
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
            <div className="flex items-center justify-between mb-2">
                <NavIcon to={"/"} icon={<FaArrowLeft size="16" />} tooltip={"Go Back"} />
                {postId !== "create" && (
                    <button className="delete-button group" type="submit" onClick={deletePost}>
                        <FaRegTrashAlt />
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className=" p-2 border-solid border-2 border-slate-600 rounded">
                        <div className="relative">
                            <input className="form-title-input" id="title" name="title" value={post?.title} placeholder="Title..." onChange={handleChange} required />
                        </div>
                        <Divider />
                        <div className="relative">
                            <textarea className="form-input" id="content" name="content" value={post?.content} placeholder="Content..." onChange={handleChange} required />
                        </div>
                    </div>
                    <button className="save-button" type="submit">
                        Save Post
                    </button>
                </div>
            </form>
        </div>
    )
}

const Divider = () => <hr className="divider-hr" />

export default Post
