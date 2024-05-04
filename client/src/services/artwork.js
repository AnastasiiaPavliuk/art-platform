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

// add edit town

// const updateTown = async (id, data) => {
//   console.log("Preparing to update town with ID:", id);
//   console.log("Data to be sent for update:", data);

//   try {
//     const response = await fetchApi(
//       {
//         endpoint: `artworks/${id}`,
//       },
//       {
//         method: "PUT",
//         body: JSON.stringify({ data }),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//       }
//     );

//     console.log("Response received:", response);

//     if (!response.ok) {
//       console.error("Failed to update artwork, response status:", response.status);
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const updatedArtwork = await response.json();
//     console.log("Update response received:", updatedArtwork);

//     const unwrappedData = unwrapAtributes(updatedArtwork);
//     console.log("Unwrapped artwork data:", unwrappedData);

//     return unwrappedData;
//   } catch (error) {
//     console.error("Error updating artwork:", error);
//     throw error;  // Rethrowing the error after logging it for further handling if necessary
//   }
// };


const updateTown = async (id, data) => {
  console.log("Preparing to update town with ID:", id);
  console.log("Data to be sent for update:", data);
  const artwork = await fetchApi(
    {
      endpoint: `artworks/${id}`,
    },
    {
      method: "PUT",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  // if (!artwork.ok) {
  //   console.error("Failed to update artwork, response status:",` ${ artwork}`);
  //   throw new Error(`HTTP error! status: ${artwork.status}`);
  // }

  // const updatedArtwork = await artwork.json();
  // console.log("Update response received:", updatedArtwork);

  // const unwrappedData = unwrapAtributes(updatedArtwork);
  // console.log("Unwrapped artwork data:", unwrappedData);

  return unwrapAtributes(artwork);
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

export { getTown, getTowns, createTown, updateTown };
