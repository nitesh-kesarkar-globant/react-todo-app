
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="container m-5">
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route exact path="/add" element={<AddTodoForm />} />
          <Route exact path="/edit/:id" element={<EditTodoForm />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
