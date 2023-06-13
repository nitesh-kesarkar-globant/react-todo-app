import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";


export default function AuthenticatedPages() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) {
      navigate("/");
    }
  }, [user, navigate])

  if (!user?.email) {
    return (<></>)
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="container p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}