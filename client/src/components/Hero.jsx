import { Link } from "react-router-dom";
import AuthStatus from "./AuthStatus";

export default function Hero() {
  return (
    <div >
      <nav className="navbar">
        <Link to="/overview"> <div className="nav-link">Overview</div> </Link>
        <Link to="/create-artwork" > <div className="nav-link">Create Town</div> </Link>
        <AuthStatus />
      </nav>
    </div>
  );
}

