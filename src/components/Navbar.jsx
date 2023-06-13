import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, clearAuthenticatedUser } = useContext(AuthContext);

    const handleLogout = () => {
        clearAuthenticatedUser();
        navigate("/");
    }

    const handleLogin = () => {
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/todos">React Todo App</Link>
                <ul className="navbar-nav ml-auto d-flex align-items-center">
                    {
                        user && (
                            <>
                                <li className="nav-item">
                                    <button className="btn btn-primary btn-sm" onClick={() => handleLogin()}>Log In</button>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">Hi, {user.name}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary btn-sm" onClick={() => handleLogout()}>Log Out</button>
                                </li>
                            </>

                        )
                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar