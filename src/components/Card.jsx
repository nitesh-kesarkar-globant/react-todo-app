import { Link } from "react-router-dom";

function Card({ todo, handleDelete }) {
  return (
    <div className="card px-0 mb-3 shadow bg-body-tertiary rounded">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.body}</p>

        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/edit/${todo.id}`} className="btn btn-sm btn-outline-primary me-2">
            Update
          </Link>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
