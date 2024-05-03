import { getTown } from "../services/artwork";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";

const loader = async ({ params }) => {
  const id = params.id;
  const town = await getTown(id);
  return { town };
};


export default function TownDetail() {

    const { town } = useLoaderData();
    const { user } = useRouteLoaderData("root");

  return (
    <div>
      <div>
        <h2>{town.name}</h2>
        {user.id === town.owner.data.id && (
          <Link to={`/town/${town.id}/edit`}>Edit town</Link>
        )}
      </div>
      
        <h1>Artwork Detail</h1>
      </div>
    </div>
  );
}

TownDetail.loader = loader;
