import React from 'react'
import axios from "axios"
import {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Post = () => {
  const [post, setPost] = useState(null)
  const [formData, setFormData] = useState({
    title: post.title ? post.title : "",
    content: post.content ? post.content : ""
  })

  const {title, content} = formData

  const navigate = useNavigate()
  const params = useParams()
  const postId = params.id

  useEffect(() => {
    if (postId !== "add") getPost()
  }, [postId])

  const getPost = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/posts/${postId}`)
      setPost(res.data)
      console.log(post)
  }

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      const postData = {
        title: title,
        content: content,
      }
      try {
        if (postId !== "add") {
          const res = await axios.put(`http://127.0.0.1:8000/posts/${postId}`, postData, {
            headers: {
              "Content-Type": "application/json"
            }
          })
        }
        const res = await axios.put(`http://127.0.0.1:8000/posts/`, postData, {
            headers: {
              "Content-Type": "application/json"
            }
        })
        navigate("/")
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div>
        <Link to={'/'}>Go Back</Link>
        <form>
            <h2 onChange={handleChange}>{post.title}</h2>
            <textarea onChange={handleChange}>{post.content}</textarea>
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Post