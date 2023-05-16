import { useEffect, useState } from "react";
import { fetchTodos } from "../utils/localStorageUtil";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodosData = async () => {
      try {
        const fetchedTodos = await fetchTodos();

        // throw new Error("Something went wrong! Please try again.");

        setTimeout(() => {
          setTodos(fetchedTodos);
          setLoading(false);
        }, 500);
      } catch (error) {
        setTimeout(() => {
          setError(error.message);
          setLoading(false);
          setTodos([]);
        }, 500);
      }
    };

    fetchTodosData();
  }, []);

  return { todos, loading, error };
}

export default useTodos;
