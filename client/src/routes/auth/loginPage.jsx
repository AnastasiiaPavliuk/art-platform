import {
  Form,
  Link,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

import { authenticate, getAuthData } from "../../services/auth";
import ErrorField from "../../components/ErrorField";

const loader = async () => {
  const { user } = getAuthData();
  if (user) {
    return redirect("/");
  }
  return null;
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  if (!email) {
    return {
      error: { email: "You must provide a email to log in" },
    };
  }

  if (!password) {
    return {
      error: { password: "You must provide a password to log in" },
    };
  }

  try {
    await authenticate(email, password);
  } catch (error) {
    return {
      error: { general: error.message },
    };
  }

  let redirectTo = formData.get("redirectTo") | null;
  return redirect(redirectTo || "/");
};

export default function LoginPage() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData?.get("email") != null;

  let actionData = useActionData();

  return (
    <section>
      <hgroup >
        <h2>Sign in</h2>
        {from != "/" ? (
          <p>You must log in to view the page at {from}</p>
        ) : (
          <p>Get access to all the features</p>
        )}
      </hgroup>
      <Form method="post">
        <div >
          <input type="hidden" name="redirectTo" value={from} />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e-mail"
            autoComplete="email"
            defaultValue="tester@devine.be"
          />
          <ErrorField data={actionData} field="email" />
        </div>
        <div >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            defaultValue="tester"
          />
          <ErrorField data={actionData} field="password" />
        </div>
        <div>
          <ErrorField data={actionData} field="general" />
          <button
            type="submit"
            disabled={isLoggingIn}
            // className={actionData && actionData.error ? style.shake : null}
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
          <Link to="/auth/register">
            ...or Sign up!
          </Link>
        </div>
      </Form>
    </section>
  );
}

LoginPage.action = action;
LoginPage.loader = loader;

