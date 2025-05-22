import React from 'react';

const Singelgardener = ({gardener}) => {
    const {image, name, age, gender, experiences, totalSharedTips, status} = gardener;
    return (
//         <div>
//             <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src={image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{name}</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//         </div>



    <div className="max-w-sm mt-12 mx-auto">
  <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
    <figure className="h-60 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </figure>
    <div className="card-body p-6">
      <h2 className="text-2xl font-semibold text-green-800">{name}</h2>
      <ul className="mt-4 text-sm text-gray-700 space-y-1">
        <li><span className="font-medium">Age:</span> {age}</li>
        <li><span className="font-medium">Gender:</span> {gender}</li>
        <li>
          <span className="font-medium">Status:{status}</span>{" "}
          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {status}
          </span>
        </li>
        <li><span className="font-medium">Experience:</span> {experiences} years</li>
        <li><span className="font-medium">Shared Tips:</span> {totalSharedTips}</li>
      </ul>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-success btn-sm rounded-full px-4 py-1 text-white">
          View Profile
        </button>
      </div>
    </div>
  </div>
</div>

    );
};

export default Singelgardener;