import { Link, useRouteLoaderData } from "react-router-dom";



export default function AuthStatus() {
  let { user } = useRouteLoaderData("root");

  return user ? (
    <p >welcome, user</p>
  ) : (
    <Link to="/auth/login">
      Sign in
    </Link>
  );
};
