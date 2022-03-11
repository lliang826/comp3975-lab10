import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <a className="navbar-brand" href="/">FizzBuzzWeb</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Home/Privacy">Privacy</Link>
            </li>
          </ul> 
        </div>
    </nav>
  </>
);
export default NavBar;
