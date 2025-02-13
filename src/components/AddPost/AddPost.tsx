import React from 'react';
import AddPostForm from './AddPostForm.tsx';
import { useCreatePost } from '../../hooks/apiHooks.ts';
import { PostObj } from '../../types.ts';

const AddPost = () => {
  const [newPost, setNewPost] = React.useState<string>('');

  const createPostMutation = useCreatePost();

  const handleAddNewPost = () => {
    const postObj: PostObj = {
      userId: 1,
      id: Math.floor(Math.random() * 100),
      title: newPost,
      body: newPost,
    };

    // call the createPost mutation
    createPostMutation.mutate(postObj);
    setNewPost('');
  };

  return (
    <AddPostForm
      newPost={newPost}
      setNewPost={setNewPost}
      handleAddNewPost={handleAddNewPost}
    />
  );
};

export default AddPost;
