import React from 'react';
import './Card.css';

const Card = ({ userId, id, title, body, editPost, deletePost }: CardProps) => {
  return (
    <div className="card">
      <h1>Card - {id}</h1>
      <h2 className="card-title">{title}</h2>
      <p className="card-body">{body}</p>
      <p className="card-footer">User ID: {userId}</p>
      <div>
        <button className="edit" onClick={editPost}>
          Edit
        </button>
        <button className="delete" onClick={deletePost}>
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
  editPost: () => void;
  deletePost: () => void;
};

export default Card;
