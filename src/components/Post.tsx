import React from "react"
import { useGetPosts } from "../hooks/useGetPost.ts"
import Loader from "./Loader/Loader.tsx"
import Error from "./Error/Error.tsx"

const Post = () => {
  // use the tanstack query to get the posts data

  const { data, isPending, error } = useGetPosts()

  console.log(data)

  if (error) {
    return <Error message={error.message} />
  }

  if (isPending) {
    return <Loader />
  }

  return <div>Post</div>
}

export default Post
