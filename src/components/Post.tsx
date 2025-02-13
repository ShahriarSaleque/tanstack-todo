import React from 'react';
import {
  useDeletePost,
  useGetPosts,
  useUpdatePost,
} from '../hooks/apiHooks.ts';
import Loader from './Loader/Loader.tsx';
import Error from './Error/Error.tsx';
import Card from './Card/Card.tsx';
import { PostObj } from '../types.ts';
import { deletePost } from '../services/api.ts';

const Post = () => {
  // use the tanstack query to get the posts data
  const { data, isPending, error } = useGetPosts();

  // bring in the deletePost mutation and updatePost mutation
  const updatePostMutation = useUpdatePost();
  const deletePostMutation = useDeletePost();

  const updatePostHandler = (postObj) => {
    const updatedTitle = prompt('Enter new title', postObj.title);
    updatePostMutation.mutate({ ...postObj, title: updatedTitle });
  };

  const deletePostHandler = (id: number) => {
    deletePostMutation.mutate(id);
  };

  console.log(data);

  if (error) {
    return <Error message={error.message} />;
  }

  if (isPending) {
    return <Loader />;
  }

  return data?.map((post: PostObj, index: number) => (
    <div key={index}>
      <Card
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
        editPost={updatePostHandler}
        deletePost={deletePostHandler}
      />
    </div>
  ));
};

export default Post;
