import { Link } from "react-router-dom";
import AuthStatus from "./AuthStatus";

export default function Hero() {
  return (
    <div >
      <nav className="navbar">
        <Link to="/overview"> <h1>Overview</h1> </Link>
        <Link to="/create-artwork" > <h1>Create artwork</h1> </Link>
        <AuthStatus />
      </nav>
    </div>
  );
}

