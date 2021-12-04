import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ali Raza Todos</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
