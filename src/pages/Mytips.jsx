

// import React, { useContext, useEffect, useState } from 'react';
// import Mysingletips from '../comp/Mysingletips';
// import { Authcontext } from '../Auth/Authcontext';

// const Mytips = () => {
//   const { user } = useContext(Authcontext);
//   const [mytips, setMytips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`https://y-gray-seven.vercel.app/mytips?email=${user.email}`)
//         .then(res => res.json())
//         .then(data => {
//           setMytips(data);
//           setLoading(false);
//         })
//         .catch(err => console.error(err));
//     }
//   }, [user?.email]);

//   if (loading) {
//     return <div className="text-center py-10 text-lg">Loading your tips...</div>;
//   }

//   return (
//     <div className="p-4">
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="table table-zebra">
//           <thead className="bg-green-100 text-gray-700">
//             <tr>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mytips.length > 0 ? (
//               mytips.map(tips => (
//                 <Mysingletips key={tips._id} tips={tips} />
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-gray-400">No tips found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Mytips;


// import React, { useContext, useEffect, useState } from 'react';
// import Mysingletips from '../comp/Mysingletips';
// import { Authcontext } from '../Auth/Authcontext';

// const Mytips = () => {
//   const { user } = useContext(Authcontext);
//   const [mytips, setMytips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`https://y-gray-seven.vercel.app/mytips?email=${user.email}`)
//         .then(res => res.json())
//         .then(data => {
//           setMytips(data);
//           setLoading(false);
//         })
//         .catch(err => {
//           console.error(err);
//           setLoading(false);
//         });
//     }
//   }, [user?.email]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="table table-zebra">
//           <thead className="bg-green-100 text-gray-700">
//             <tr>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mytips.length > 0 ? (
//               mytips.map(tips => (
//                 <Mysingletips key={tips._id} tips={tips} />
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-gray-400">No tips found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Mytips;


import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Mysingletips from '../comp/Mysingletips';
import { Authcontext } from '../Auth/Authcontext';

const Mytips = () => {
  const { user } = useContext(Authcontext);
  const [mytips, setMytips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://y-gray-seven.vercel.app/mytips?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMytips(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      {mytips.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="table table-zebra">
            <thead className="bg-green-100 dark:bg-green-900 text-gray-700 dark:text-white">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mytips.map(tips => (
                <Mysingletips key={tips._id} tips={tips} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-2">
            {user?.displayName || 'Friend'}, you haven’t shared any tips yet!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Start sharing your green wisdom with others 🌱
          </p>
          <Link to="/tipsubmit">
            <button className="btn bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
              Share a Garden Tip
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Mytips;
