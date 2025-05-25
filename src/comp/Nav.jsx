// import React, {} from 'react';
// import { FaLeaf } from 'react-icons/fa';
// import { FiLogOut } from 'react-icons/fi';
// import { Link, NavLink } from 'react-router';

// const Nav = () => {
 

//   return (
//     <div className="navbar bg-transparent shadow-sm px-4 py-2">
//       <div className="navbar-start">
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li><a>Home</a></li>
//             <li><a>Share a Garden Tip</a></li>
//             <li><a>Explore Gardeners</a></li>
//             <li><a>My Tips</a></li>
//            <li><a>Login / Signup</a></li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl flex items-center gap-2">
//           <FaLeaf className="text-green-500" /> GardenHub
//         </a>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-2">
//           <NavLink to='/'>
//             <li><a>Home</a></li>    
//           </NavLink>
         
//           <NavLink to='/gardeners'>
//                <li><a>Explore Gardeners</a></li>
//           </NavLink>  

//            <NavLink to='/browse'>
//                <li><a>Browse Tips</a></li>
//           </NavLink>

//            <NavLink to='/tipsubmit'>
//                <li><a>Share a Garden Tip</a></li>
//           </NavLink>
//            <NavLink to='/my-tips'>
//                  <li><a>My Tips</a></li>
//           </NavLink>
       
//         </ul>
//       </div>

//       <div className="navbar-end">
//         <Link to='/signup'>

//          <a className="btn btn-sm bg-green-500 hover:bg-green-600 text-white">Login / Signup</a>

        
//         </Link>
         
    

//       </div>
//     </div>
//   );
// };

// export default Nav;


// import React, { useContext, useState } from 'react';

// import { FaLeaf } from 'react-icons/fa';
// import { FiLogOut } from 'react-icons/fi';
// import { Link, NavLink } from 'react-router';
// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebse/firebase.config';
// import { Authcontext } from '../Auth/Authcontext';

// const Nav = () => {
//   const { user } = useContext(Authcontext); // make sure `user` is passed from AuthProvider
//   const [showLogout, setShowLogout] = useState(false);

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setShowLogout(false);
//     });
//   };

//   return (
//     <div className="navbar bg-transparent shadow-sm px-4 py-2">
//       <div className="navbar-start">
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
//             <li><NavLink to="/browse">Browse Tips</NavLink></li>
//             {user && <li><NavLink to="/tipsubmit">Share a Garden Tip</NavLink></li>}
//             {user && <li><NavLink to="/my-tips">My Tips</NavLink></li>}
//             {!user && <li><NavLink to="/signup">Login / Signup</NavLink></li>}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl flex items-center gap-2">
//           <FaLeaf className="text-green-500" /> GardenHub
//         </a>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-2">
//           <NavLink to="/"><li><a>Home</a></li></NavLink>
//           <NavLink to="/gardeners"><li><a>Explore Gardeners</a></li></NavLink>
//           <NavLink to="/browse"><li><a>Browse Tips</a></li></NavLink>
//           {user && <NavLink to="/tipsubmit"><li><a>Share a Garden Tip</a></li></NavLink>}
//           {user && <NavLink to="/my-tips"><li><a>My Tips</a></li></NavLink>}
//         </ul>
//       </div>

//       <div className="navbar-end relative">
//         {!user ? (
//           <Link to="/signup">
//             <a className="btn btn-sm bg-green-500 hover:bg-green-600 text-white">Login / Signup</a>
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
//               <div className="absolute right-0 top-12 bg-white shadow-lg border p-2 rounded w-32 z-10">
//                 <p className="text-sm text-center mb-2">{user.displayName}</p>
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






import React, { useContext, useState, useEffect } from 'react';
import { FaLeaf, FaMoon, FaSun } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebse/firebase.config';
import { Authcontext } from '../Auth/Authcontext';

const Nav = () => {
  const { user } = useContext(Authcontext);
  const [showLogout, setShowLogout] = useState(false);
  const [theme, setTheme] = useState('light');

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setShowLogout(false);
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-2">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
            <li><NavLink to="/browse">Browse Tips</NavLink></li>
            <li><NavLink to="/newsletter">Newsletter</NavLink></li>
            {user && <li><NavLink to="/tipsubmit">Share a Garden Tip</NavLink></li>}
            {user && <li><NavLink to="/my-tips">My Tips</NavLink></li>}
            {!user && <li><NavLink to="/signup">Login / Signup</NavLink></li>}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <FaLeaf className="text-green-500" /> GardenHub
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <NavLink to="/"><li><a>Home</a></li></NavLink>
          <NavLink to="/gardeners"><li><a>Explore Gardeners</a></li></NavLink>
          <NavLink to="/browse"><li><a>Browse Tips</a></li></NavLink>
           

          {user && <NavLink to="/tipsubmit"><li><a>Share a Garden Tip</a></li></NavLink>}
          {user && <NavLink to="/my-tips"><li><a>My Tips</a></li></NavLink>}

           <li><NavLink to="/newsletter">Newsletter</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <FaMoon className="h-5 w-5" />
          ) : (
            <FaSun className="h-5 w-5" />
          )}
        </button>

        {/* User Authentication Section */}
        {!user ? (
          <Link to="/signup">
            <a className="btn btn-sm bg-green-500 hover:bg-green-600 text-white">Login / Signup</a>
          </Link>
        ) : (
          <div
            className="relative cursor-pointer"
            onClick={() => setShowLogout(!showLogout)}
            onMouseEnter={() => setShowLogout(true)}
            onMouseLeave={() => setShowLogout(false)}
          >
            <img
              src={user.photoURL || 'https://i.ibb.co/tLkDzqP/user.png'}
              alt="User"
              className="w-10 h-10 rounded-full border border-green-500"
              title={user.displayName}
            />
            {showLogout && (
              <div className="absolute right-0 top-12 bg-base-100 shadow-lg border border-base-300 p-2 rounded w-32 z-10">
                <p className="text-sm text-center mb-2 text-base-content">{user.displayName}</p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full bg-red-500 hover:bg-red-600 text-white"
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