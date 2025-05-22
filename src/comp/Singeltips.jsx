// import React from 'react';
// import { IoEyeSharp } from "react-icons/io5";

// const Singeltips = ({tip}) => {
//     return (
//         <div>
//             <tr>
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="rounded h-12 w-12">
//                 <img
//                   src={tip.imageUrl}
//                   alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//           </div>
//         </td>
//         <td>
//           <div className="font-bold">{tip.title}</div>    
//         </td>
//         <td>{tip.category}</td>
//         <th>
//           <button className="btn btn-ghost btn-xs"><IoEyeSharp />
// </button>
//         </th>
//       </tr>
//         </div>
//     );
// };

// export default Singeltips;


import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router';

const Singeltips = ({ tip }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-full w-12 h-12 overflow-hidden">
                            <img
                                src={tip.imageUrl}
                                alt={tip.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-semibold text-base">{tip.title}</div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">
                    {tip.category}
                </span>
            </td>
            <td>
                    <Link to={`/tips/${tip._id}`}>
                <button className="btn btn-outline btn-xs">
                       <IoEyeSharp size={16} />
                </button>
                    </Link>
                 
            </td>
        </tr>
    );
};

export default Singeltips;
