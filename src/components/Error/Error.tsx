import React from 'react';
import './Error.css';

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
};

type ErrorProps = {
  message: string;
};

export default Error;
