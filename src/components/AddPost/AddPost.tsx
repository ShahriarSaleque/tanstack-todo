import React from 'react'
import AddPostForm from './AddPostForm.tsx'

const AddPost = () => {
  const [newPost, setNewPost] = React.useState<string>("");

  const handleAddNewPost = () => {
    console.log('called', newPost);
  }

  return (
    <AddPostForm newPost={newPost} setNewPost={setNewPost} handleAddNewPost={handleAddNewPost}/>
  )
}

export default AddPost