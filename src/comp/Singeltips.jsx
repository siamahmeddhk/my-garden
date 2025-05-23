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


// import React from 'react';
// import { IoEyeSharp } from "react-icons/io5";
// import { Link } from 'react-router';

// const Singeltips = ({ tip }) => {
//     return (
//         <tr>
//             <td>
//                 <div className="flex items-center gap-3">
//                     <div className="avatar">
//                         <div className="rounded-full w-12 h-12 overflow-hidden">
//                             <img
//                                 src={tip.imageUrl}
//                                 alt={tip.title}
//                                 className="object-cover w-full h-full"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </td>
//             <td>
//                 <div className="font-semibold text-base">{tip.title}</div>
//             </td>
//             <td>
//                 <span className="badge badge-ghost badge-sm">
//                     {tip.category}
//                 </span>
//             </td>
//             <td>
//                     <Link to={`/tips/${tip._id}`}>
//                 <button className="btn btn-outline btn-xs">
//                        <IoEyeSharp size={16} />
//                 </button>
//                     </Link>
                 
//             </td>
//         </tr>
//     );
// };

// export default Singeltips;


import React, { useState } from 'react';
import { IoEyeSharp, IoImageOutline, IoLeafOutline } from "react-icons/io5";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from 'react-router';

const SingleTips = ({ tip }) => {
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Error handling for missing tip prop
    if (!tip) {
        return (
            <tr className="bg-red-50 border-l-4 border-red-400">
                <td colSpan="4" className="p-4">
                    <div className="flex items-center gap-3 text-red-600">
                        <FaExclamationTriangle className="text-red-500" />
                        <span className="font-medium">Error: Tip data is missing</span>
                    </div>
                </td>
            </tr>
        );
    }

    // Destructure with default values for error handling
    const {
        imageUrl = null,
        title = 'Untitled Tip',
        category = 'General',
        _id = null,
        description = '',
        author = 'Anonymous',
       
    } = tip;

    const handleImageError = () => {
        setImageError(true);
    };

    const getCategoryColor = (category) => {
        const categoryColors = {
            'watering': 'badge-info',
            'planting': 'badge-success',
            'fertilizing': 'badge-warning',
            'pruning': 'badge-secondary',
            'pest-control': 'badge-error',
            'general': 'badge-neutral',
            'seasonal': 'badge-accent'
        };
        
        const normalizedCategory = category?.toLowerCase().replace(/\s+/g, '-');
        return categoryColors[normalizedCategory] || 'badge-ghost';
    };

    const truncateTitle = (title, maxLength = 40) => {
        if (!title) return 'Untitled Tip';
        return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
    };

    return (
        <tr 
            className={`hover:bg-green-50 transition-all duration-300 ${isHovered ? 'bg-green-25 shadow-sm' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Column */}
            <td className="p-4">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-full w-14 h-14 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-200 shadow-sm">
                            {!imageError && imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                    onError={handleImageError}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <IoLeafOutline className="text-2xl text-green-400" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </td>

            {/* Title Column */}
            <td className="p-4">
                <div className="max-w-xs">
                    <div 
                        className="font-semibold text-base text-gray-800 hover:text-green-700 transition-colors duration-200 cursor-default"
                        title={title} // Show full title on hover
                    >
                        {truncateTitle(title)}
                    </div>
                    {description && (
                        <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {description.substring(0, 60)}...
                        </div>
                    )}
                </div>
            </td>

            {/* Category Column */}
            <td className="p-4">
                <div className="flex flex-col gap-1">
                    <span className={`badge ${getCategoryColor(category)} badge-sm font-medium text-xs px-3 py-1`}>
                        {category}
                    </span>
                    {author && author !== 'Anonymous' && (
                        <span className="text-xs text-gray-400 italic">
                            by {author}
                        </span>
                    )}
                </div>
            </td>

            {/* Action Column */}
            <td className="p-4">
                <div className="flex items-center gap-2">
                    {_id ? (
                        <Link to={`/tips/${_id}`}>
                            <button 
                                className="btn btn-outline btn-sm hover:btn-success hover:scale-110 transition-all duration-300 group shadow-sm"
                                title="View Tip Details"
                            >
                                <IoEyeSharp 
                                    size={16} 
                                    className="group-hover:text-white transition-colors duration-200" 
                                />
                                <span className="hidden sm:inline ml-1 text-xs">View</span>
                            </button>
                        </Link>
                    ) : (
                        <button 
                            className="btn btn-disabled btn-sm cursor-not-allowed"
                            title="Tip ID not available"
                        >
                            <FaExclamationTriangle size={14} />
                            <span className="hidden sm:inline ml-1 text-xs">N/A</span>
                        </button>
                    )}
                    
                    {/* Additional Actions */}
                    <div className="dropdown dropdown-end">
                        <button 
                            tabIndex={0} 
                            className="btn btn-ghost btn-xs hover:btn-neutral transition-all duration-200"
                            title="More options"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-box w-32 border border-gray-200">
                            <li>
                                <a className="text-xs hover:bg-green-50">
                                    <IoLeafOutline size={14} />
                                    Save Tip
                                </a>
                            </li>
                            <li>
                                <a className="text-xs hover:bg-blue-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                    Share
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default SingleTips;