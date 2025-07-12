import { NavLink } from "react-router-dom";

const inf = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Біографія
      </NavLink>
      <NavLink to="/painting" className="nav-link">
        Відома картина
      </NavLink>
      <NavLink to="/collection" className="nav-link">
        Колекція
      </NavLink>
    </nav>
  );
};

export default inf;
