import { Link } from "react-router-dom";

const Info = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <section className="section">
      <h1>name: {user.name}</h1>
      <h2>phone: {user.phone}</h2>
      <h2>email: {user.email}</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};
export default Info;
