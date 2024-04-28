import { Form, redirect } from "react-router-dom";
import formStyles from "../styles/forms.module.css";
// import { createCheese } from "../services/cheese";
import { getAuthData } from "../services/auth";

const loader = async ({ request }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  return null;
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("formdata", data);
  await createCheese(data);
  return redirect(`/`);
};

const CreateCheese = () => {
  return (
    <Form method="POST">
      <div className={formStyles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" defaultValue="test cheese" />
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          defaultValue="great"
        ></textarea>
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="type">Type</label>
        <select name="type" id="type">
          <option value="fresh cheese">fresh cheese</option>
          <option value="soft cheese">soft cheese</option>
          <option value="semi-hard cheese">semi-hard cheese</option>
          <option value="hard cheese">hard cheese</option>
        </select>
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="image">Image</label>
        <input
          type="url"
          id="image"
          name="image"
          defaultValue="https://www.lekkervanbijons.be/sites/default/files/styles/400w/public/images/cobergher_light.jpg"
        />
      </div>

      <div className={formStyles.formGroup}>
        <input
          type="submit"
          className={formStyles.submit}
          value="Add this piece of cheese"
        />
      </div>
    </Form>
  );
};

CreateCheese.action = action;
CreateCheese.loader = loader;

export default CreateCheese;
