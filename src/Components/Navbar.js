/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  const menu = <>
    <li><a className='bg-transparent uppercase mr-12 font-bold text-lg' href="">Home</a></li>
    <li><a className='bg-transparent uppercase mr-12 font-bold text-lg' href="">Tournaments</a></li>
    <li><a className='bg-transparent uppercase mr-12 font-bold text-lg' href="">Compare Devices</a></li>
    <li><a className='bg-transparent uppercase mr-12 font-bold text-lg' href="">Shop</a></li>
    <li>
      <div className='mr-12'>
        <input type="text" placeholder="Search for Tournaments,games etc" className="search bg-transparent hover:bg-transparent text-xs" />
      </div>
    </li>
    <li><a className="bg-white text-black login uppercase mr-12 font-bold text-lg" href="">LOG IN</a></li>
    <li><a className='bg-transparent signup uppercase mr-12 font-bold text-lg' href="">SIGN UP</a></li>
  </>
  return (
    <div className="navbar bg-transparent custom-navbar custom-font text-white">
      <div className="navbar">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
            {menu}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;