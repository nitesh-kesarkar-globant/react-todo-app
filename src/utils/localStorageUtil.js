const STORAGE_KEY = "todos";

export const fetchTodos = () => {
  const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return todos;
};

export const addPost = (todo) => {
  const todos = fetchTodos();
  const newPost = { ...todo, id: Date.now() };
  todos.push(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  return newPost;
};

export const editPost = (updatedPost) => {
  const todos = fetchTodos();
  const index = todos.findIndex((todo) => todo.id === parseInt(updatedPost.id));
  if (index !== -1) {
    todos[index] = updatedPost;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    return updatedPost;
  }
  return null;
};

export const deletePost = (id) => {
  const todos = fetchTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== parseInt(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
};

export const searchPostById = (id) => {
  const todos = fetchTodos();
  const foundPost = todos.find((todo) => todo.id === parseInt(id));
  return foundPost || null;
};
