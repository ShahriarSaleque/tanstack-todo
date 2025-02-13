import React from 'react';
import './Card.css';
import { PostObj } from '../../types';

const Card = ({ userId, id, title, body, editPost, deletePost }: CardProps) => {
  const createPostObj = () => {
    return {
      userId,
      id,
      title,
      body,
    };
  };

  return (
    <div className="card">
      <h1>Card - {id}</h1>
      <h2 className="card-title">{title}</h2>
      <p className="card-body">{body}</p>
      <p className="card-footer">User ID: {userId}</p>
      <div>
        <button className="edit" onClick={() => editPost(createPostObj())}>
          Edit
        </button>
        <button className="delete" onClick={() => deletePost(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

type CardProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
  editPost: (postObj: PostObj) => void;
  deletePost: (id: number) => void;
};

export default Card;
