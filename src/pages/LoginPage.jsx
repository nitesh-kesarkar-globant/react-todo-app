import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { getLoggedInUser } from "../utils/localStorageUtil";

const LoginPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "admin@email.com",
    password: "admin",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuthenticatedUser } = useContext(AuthContext);

  useEffect(() => {
    const user = getLoggedInUser();
    setAuthenticatedUser(user);

    if (user) {
      navigate("/todos");
    }
  }, [navigate, setAuthenticatedUser])

  const handleSubmit = (e) => {
    setError();
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      const { email, password } = login;
      if (email === "admin@email.com" && password === "admin") {
        let user = {
          email: "admin@email.com",
          name: "Super Admin",
        }
        setAuthenticatedUser(user);
        setLoading(false);
        navigate('/todos');

      } else {
        setError("Invalid email or password");
        setLoading(false);
      }
    }, 1);

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ minWidth: "500px" }}>
        <div className="card-body">
          <h5 className="card-title text-center my-2 text-primary">React Todo App</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className="btn btn-primary" disabled={loading || !login.email || !login.password}>
                Login
                {loading && (
                  <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                )}
              </button>
              <span className='text-danger'>{error} {loading}</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
