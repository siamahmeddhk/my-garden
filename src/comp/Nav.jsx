
// import React, { useContext, useState, useEffect } from 'react';
// import { FaLeaf, FaMoon, FaSun } from 'react-icons/fa';
// import { FiLogOut } from 'react-icons/fi';
// import { Link, NavLink } from 'react-router'; // ✅ Corrected import
// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebse/firebase.config';
// import { Authcontext } from '../Auth/Authcontext';

// const Nav = () => {
//   const { user } = useContext(Authcontext);
//   const [showLogout, setShowLogout] = useState(false);
//   const [theme, setTheme] = useState('light');

//   // Load saved theme on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setShowLogout(false);
//     });
//   };

//   const activeStyle = 'text-green-600 font-semibold';

//   return (
//     <div className="navbar bg-base-100 shadow-sm px-4 py-2">
//       <div className="navbar-start">
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li><NavLink to="/" className={({ isActive }) => isActive ? activeStyle : ''}>Home</NavLink></li>
//             <li><NavLink to="/gardeners" className={({ isActive }) => isActive ? activeStyle : ''}>Explore Gardeners</NavLink></li>
//             <li><NavLink to="/browse" className={({ isActive }) => isActive ? activeStyle : ''}>Browse Tips</NavLink></li>
//             <li><NavLink to="/newsletter" className={({ isActive }) => isActive ? activeStyle : ''}>Newsletter</NavLink></li>
//             {user && <li><NavLink to="/tipsubmit" className={({ isActive }) => isActive ? activeStyle : ''}>Share a Garden Tip</NavLink></li>}
//             {user && <li><NavLink to="/my-tips" className={({ isActive }) => isActive ? activeStyle : ''}>My Tips</NavLink></li>}
//             {!user && <li><NavLink to="/signup" className={({ isActive }) => isActive ? activeStyle : ''}>Login / Signup</NavLink></li>}
//           </ul>
//         </div>

//         <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
//           <FaLeaf className="text-green-500" /> GardenHub
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-2">
//           <li><NavLink to="/" className={({ isActive }) => isActive ? activeStyle : ''}>Home</NavLink></li>
//           <li><NavLink to="/gardeners" className={({ isActive }) => isActive ? activeStyle : ''}>Featured Gardeners</NavLink></li>
//           <li><NavLink to="/browse" className={({ isActive }) => isActive ? activeStyle : ''}>Browse Tips</NavLink></li>
//           {user && <li><NavLink to="/tipsubmit" className={({ isActive }) => isActive ? activeStyle : ''}>Share a Garden Tip</NavLink></li>}
//           {user && <li><NavLink to="/my-tips" className={({ isActive }) => isActive ? activeStyle : ''}>My Tips</NavLink></li>}
//           <li><NavLink to="/all-gardeners" className={({ isActive }) => isActive ? activeStyle : ''}>Explore Gardeners</NavLink></li>
//         </ul>
//       </div>

//       <div className="navbar-end flex items-center gap-3">
//         {/* Theme Toggle Button */}
//         <button
//           onClick={toggleTheme}
//           className="btn btn-ghost btn-circle"
//           title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//         >
//           {theme === 'light' ? <FaMoon className="h-5 w-5" /> : <FaSun className="h-5 w-5" />}
//         </button>

//         {/* User Authentication Section */}
//         {!user ? (
//           <Link to="/signup" className="btn btn-sm bg-green-500 hover:bg-green-600 text-white">
//             Login / Signup
//           </Link>
//         ) : (
//           <div
//             className="relative cursor-pointer"
//             onClick={() => setShowLogout(!showLogout)}
//             onMouseEnter={() => setShowLogout(true)}
//             onMouseLeave={() => setShowLogout(false)}
//           >
//             <img
//               src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
//               alt="User"
//               className="w-10 h-10 rounded-full border border-green-500"
//               title={user.displayName}
//             />
//             {showLogout && (
//               <div className="absolute right-0 top-12 bg-base-100 shadow-lg border border-base-300 p-2 rounded w-32 z-10">
//                 <p className="text-sm text-center mb-2 text-base-content">{user.displayName}</p>
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-sm w-full bg-red-500 hover:bg-red-600 text-white"
//                 >
//                   <FiLogOut className="mr-1" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Nav;



// import React, { useContext, useState, useEffect } from 'react';
// import { FaLeaf, FaMoon, FaSun } from 'react-icons/fa';
// import { FiLogOut } from 'react-icons/fi';
// import { Link, NavLink } from 'react-router';
// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebse/firebase.config';
// import { Authcontext } from '../Auth/Authcontext';

// const Nav = () => {
//   const { user } = useContext(Authcontext);
//   const [showLogout, setShowLogout] = useState(false);
//   const [theme, setTheme] = useState('light');

//   // Load saved theme on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
//   }, []);

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setShowLogout(false);
//     });
//   };

//   // Helper for NavLink active styles
//   const navLinkClass = ({ isActive }) =>
//     isActive ? 'bg-green-100 text-green-700 rounded px-3 py-1' : 'text-gray-700 hover:bg-green-50 rounded px-3 py-1';

