import React from "react"
import "./Card.css"

const Card = ({ userId, id, title, body }: CardProps) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-body">{body}</p>
      <p className="card-footer">
        User ID: {userId} | Post ID: {id}
      </p>
    </div>
  )
}

type CardProps = {
  userId: number
  id: number
  title: string
  body: string
}

export default Card
