import { getPosts } from '../services/api.ts';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Post = () => {
  // use the tanstack query to get the posts data 

  const {data, isPending, error} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  if(error) {
    return <div>Error: {error}</div>
  }

  console.log(data);
  
  return (
    <div>Post</div>
  )
}

export default Post;