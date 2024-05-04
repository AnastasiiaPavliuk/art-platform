import {
  Form,
  redirect,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import ErrorField from "../../components/ErrorField";
import { register } from "../../services/auth";
//import style from "./login.module.css";

const action = async ({ request }) => {
  const formData = await request.formData();
  const { email, password, username} = Object.fromEntries(formData);

  if (!username) {
    return {
      error: { username: "You must provide a username" },
    };
  }

  if (!email) {
    return {
      error: { email: "You must provide a email to sign up" },
    };
  }

  if (!password) {
    return {
      error: { password: "You must provide a password" },
    };
  }

  try {
    await register(username, password, email);
  } catch (error) {
    return {
      error: { general: error.message },
    };
  }

  let redirectTo = formData.get("redirectTo") | null;
  return redirect(redirectTo || "/");
};

export default function RegisterPage(){
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || "/";

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData?.get("email") != null;

  let actionData = useActionData();

  return (
    <section className="signup-section">
      <hgroup className="signup-header">
        <h2>Register</h2>
        <p>Get access to all the features</p>
      </hgroup>
      <Form method="post" className="signup-form">
        <input type="hidden" name="redirectTo" value={from} />
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            autoComplete="username"
          />
          <ErrorField data={actionData} field="username" />
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            autoComplete="current-password"
            defaultValue="tester"
          />
          <ErrorField data={actionData} field="password" />
        </div>
        <div className="form-actions">
          <ErrorField data={actionData} field="general" />
          <button type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Sending..." : "Register"}
          </button>
        </div>
      </Form>
    </section>
  );
}

RegisterPage.action = action;
// RegisterPage.loader = loader;

