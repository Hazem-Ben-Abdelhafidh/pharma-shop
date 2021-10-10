import { Link } from "react-router-dom";
import classes from "./NavLinks.module.scss";
const NavLinks = ({ logout,showDrop }) => {
  return (
    <nav className={classes.NavLinks}>
      <ul>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact us</Link>
        </li>
        <li>
          {localStorage.getItem("user-info") ? (
            <Link to="#" onClick={logout}>
              LogOut
            </Link>
          ) : (
            <Link to="/register" onClick={showDrop}>Register</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
