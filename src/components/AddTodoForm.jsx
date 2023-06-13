import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addPost } from "../utils/localStorageUtil";

function AddTodoForm() {
  const [valid, setValid] = useState(false);
  const [todo, setPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    if (todo.title.length > 0 && todo.body.length > 0) {
      setValid(true);
    }
  }, [todo]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: todo.title,
      body: todo.body,
    };

    addPost(newPost);
    navigate(-1);
  };

  return (
    <div>
      <h2 className="mb-4">Add Todo</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group  mb-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={todo.title}
            onChange={(e) => setPost({ ...todo, title: e.target.value })}
          />
        </div>
        <div className="form-group  mb-4">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            id="body"
            value={todo.body}
            onChange={(e) => setPost({ ...todo, body: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-success me-2"
          disabled={!valid}
        >
          Add
        </button>
        <Link to="/" className="btn btn-sm btn-outline-dark">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default AddTodoForm;
