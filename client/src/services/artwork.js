import { getToken } from "./auth";
import { fetchApi, unwrapAtributes } from "./strapi";

const getTowns = async () => {
  const towns = await fetchApi({ endpoint: "artworks" });
  if (!towns || towns.data) return [];
  console.log(towns.data);
  return towns.data.map(unwrapAtributes);
};

const getTown = async (id) => {
  const town = await fetchApi({ endpoint: `artworks/${id}`, wrappedByKey: "data" });
  return unwrapAtributes(town);
};

//update town

const createTown = async (data) => {
  const town = await fetchApi(
    { endpoint: "artworks" },
    {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  // console.log("artwork.js", data);
  return unwrapAtributes(town);
};

export { getTown, getTowns, createTown };
