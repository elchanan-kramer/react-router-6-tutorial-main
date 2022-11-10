import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Photos() {
  const { albumId } = useParams();
  const [Photos, setPhotos] = useState([]);
  const [title, setTitle] = useState([]);
  console.log(albumId);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        console.log(data);
      });
  }, [albumId]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data);
        console.log(data);
      });
  }, [albumId]);
  return (
    <div>
        <hr />
      <h2> Photos: {title.title}</h2>
     <h5></h5>
     <Carousel>
      {Photos &&
        Photos.map((i, x) => (
          <div key={x}>
            <img src={i.thumbnailUrl} style={{ width:"50%" }} />
          </div>
        ))}
  </Carousel>
    </div>
  );
}
export default Photos;
