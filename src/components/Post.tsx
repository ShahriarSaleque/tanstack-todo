import React from "react"
import { useGetPosts } from "../hooks/useGetPost.ts"
import Loader from "./Loader/Loader.tsx"
import Error from "./Error/Error.tsx"
import Card from "./Card/Card.tsx"
import { PostObj } from "../types.ts"

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

  return (
    data?.map((post: PostObj, index: number ) => (
      <div key={index}>
      <Card userId={post.userId} id={post.id} title={post.title} body={post.body} />
      </div>
    ))
  )
}

export default Post
