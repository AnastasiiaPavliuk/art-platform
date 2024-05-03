import Bar from "./Bar";

export default function TownSmallimage(town) {


  const color = town.town.artworkData.color;

  const buildings = town.town.artworkData.buildings;
  console.log(color);
  console.log( "color: ", color);
  console.log("buildings: ", buildings);

  //const townId = town.id;
  //const ownerUsername = town.owner.data.attributes.username;

  return (
    <>
      <div className="city-cont" style={{ borderColor: `hsl(${color}, 100%, 50%)` }}>
        {buildings.map((building) => (
          <Bar
            key={building.id}
            barId_key={building.id}
            width={70}
            height={building.height}
            color={`hsl(${color}, 70%, 50%)`}
            windows={building.windows}
          />
        ))}
      </div>
    </>
  );
}
