import { getToken } from "./auth";
import { fetchApi, unwrapAtributes } from "./strapi";

const getCheeses = async () => {
  const cheeses = await fetchApi({ endpoint: "cheeses" });
  if (!cheeses) return [];
  return cheeses.map(unwrapAtributes);
};

const createCheese = async (data) => {
  const cheese = await fetchApi(
    {
      endpoint: "cheeses",
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
  return unwrapAtributes(cheese);
};

export { getCheeses, createCheese };
