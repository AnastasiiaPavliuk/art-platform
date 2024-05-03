import { getToken } from "./auth";
import { fetchApi, unwrapAtributes } from "./strapi";

const getTowns = async () => {
  const response = await fetchApi({
    endpoint: "artworks",
    query: { populate: ["owner"] },
  });
  if (!response || !response.data) return [];
  console.log("Artworks fetched:", response.data);
  return response.data.map(unwrapAtributes);
};

const getTown = async (id) => {
  const artwork = await fetchApi({
    endpoint: `artworks/${id}`,
    query: { populate: ["owner"] },
    wrappedByKey: "data",
  });
  return unwrapAtributes(artwork);
};

//update town

const createTown = async (data) => {
  const response = await fetchApi(
    {
      endpoint: "artworks",
    },
    {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return response;
};

export { getTown, getTowns, createTown };
