import { useEffect, useState } from "react";
import  getUser  from "../check_user";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = () => {
   
    getUser(name,password).then(user=>{
      localStorage.setItem('user',JSON.stringify(user))
      localStorage.setItem('player',JSON.stringify(user.id))
    
      navigate('/')
    })
  };

  return (
    <section className="section" >
      <form className="form"  >
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
          password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-block"
        onClick={()=>{
          handleSubmit()
        }}
        >
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
