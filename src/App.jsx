
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="container p-5">
          <Routes>
            <Route exact path="/" element={<TodoList />} />
            <Route exact path="/add" element={<AddTodoForm />} />
            <Route exact path="/edit/:id" element={<EditTodoForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
