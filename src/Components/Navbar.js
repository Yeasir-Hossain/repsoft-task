/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbas.css'

const Navbar = () => {
  const menu = <>
    <li><a className='bg-transparent uppercase mr-16 custom-font font-bold text-lg' href="">Home</a></li>
    <li><a className='bg-transparent uppercase mr-16 custom-font font-bold text-lg' href="">Tournaments</a></li>
    <li><a className='bg-transparent uppercase mr-16 custom-font font-bold text-lg' href="">Compare Devices</a></li>
    <li><a className='bg-transparent uppercase mr-16 custom-font font-bold text-lg' href="">Shop</a></li>
    <li> <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered bg-transparent hover:bg-transparent mr-20" />
    </div></li>
    <li><a className='bg-transparent uppercase mr-16 custom-font font-bold text-lg' href="">LOG IN</a></li>
    <li><a className='bg-transparent uppercase mr-16 custom-font font-bold text-lg' href="">SIGN UP</a></li>
  </>
  return (
    <div class="navbar bg-transparent">
      <div class="navbar">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menu}
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;