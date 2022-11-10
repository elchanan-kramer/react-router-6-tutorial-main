import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../check_user";
import Comments from "./Comments";
const Posts = () => {
  const [Posts, setPosts] = useState([]);
  const [comments, setComments] = useState(null);

  // קבל את כל התגובות
  async function getComments(postId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const data = await res.json();
    setComments(data);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const userid = user.id;
    // קבל את כל הפוסטים
    getPost(userid).then((Posts) => setPosts(Posts));
    return () => {};
  }, []);

  return (
    <>
      <hr />
      <h2>Posts:</h2>
      {Posts &&
        Posts.map((i, x) => (
          <div key={x}>
            <div onClick={() => getComments(i.id)}>
              <NavLink
                to={`${i.id}`}
                className={""}
                style={(isActive) => ({ color: isActive ? "blue" : "" })}
              >
                <h3>{`${i.id}. ${i.title} `}</h3>
              </NavLink>{" "}
            </div>
          </div>
        ))}
      <Outlet />
      <hr />
      <br />
     
      <Comments />
    </>
  );
};

export default Posts;
