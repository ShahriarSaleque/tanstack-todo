import React from 'react';
import Post from './components/Post.tsx';
import AddPost from './components/AddPost/AddPost.tsx';

function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">TanStack Query Demo</h1>
      <AddPost />
      <Post />
    </div>
  );
}

export default App;
