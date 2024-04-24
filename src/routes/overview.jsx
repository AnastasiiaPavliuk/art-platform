export default function Overview() {

const artworks = [
  {"id": 1, "artist": "John Smith"},
  {"id": 2, "artist": "Emily Johnson"},
  {"id": 3, "artist": "Michael Brown"},
  {"id": 4, "artist": "Sarah Davis"},
  {"id": 5, "artist": "David Wilson"},
  {"id": 6, "artist": "Jessica Lee"},
  {"id": 7, "artist": "Daniel Martinez"},
  {"id": 8, "artist": "Rachel Taylor"},
  {"id": 9, "artist": "Kevin White"},
  {"id": 10, "artist": "Amanda Miller"},
  {"id": 11, "artist": "Brian Anderson"}
];

return (
    <div className="overview-container">
      <h1>Overview</h1>
      <div className="artworks-container">
        {artworks.map(artwork => (
          <div key={artwork.id} className="artwork-card">
            <div className="artwork-img"></div>
            <p className="artwork-author">{artwork.artist}</p>
          </div>
        ))}
      </div>
     <a href="/town"> <div className="button-centered">
      <img className="button-icon" src="../public/icon-plus.svg" alt="icon" />
     </div></a>
    </div>
  );
}
