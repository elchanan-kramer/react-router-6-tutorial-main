import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const num = await res.json();
    sortAlpha(num);
    setAlbums(num);
  }, []);
  const album = albums.filter(
    (i) => i.userId === JSON.parse(localStorage.getItem("player"))
  );

  console.log(album);
  function sortAlpha(x) {
    x.sort(function (a, b) {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <h2> Albums:</h2>
      {album &&
        album.map((i, x) => (<div key={x}><Link to={`${i.id}`}>
<h4>{`${x+1}. ${i.title} `}</h4>
            </Link>{" "}
          </div>
        ))}
        <Outlet />
        
    </div>
  );
}

export default Albums;
