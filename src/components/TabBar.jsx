import { NavLink } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import './TabBar.css';
import home from '../assets/home.png';
import drive from '../assets/drive.png';
import profile from '../assets/profile.png';

export default function TabBar() {
  return (
    // <nav className="flex justify-around bg-gray-200 p-3 shadow-md">
    //   <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>
    //     Home
    //   </NavLink>
    //   <NavLink to="/trips" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>
    //     Drive
    //   </NavLink>
    //   <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600'}>
    //     Profile
    //   </NavLink>
    // </nav>
    <div className="tab-bar">
      <Link to="/home"> <img src={home} className="Home-logo" alt="logo" /> </Link>
      <Link to="/drive"> <img src={drive} className="Drive-logo" alt="logo" /> </Link>
      <Link to="/profile"> <img src={profile} className="Profile-logo" alt="logo" /> </Link>
    </div>
  );
}