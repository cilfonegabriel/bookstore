import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <nav className="nav-bar">
      <div>
        <ul>
          <li>
            <h2>Book Store</h2>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" />
      </div>
    </nav>
  </div>
);
export default Navbar;
