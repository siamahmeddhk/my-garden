// import React from 'react';
// import { useLoaderData } from 'react-router';

// const Allgardeners = () => {

//     const user = useLoaderData();
//     console.log(user);
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Allgardeners;


import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router'; // ✅ correct import path
import GardenerCard from '../comp/GardenerCard';

const Allgardeners = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setUsers(data);
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">All Gardeners</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(gardener => (
          <GardenerCard key={gardener._id} gardener={gardener} />
        ))}
      </div>
    </div>
  );
};

export default Allgardeners;
