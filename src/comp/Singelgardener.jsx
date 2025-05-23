// import React from 'react';

// const Singelgardener = ({gardener}) => {
//     const {image, name, age, gender, experiences, totalSharedTips, status} = gardener;
//     return (
// //         <div>
// //             <div className="card bg-base-100 w-96 shadow-sm">
// //   <figure>
// //     <img
// //       src={image}
// //       alt="Shoes" />
// //   </figure>
// //   <div className="card-body">
// //     <h2 className="card-title">{name}</h2>
// //     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
// //     <div className="card-actions justify-end">
// //       <button className="btn btn-primary">Buy Now</button>
// //     </div>
// //   </div>
// // </div>
// //         </div>



//     <div className="max-w-sm mt-12 mx-auto">
//   <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//     <figure className="h-60 overflow-hidden">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//       />
//     </figure>
//     <div className="card-body p-6">
//       <h2 className="text-2xl font-semibold text-green-800">{name}</h2>
//       <ul className="mt-4 text-sm text-gray-700 space-y-1">
//         <li><span className="font-medium">Age:</span> {age}</li>
//         <li><span className="font-medium">Gender:</span> {gender}</li>
//         <li>
//           <span className="font-medium">Status:{status}</span>{" "}
//           <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
//             {status}
//           </span>
//         </li>
//         <li><span className="font-medium">Experience:</span> {experiences} years</li>
//         <li><span className="font-medium">Shared Tips:</span> {totalSharedTips}</li>
//       </ul>
//       <div className="card-actions justify-end mt-4">
//         <button className="btn btn-success btn-sm rounded-full px-4 py-1 text-white">
//           View Profile
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//     );
// };

// export default Singelgardener;







import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaVenusMars, FaLeaf, FaSeedling, FaEye, FaUserCircle } from 'react-icons/fa';

const SingleGardener = ({ gardener }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Error handling for missing gardener prop
  if (!gardener) {
    return (
      <div className="max-w-sm mx-auto">
        <div className="card bg-red-50 border-2 border-red-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="card-body p-6 text-center">
            <div className="text-red-400 text-4xl mb-4">
              <FaUserCircle className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              Gardener Not Found
            </h3>
            <p className="text-red-600 text-sm">
              No gardener information available to display.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Destructure with default values for error handling
  const {
    image = null,
    name = 'Unknown Gardener',
    age = 'N/A',
    gender = 'Not specified',
    experiences = 0,
    totalSharedTips = 0,
    status = 'Unknown'
  } = gardener;

  const handleImageError = () => {
    setImageError(true);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getExperienceLevel = (years) => {
    if (years >= 10) return { level: 'Expert', color: 'text-purple-600' };
    if (years >= 5) return { level: 'Advanced', color: 'text-blue-600' };
    if (years >= 2) return { level: 'Intermediate', color: 'text-green-600' };
    return { level: 'Beginner', color: 'text-orange-600' };
  };

  const experienceInfo = getExperienceLevel(experiences);

  return (
    <div className="max-w-sm mx-auto">
      <div 
        className={`card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${isHovered ? 'border-green-300' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <figure className="h-64 overflow-hidden relative bg-gradient-to-br from-green-100 to-emerald-100">
          {!imageError && image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FaUser className="text-6xl text-green-300" />
            </div>
          )}
          
          {/* Status Badge Overlay */}
          <div className="absolute top-3 right-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm bg-white/90 ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
        </figure>

        {/* Card Body */}
        <div className="card-body p-6">
          {/* Name and Experience Level */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-green-800 mb-1 flex items-center gap-2">
              <FaLeaf className="text-green-500" />
              {name}
            </h2>
            <p className={`text-sm font-semibold ${experienceInfo.color}`}>
              {experienceInfo.level} Gardener
            </p>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Age */}
            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
              <FaCalendarAlt className="text-blue-500" />
              <div>
                <p className="text-xs text-blue-600 font-medium">Age</p>
                <p className="text-sm font-semibold text-blue-800">{age}</p>
              </div>
            </div>

            {/* Gender */}
            <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
              <FaVenusMars className="text-purple-500" />
              <div>
                <p className="text-xs text-purple-600 font-medium">Gender</p>
                <p className="text-sm font-semibold text-purple-800">{gender}</p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <FaSeedling className="text-green-500" />
              <div>
                <p className="text-xs text-green-600 font-medium">Experience</p>
                <p className="text-sm font-semibold text-green-800">{experiences} years</p>
              </div>
            </div>

            {/* Shared Tips */}
            <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
              <FaLeaf className="text-orange-500" />
              <div>
                <p className="text-xs text-orange-600 font-medium">Tips Shared</p>
                <p className="text-sm font-semibold text-orange-800">{totalSharedTips}</p>
              </div>
            </div>
          </div>

          {/* Experience Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-600">Experience Level</span>
              <span className="text-xs font-medium text-gray-600">{experiences}/15 years</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((experiences / 15) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Action Button */}
          <div className="card-actions justify-end">
            <button className="btn bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <FaEye className="text-sm" />
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGardener;