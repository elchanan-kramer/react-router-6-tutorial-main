
 async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }
  function getUser(userName, pass) {
    let user;
  
    return getUsers().then((users) => {
      user = users.find((user) =>

          user.username === userName && pass === user.address.geo.lat.slice(-4)
      );
      if (user) {
        console.log("secses");
        return user;
      } else {
         alert("דUser does not exist");
      }
    });
  }
  
  

  
 async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  }


  function getTodo(userid) {
    let user;
  
    return getTodos().then((users) => {
      user = users.filter((user) =>

          user.userId === userid
      );
      if (user) {
        // console.log("secses");
        return user;
      } else {
         alert("User does not exist");
      }
    });
  }

 
  async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  }


  function getPost(userid) {
    let user;
  
    return getPosts().then((users) => {
      user = users.filter((user) =>

          user.userId === userid
      );
      if (user) {
        // console.log("secses");
        return user;
      } else {
         alert('דחילק');
      }
    });
  }

  
 

  export {getPost}
  export {getTodo}
  export default getUser;