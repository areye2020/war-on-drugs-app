import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span>Epidemics</span>
          <div className="dropdown-content">
            <NavLink to="/epidemics/opioids">Opioids</NavLink>
            <NavLink to="/epidemics/crack-cocaine">Crack Cocaine</NavLink>
            <NavLink to="/epidemics/methamphetamine">Methamphetamine</NavLink>
          </div>
        </li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
