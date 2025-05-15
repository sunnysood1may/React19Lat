import { Link, NavLink } from "react-router";
import "./header.css";

function Navbar() {
  return (
    <div className="header">
      <div>
        <NavLink className="link" to={"/"}>
          <img
            width="50"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className="{({isActive}) => isActive ? 'custom-active link': 'link' }" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
           <li>
            <Link className="link" to="/college">
              College
            </Link>
          </li>
          <li>
            <Link className="link" to="/users">
              Users
            </Link>
          </li>

          <li>
            <Link className="link" to="/users/list">
              List
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
