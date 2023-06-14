import { useContext } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom"
import { AuthContext } from '../contexts/AuthContext';

function LinkItem({ text, url }) {
    const match = useMatch(url);

    return (
        <li className="nav-item">
            <Link to={url} className="text-decoration-none"><span className={`nav-link ${match ? "active" : ""}`}>{text}</span></Link>
        </li>
    )
}


function Navbar () {
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
                                <LinkItem text="My" url="/my"/>
                                <LinkItem text="Todos" url="/todos"/>

                                <li className="nav-item">
                                    <span className="nav-link">Hi, {user.name}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary btn-sm" onClick={() => handleLogout()}>Log Out</button>
                                </li>
                                <li className="nav-item ms-2">
                                    <button className="btn btn-primary btn-sm" onClick={() => handleLogin()}>Log In</button>
                                </li>
                            </>

                        )
                    }

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
