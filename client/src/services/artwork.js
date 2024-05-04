import { getToken } from "./auth";
import { fetchApi, unwrapAtributes } from "./strapi";

const getTowns = async () => {
  const response = await fetchApi({
    endpoint: "artworks",
    query: { populate: ["owner"] },
  });
  if (!response || !response.data) return [];
  //console.log("Artworks fetched:", response.data);
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

// date of update updates, but not the artworkdata


const updateTown = async (id, data) => {
  console.log("Preparing to update town with ID:", id);
  console.log("Data to be sent for update:",data ); //correct

  // const transformedResponse = {
  //   data: {
  //     attributes: {
  //       artworkData: {
  //         buildings: data.buildings,
  //         color: data.color
  //       },
  //       id:id
  //     }
  //   },
  //   meta: {}
  // };

  const artwork = await fetchApi(
    {
      endpoint: `artworks/${id}`,
    },
    {
      method: "PUT",
      body: JSON.stringify({data}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  const updatedArtwork = await artwork;
  const unwrappedData = unwrapAtributes(updatedArtwork); //not updated
  console.log("Unwrapped artwork data:", unwrappedData);

  return unwrapAtributes(artwork);
};

const deleteTown = async (id) => {
  const response = await fetchApi(
    {
      endpoint: `artworks/${id}`,
    },
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response;
};

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
  console.log("Response received:", response);

  return response;
};

export { getTown, getTowns, createTown, updateTown, deleteTown };
