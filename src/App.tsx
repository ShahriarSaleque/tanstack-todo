import React from 'react';
import Post from './components/Post.tsx';

function App() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">TanStack Query Demo</h1>
      <Post />
    </div>
  );
}

export default App;
