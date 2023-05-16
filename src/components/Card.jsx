import React from "react";
import { Link } from "react-router-dom";

function Card({ todo, handleDelete }) {
  return (
    <div className="card px-0 mb-3">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.body}</p>
        <Link to={`/edit/${todo.id}`} className="btn btn-sm btn-primary me-2">
          Update
        </Link>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
