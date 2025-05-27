// import React, { useEffect } from 'react';

// const Topcontree = () => {

//    useEffect(()=>{
     
//     fetch('https://y-gray-seven.vercel.app/topuser')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//     })
//    })

//     return (
//         <div>
//             <h1>this is top</h1>
//         </div>
//     );
// };

// export default Topcontree;


// import React, { useEffect, useState } from 'react';

// const Topcontree = () => {
//   const [topUser, setTopUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://y-gray-seven.vercel.app/topuser')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setTopUser(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Failed to fetch top user:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10 text-gray-500">Loading top contributor...</p>;
//   }

//   if (!topUser) {
//     return <p className="text-center mt-10 text-red-500">No top contributor found.</p>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-green-50 dark:bg-green-900 p-6 rounded-2xl shadow-lg text-center">
//       <h2 className="text-2xl font-bold text-green-800 dark:text-green-100 mb-4">
//         🌟 Top Contributor of the Month
//       </h2>
//       <img
//         src={topUser.image}
//         alt={topUser.name}
//         className="w-24 h-24 rounded-full mx-auto border-4 border-green-400 mb-4"
//       />
//       <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{topUser.name}</h3>
//       <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
//         {topUser.district}, Age {topUser.age}, {topUser.gender}
//       </p>
//       <p className="text-green-700 dark:text-green-200 font-medium">
//         Shared <span className="font-bold">{topUser.totalSharedTips}</span> garden tips!
//       </p>
//       <p className="text-sm mt-3 text-gray-700 dark:text-gray-300">🌿 {topUser.bio}</p>
//     </div>
//   );
// };

// export default Topcontree;



import React, { useEffect, useState } from 'react';

const Topcontree = () => {
  const [topUser, setTopUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://y-gray-seven.vercel.app/topuser')
      .then(res => res.json())
      .then(data => {
        setTopUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch top user:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full text-center py-10">
        <p className="text-gray-500 text-lg">Loading top contributor...</p>
      </div>
    );
  }

  if (!topUser) {
    return (
      <div className="w-full text-center py-10">
        <p className="text-red-500 text-lg">No top contributor found.</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-gradient-to-r from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto bg-white dark:bg-green-950 shadow-xl rounded-3xl p-8 md:flex items-center gap-8">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src={topUser.image}
            alt={topUser.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-green-500 object-cover shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-700 dark:text-green-100 mb-2">
            🌟 Top Contributor of the Month
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{topUser.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 italic mb-2">
            {topUser.district} | Age: {topUser.age} | {topUser.gender}
          </p>
          <p className="text-green-800 dark:text-green-200 text-lg font-medium">
            Shared <span className="font-bold">{topUser.totalSharedTips}</span> garden tips 🌱
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{topUser.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default Topcontree;

