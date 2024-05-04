const AUTH_DATA = "auth-data-town";


//logs in user
export const authenticate = async (username, password) => {
  let response;
  try {
    response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/auth/local`,
      {
        method: "POST",
        body: JSON.stringify({ identifier: username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Auth response error", error.response);
    throw error;
  }

  const data = await response.json();
  if (data.error) {
    throw data.error;
  }
  setAuthData(data);

  return data;
};

export const register = async (username, password, email) => {
  let response;
  try {
    response = await fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/auth/local/register`,
      {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("register response error", error.response);
    throw error;
  }

  const data = await response.json();
  if (data.error) {
    throw data.error;
  }
  setAuthData(data);

  return data;
};

//saves data
export const setAuthData = (authData) => {
  if (authData) {
    localStorage.setItem(AUTH_DATA, JSON.stringify(authData));
  }
};

//for log out
export const removeAuthData = () => {
  localStorage.removeItem(AUTH_DATA);
};

//check current user login state and user details
export const getAuthData = () => {
  const authData = localStorage.getItem(AUTH_DATA);
  return authData ? JSON.parse(authData) : {};
};

//just some bsckend thingy 
export const getToken = () => {
  const authData = getAuthData();
  return authData.jwt;
};
