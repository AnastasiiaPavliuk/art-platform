import { Link, useFetcher, useRouteLoaderData } from "react-router-dom";

export default function AuthStatus() {
  const fetcher = useFetcher();
  let { user } = useRouteLoaderData("root");
   let isLoggingOut = fetcher.formData != null;

  return user ? (
    <>
      <p style={{ color: "grey" }}>Welcome, {user.username}</p>
      <fetcher.Form method="post" action="/auth/logout">
        <button className="nav-link" type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </button>
      </fetcher.Form>
    </>
  ) : (
    <>
      <Link to="/auth/login">Sign in</Link>
      <Link to="/auth/register">Register</Link>
    </>
  );
}
