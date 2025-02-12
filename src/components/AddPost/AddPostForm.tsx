import React from 'react';
import './AddPost.css';

const AddPostForm = ({newPost, setNewPost, handleAddNewPost}: AddPostFromProps) => {
  return (
    <div>
        <input 
         type="text"
         value={newPost}
         onChange={(e) => setNewPost(e.target.value)}
         placeholder="New Post"
         className="input"
        />
        <button 
         onClick={handleAddNewPost}
         className="button"
        > Add Post</button>
    </div>
  )
}

type AddPostFromProps = {
    newPost: string;
    setNewPost: (newPost: string) => void;
    handleAddNewPost: () => void;
}

export default AddPostForm