import React from 'react'
import { useState } from "react"
import PostItem from "../components/PostItem"

let dummyData = [{"id":"1", "title":"Get milk", "content":"Get that milk today" }, {"id":"2", "title":"Get bread", "content":"Get that bread today" }]

const Posts = () => {

const [posts, setPosts] = useState(dummyData)

  return (
    <div>
      <h1>Posts</h1>
        {posts.map((post) => (
          <PostItem key={ post.id } post={post} />
        ))}
    </div>
  )
}

export default Posts