// import { NavLink, Outlet, redirect, Form, useLoaderData } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import '../styles/index.css'
export default function Root() {
  return (
  <div>

    <nav className="navbar">
      <div className="nav-section navigation">
          <div className="nav-link"><NavLink className="navlink" to="/overview">Overview</NavLink></div>
          <div className="nav-link"><NavLink className="navlink" to="/create-town">Create artwork</NavLink></div>
      </div>
      <div className="nav-section profile">
          <div className="nav-link"><NavLink className="navlink" to="/auth/login">Login</NavLink></div>
          <div className="nav-link"><NavLink className="navlink" to="/auth/register">Register</NavLink></div>
      </div>
    </nav>

    <div className="outlet">
        <Outlet/>
    </div>

  </div>
  );
}
