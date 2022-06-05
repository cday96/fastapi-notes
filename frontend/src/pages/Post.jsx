import React from 'react'
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

let dummyData = [{"id":"1", "title":"Get milk", "content":"Get that milk today" }, {"id":"2", "title":"Get bread", "content":"Get that bread today" }]

const Post = () => {

  const params = useParams()
  const postId = params.id

  const postItem = dummyData.find((post) => post.id === postId)

  const [post, setPost] = useState(postItem)

  return (
    <div>
        <Link to={'/'}>Go Back</Link>
        <button>Delete</button>
        <h2>{post.title}</h2>
        <textarea>{post.content}</textarea>
        <button>Save</button>
    </div>
  )
}

export default Post