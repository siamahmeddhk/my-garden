// import React, { } from 'react';
// import { useLoaderData } from 'react-router';
// import Singeltips from '../comp/Singeltips';
// import Mysingletips from '../comp/Mysingletips';
// import { Authcontext } from '../Auth/Authcontext';

// const Mytips = () => {
//     const mytips = useLoaderData()


//     return (
//         <div>
//              <div className="p-4">
//             <div className="overflow-x-auto rounded-lg shadow">
//                 <table className="table table-zebra">
//                     <thead className="bg-green-100 text-gray-700">
//                         <tr>
//                             <th>Image</th>
//                             <th>Title</th>
//                             <th>Category</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {mytips.map(tips => (
//                             <Mysingletips key={tips._id} tips={tips} />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Mytips;




// import React, { useEffect, useState, useContext } from 'react';
// import { Authcontext } from '../Auth/Authcontext';
// import Mysingletips from '../comp/Mysingletips';

// const Mytips = () => {
//     const { user } = useContext(Authcontext);
//     const [mytips, setMytips] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`https://y-gray-seven.vercel.app/tips?authorEmail=${user.email}`)
//                 .then(res => res.json())
//                 .then(data => setMytips(data));
//         }
//     }, [user]);

//     return (
//         <div className="p-4">
//             <div className="overflow-x-auto rounded-lg shadow">
//                 <table className="table table-zebra">
//                     <thead className="bg-green-100 text-gray-700">
//                         <tr>
//                             <th>Image</th>
//                             <th>Title</th>
//                             <th>Category</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {mytips.map(tips => (
//                             <Mysingletips key={tips._id} tips={tips} />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Mytips;


import React, { useContext, useEffect, useState } from 'react';
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
        .catch(err => console.error(err));
    }
  }, [user?.email]);

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading your tips...</div>;
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra">
          <thead className="bg-green-100 text-gray-700">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mytips.length > 0 ? (
              mytips.map(tips => (
                <Mysingletips key={tips._id} tips={tips} />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-400">No tips found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytips;
