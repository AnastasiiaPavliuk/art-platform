import { getToken } from "./auth";
import { fetchApi, unwrapAtributes } from "./strapi";

const getTowns = async () => {
  const towns = await fetchApi({ endpoint: "artworks" });
  if (!towns || towns.data) return [];
  console.log(towns.data);
  return towns.data.map(unwrapAtributes);
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
return unwrapAtributes(town);
};

export { getTowns, createTown };
