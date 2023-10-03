import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li className="dropdown">
          <span>Epidemics</span>
          <div className="dropdown-content">
            <NavLink to="/epidemics/opioids">Opioids</NavLink>
            <NavLink to="/epidemics/crack-cocaine">Crack Cocaine</NavLink>
            <NavLink to="/epidemics/methamphetamine">Methamphetamine</NavLink>
          </div>
        </li> */}
        <li><NavLink to="/epidemics">Epidemics</NavLink></li>
        <li><NavLink to="/timeline">Timeline</NavLink></li>
        <li><NavLink to="/resources">Resources</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