//   return (
//     <div className="navbar bg-base-100 shadow-sm px-4 py-2">
//       <div className="navbar-start">
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
//             <li><NavLink className={navLinkClass} to="/gardeners">Explore Gardeners</NavLink></li>
//             <li><NavLink className={navLinkClass} to="/browse">Browse Tips</NavLink></li>
//             <li><NavLink className={navLinkClass} to="/newsletter">Newsletter</NavLink></li>
//             {user && <li><NavLink className={navLinkClass} to="/tipsubmit">Share a Garden Tip</NavLink></li>}
//             {user && <li><NavLink className={navLinkClass} to="/my-tips">My Tips</NavLink></li>}
//             {!user && <li><NavLink className={navLinkClass} to="/signup">Login / Signup</NavLink></li>}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
//           <FaLeaf className="text-green-500" /> GardenHub
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-2">
//           <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
//           <li><NavLink className={navLinkClass} to="/gardeners">Featured Gardeners</NavLink></li>
//           <li><NavLink className={navLinkClass} to="/browse">Browse Tips</NavLink></li>
//           {user && <li><NavLink className={navLinkClass} to="/tipsubmit">Share a Garden Tip</NavLink></li>}
//           {user && <li><NavLink className={navLinkClass} to="/my-tips">My Tips</NavLink></li>}
//           <li><NavLink className={navLinkClass} to="/all-gardeners">Explore Gardeners</NavLink></li>
//         </ul>
//       </div>

//       <div className="navbar-end flex items-center gap-3">
//         {/* Theme Toggle Button */}
//         <button
//           onClick={toggleTheme}
//           className="btn btn-ghost btn-circle"
//           title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//           aria-label="Toggle Theme"
//         >
//           {theme === 'light' ? (
//             <FaMoon className="h-5 w-5" />
//           ) : (
//             <FaSun className="h-5 w-5" />
//           )}
//         </button>

//         {/* User Authentication Section */}
//         {!user ? (
//           <Link to="/signup" className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-full">
//             Login / Signup
//           </Link>
//         ) : (
//           <div
//             className="relative group"
//             onMouseEnter={() => setShowLogout(true)}
//             onMouseLeave={() => setShowLogout(false)}
//           >
//             <img
//               src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
//               alt="User"
//               className="w-10 h-10 rounded-full border border-green-500 cursor-pointer"
//               title={user.displayName}
//             />
//             {showLogout && (
//               <div className="absolute right-0 top-12 bg-base-100 shadow-lg border border-base-300 p-2 rounded w-40 z-10">
//                 <p className="text-sm text-center mb-2 text-base-content truncate">{user.displayName}</p>
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-sm w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
//                 >
//                   <FiLogOut className="mr-1" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Nav;



import React, { useContext, useState, useEffect } from 'react';
import { FaLeaf, FaMoon, FaSun } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebse/firebase.config';
import { Authcontext } from '../Auth/Authcontext';

const Nav = () => {
  const { user } = useContext(Authcontext);
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setShowLogout(false);
    navigate('/signup');
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'bg-green-100 dark:bg-green-700 text-green-800 dark:text-white rounded px-3 py-1'
      : 'text-base-content hover:bg-green-100 dark:hover:bg-green-700 rounded px-3 py-1';

  const handleMobileClick = () => setMobileMenuOpen(false);

  return (
    <div className="navbar bg-base-100 text-base-content shadow-sm px-4 py-2 sticky top-0 z-50">
      {/* Left: Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
          >
            <li><NavLink onClick={handleMobileClick} className={navLinkClass} to="/">Home</NavLink></li>
            <li><NavLink onClick={handleMobileClick} className={navLinkClass} to="/gardeners">Explore Gardeners</NavLink></li>
            <li><NavLink onClick={handleMobileClick} className={navLinkClass} to="/browse">Browse Tips</NavLink></li>
           
            {user && <li><NavLink onClick={handleMobileClick} className={navLinkClass} to="/tipsubmit">Share a Garden Tip</NavLink></li>}
            {user && <li><NavLink onClick={handleMobileClick} className={navLinkClass} to="/my-tips">My Tips</NavLink></li>}
            {!user && <li><NavLink onClick={handleMobileClick} className={navLinkClass} to="/signup">Login / Signup</NavLink></li>}
            <li><NavLink className={navLinkClass} to="/all-gardeners">Explore Gardeners</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <FaLeaf className="text-green-500" /> GardenHub
        </Link>
      </div>

      {/* Center: Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
          <li><NavLink className={navLinkClass} to="/gardeners">Featured Gardeners</NavLink></li>
          <li><NavLink className={navLinkClass} to="/browse">Browse Tips</NavLink></li>
          {user && <li><NavLink className={navLinkClass} to="/tipsubmit">Share a Garden Tip</NavLink></li>}
          {user && <li><NavLink className={navLinkClass} to="/my-tips">My Tips</NavLink></li>}
          <li><NavLink className={navLinkClass} to="/all-gardeners">Explore Gardeners</NavLink></li>
        </ul>
      </div>

      {/* Right: Theme toggle + User Auth */}
      <div className="navbar-end flex items-center gap-3 relative">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon className="h-5 w-5" /> : <FaSun className="h-5 w-5" />}
        </button>

        {/* Auth Buttons */}
        {!user ? (
          <Link to="/signup" className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-full">
            Signup
          </Link>
        ) : (
          <div className="relative">
            <img
              src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
              alt="User"
              className="w-10 h-10 rounded-full border border-green-500 cursor-pointer"
              title={user.displayName}
              onClick={() => setShowLogout(!showLogout)}
            />
            {showLogout && (
              <div className="absolute right-0 top-12 bg-base-100 text-base-content shadow-lg border border-base-300 p-2 rounded w-44 z-50">
                <p className="text-sm text-center mb-2 truncate">{user.displayName}</p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
                >
                  <FiLogOut className="mr-1" /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
