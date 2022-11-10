import { Link, Outlet, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
function SinglePost() {
  const { postId } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [postId]);
  console.log(user);
  return (
    <div>
      <hr/>
      <br/>
      <h1>post {postId}</h1>
      <h2>{user && user.title} </h2>
      <h3>{user && user.body}</h3>
      <Link to={' /Comments' }/>
     <Outlet />
    </div> 
  );
 ;
}
export default SinglePost;
