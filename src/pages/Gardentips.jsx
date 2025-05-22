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


import React from 'react';
import { useLoaderData } from 'react-router';
import Singeltips from '../comp/Singeltips';

const Gardentips = () => {
    const tips = useLoaderData();
    console.log(tips);

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
                        {tips.map(tip => (
                            <Singeltips key={tip._id} tip={tip} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Gardentips;
