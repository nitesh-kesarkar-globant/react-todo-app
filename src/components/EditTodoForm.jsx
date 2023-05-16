import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { editPost, searchPostById } from "../utils/localStorageUtil";

function EditTodoForm() {
  const [todo, setPost] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const existingPost = searchPostById(id);

    if (!existingPost) {
      navigate("/");
    }
    setPost(searchPostById(id));
  }, []);

  const handleSubmit = () => {
    const updatedPost = {
      id: todo.id,
      title: todo.title,
      body: todo.body,
    };
    editPost(updatedPost);
    navigate("/");
  };

  return (
    <div>
      <h2 className="mb-4">Edit Todo</h2>
      <form className="my-5">
        <div className="form-group mb-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={todo?.title}
            onChange={(e) => setPost({ ...todo, title: e.target.value })}
          />
        </div>
        <div className="form-group  mb-4">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            id="body"
            value={todo?.body}
            onChange={(e) => setPost({ ...todo, body: e.target.value })}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-sm btn-primary me-2">
          Update
        </button>
        <Link to="/" className="btn btn-sm btn-outline-dark">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default EditTodoForm;
