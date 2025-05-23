// import React from 'react';
// import { useLoaderData } from 'react-router';
// import Singeltips from '../comp/Singeltips';


// const Gardentips = () => {
//     const tips = useLoaderData()
//     console.log(tips);


//     return (
//         <div>
//            <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>   
//         <th> image </th>
//         <th> title </th>
//         <th> category </th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
    
//     {
//         tips.map(tip=><Singeltips tip={tip}></Singeltips>  )
//     }
    
     
//     </tbody>
   
//   </table>
// </div>
//         </div>
//     );
// };

// export default Gardentips;


// import React from 'react';
// import { useLoaderData } from 'react-router';
// import Singeltips from '../comp/Singeltips';

// const Gardentips = () => {
//     const tips = useLoaderData();
//     console.log(tips);

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
//                         {tips.map(tip => (
//                             <Singeltips key={tip._id} tip={tip} />
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Gardentips;



import React, { useState, useEffect } from 'react';
import SingleTips from '../comp/Singeltips';
 // Assuming it's in the same folder

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [difficulty, setDifficulty] = useState('');

  const fetchTips = async (level = '') => {
    try {
      const query = level ? `?difficultyLevel=${level}` : '';
      const response = await fetch(`http://localhost:3000/tips${query}`);
      const data = await response.json();
      setTips(data);
    } catch (err) {
      console.error('Error fetching tips:', err);
    }
  };

  useEffect(() => {
    fetchTips(difficulty);
  }, [difficulty]);

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-3 items-center">
        <label className="text-sm font-medium">Filter by Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="select select-bordered select-sm max-w-xs"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tips.length > 0 ? (
            tips.map((tip) => <SingleTips key={tip._id} tip={tip} />)
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-500">No tips found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTips;
