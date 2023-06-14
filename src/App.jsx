import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const LoadingSpinner = lazy(() => import('./components/LoadingSpinner'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AuthenticatedPages = lazy(() => import("./pages/AuthenticatedPages"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const EditTodoForm = lazy(() => import('./components/EditTodoForm'));
const AddTodoForm = lazy(() => import('./components/AddTodoForm'));
const TodoList = lazy(() => import('./components/TodoList'));
const MyPage = lazy(() => import('./components/MyPage'));
const DetailsPage = lazy(() => import('./components/DetailsPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/todos" element={<AuthenticatedPages />}>
            <Route exact path="" element={<TodoList />} />
            <Route exact path="add" element={<AddTodoForm />} />
            <Route exact path="edit/:id" element={<EditTodoForm />} />
          </Route>

          <Route exact path="/my" element={<AuthenticatedPages />}>
            <Route exact path="" element={<MyPage />} />
            <Route exact path="details" element={<DetailsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
