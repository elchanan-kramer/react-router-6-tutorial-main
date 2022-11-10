import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState();
const navigete = useNavigate()
  
useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

  }, []);
   !user && navigete('/login') 

  function logout() {
    localStorage.clear("user");
  }
  return (
    <section className="section">
      
      {/* <Link to="/" className="btn">
      Home
      </Link>{"  "} */}
      <Link to="/Info" className="btn">
        Info
      </Link>{"  "}
      <Link to="/Login" onClick={logout} className="btn">
        Logout
      </Link>{"  "} 
      
      <Link to="/Todos" className="btn">
        Todos
      </Link>{"  "}
      <Link to="/Posts" className="btn">
        Posts
      </Link>{"  "}
      <Link to="/Albums" className="btn">
        Albums
      </Link>{"  "}
<br/><br/>
  {user && <h1>Hello {user.name}!</h1>}

     <Outlet />
    </section>
  );
};
export default Home;
