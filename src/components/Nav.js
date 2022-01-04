import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <Link className="nav-logo" to="/">Computer World</Link>
        <div className="nav-handler">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list nav-icon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
      </div>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Nav;