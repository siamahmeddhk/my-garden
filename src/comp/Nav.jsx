import React, {} from 'react';
import { FaLeaf } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router';

const Nav = () => {
 

  return (
    <div className="navbar bg-transparent shadow-sm px-4 py-2">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Share a Garden Tip</a></li>
            <li><a>Explore Gardeners</a></li>
            <li><a>My Tips</a></li>
           <li><a>Login / Signup</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <FaLeaf className="text-green-500" /> GardenHub
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavLink to='/'>
            <li><a>Home</a></li>    
          </NavLink>
         
          <NavLink to='/gardeners'>
               <li><a>Explore Gardeners</a></li>
          </NavLink>  

           <NavLink to='/browse'>
               <li><a>Browse Tips</a></li>
          </NavLink>

           <NavLink to='/tipsubmit'>
               <li><a>Share a Garden Tip</a></li>
          </NavLink>
           <NavLink to='/my-tips'>
                 <li><a>My Tips</a></li>
          </NavLink>
       
        </ul>
      </div>

      <div className="navbar-end">
 
          <a className="btn btn-sm bg-green-500 hover:bg-green-600 text-white">Login / Signup</a>
    

      </div>
    </div>
  );
};

export default Nav;
