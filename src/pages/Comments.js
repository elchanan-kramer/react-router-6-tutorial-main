import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState(null);
  const { postId } = useParams();

  console.log(comments);
  useEffect(() => getComments(postId), [postId]);
  // קבל את כל התגובות
  async function getComments(postId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    setComments(await res.json());
  }
  return (
    <div>
      <h2> comments:</h2>
      {comments &&
        comments.map((i, x) => (
          <div key={x}>
            <h5>{i.name}</h5>
            <h6>{i.email} </h6>
            <h3>{}</h3>
          </div>
        ))}
    </div>
  );
}

export default Comments;
