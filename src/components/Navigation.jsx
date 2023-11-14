import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import { BsPersonBoundingBox } from 'react-icons/bs';

const Navigation = () => (
  <nav className="navmenu-desktop">
    <a href="/" rel="noreferrer" className="logo">
      Bookstore CMS
    </a>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          BOOKS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="categories"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <div style={{ position: 'absolute', right: 150 }}>
      <BsPersonBoundingBox className="user" />
    </div>
  </nav>
);

export default Navigation;
