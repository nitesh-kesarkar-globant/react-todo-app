import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 text-center">
            <Link className="navbar-brand" to="/">React Todo App</Link>
        </nav>
    )
}

export default Navbar