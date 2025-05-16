import { Link, NavLink } from "react-router";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            width="50"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="link" as={Link} to="/jxXml">
            JxXml
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/JxMap">
            JxMap
          </Nav.Link>
          <Nav.Link as={Link} className="link" to="/clock">
            Clock
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/contact">
            Contact
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/login">
            Login
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/hooks">
            UseEffect
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/state">
            State
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/props">
            Props
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/controlled">
            Controlled
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/college">
            College
          </Nav.Link>

          <Nav.Link as={Link} className="link" to="/users">
            Users
          </Nav.Link>
        </Nav>
      </Navbar>

      <div>
        <ul>
          <li>
            <NavLink
              className="{({isActive}) => isActive ? 'custom-active link': 'link' }"
              to="/about"
            >
              About
            </NavLink>
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

export default Navigation;
