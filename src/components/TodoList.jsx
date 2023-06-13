import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../utils/localStorageUtil";
import useTodos from "../hooks/useTodos";
import Card from "./Card";
import NotFound from "./NotFound";
import LoadingSpinner from "./LoadingSpinner";

function TodoList() {
  const { todos, loading, error } = useTodos();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const result = confirm("Are you sure you want to delete the todo?");
    if (!result) {
      return;
    }

    deletePost(id);

    navigate(0);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Todos</h2>
        <Link to="add" className="btn btn-sm btn-success">
          Add Todo
        </Link>
      </div>

      {loading && <LoadingSpinner />}

      {error && <NotFound message={error} status="danger" />}

      {!error && !loading && todos?.length == 0 && (
        <NotFound message="No todos found!" status="info" />
      )}

      {todos?.length > 0 && (
        <div className="row">
          {todos.map((todo) => (
            <div className="col-md-4 col-sm-12" key={todo.id}>
              <Card todo={todo} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
