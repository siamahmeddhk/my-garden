// import React, { use } from "react";
// import { Authcontext } from "../Auth/Authcontext";
// import { useLoaderData } from "react-router";
// import Swal from "sweetalert2";

// const Update = () => {
//   const {
//     _id,
//     title,
//     description,
//     plantType,
//     difficulty,
//     imageUrl,
//     availability,
//     category,
//   } = useLoaderData();
//   console.log(title);

//   const { user } = use(Authcontext);
//   const userName = user?.displayName || "Anonymous";
//   const userEmail = user?.email;

//   const handleupdate = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const upData = Object.fromEntries(formData.entries());
//     console.log(upData);

//     fetch(`http://localhost:3000/tips/${_id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(upData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount) {
//           Swal.fire({
//             title: "Drag me!",
//             icon: "success",
//             draggable: true,
//           });
//         }
//       });
//   };

//   return (
//     <div>
//       <div className="max-w-2xl mx-auto mt-12 pb-6">
//         <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//           <div className="card-body p-6">
//             <h2 className="text-2xl font-semibold text-green-800 mb-6">
//               Update
//             </h2>

//             <form onSubmit={handleupdate} className="space-y-4">
//               {/* Title */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Title
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   defaultValue={title}
//                   className="input input-bordered w-full bg-gray-50 rounded-lg"
//                   required
//                 />
//               </div>

//               {/* Plant Type/Topic */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Plant Type/Topic
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   name="plantType"
//                   defaultValue={plantType}
//                   className="input input-bordered w-full bg-gray-50 rounded-lg"
//                   required
//                 />
//               </div>

//               {/* Difficulty Level */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Difficulty Level
//                   </span>
//                 </label>
//                 <select
//                   name="difficulty"
//                   defaultValue={difficulty}
//                   className="select select-bordered w-full bg-gray-50 rounded-lg"
//                   required
//                 >
//                   <option value="">Select difficulty</option>
//                   <option value="Easy">Easy</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Hard">Hard</option>
//                 </select>
//               </div>

//               {/* Description */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Description
//                   </span>
//                 </label>
//                 <textarea
//                   name="description"
//                   defaultValue={description}
//                   className="textarea textarea-bordered h-32 w-full bg-gray-50 rounded-lg"
//                   placeholder="Share your gardening tip in detail..."
//                   required
//                 ></textarea>
//               </div>

//               {/* Images URL */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Image URL (optional)
//                   </span>
//                 </label>
//                 <input
//                   type="url"
//                   name="imageUrl"
//                   defaultValue={imageUrl}
//                   placeholder="https://example.com/image.jpg"
//                   className="input input-bordered w-full bg-gray-50 rounded-lg"
//                 />
//               </div>

//               {/* Category */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Category
//                   </span>
//                 </label>
//                 <select
//                   name="category"
//                   defaultValue={category}
//                   className="select select-bordered w-full bg-gray-50 rounded-lg"
//                   required
//                 >
//                   <option value="">Select category</option>
//                   <option value="Composting">Composting</option>
//                   <option value="Plant Care">Plant Care</option>
//                   <option value="Vertical Gardening">Vertical Gardening</option>
//                   <option value="Indoor Gardening">Indoor Gardening</option>
//                   <option value="Pest Control">Pest Control</option>
//                   <option value="Soil Health">Soil Health</option>
//                 </select>
//               </div>

//               {/* Availability */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Availability
//                   </span>
//                 </label>
//                 <select
//                   name="availability"
//                   defaultValue={availability}
//                   className="select select-bordered w-full bg-gray-50 rounded-lg"
//                   required
//                 >
//                   <option value="Public">Public</option>
//                   <option value="Hidden">Hidden</option>
//                 </select>
//               </div>

//               {/* User Info (read-only) */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text font-medium text-gray-700">
//                     Submitted By
//                   </span>
//                 </label>
//                 <div className="bg-gray-100 p-3 rounded-lg">
//                   <p className="text-gray-700">
//                     <span className="font-semibold">Name:</span> {userName}
//                     <br />
//                     <span className="font-semibold">Email:</span> {userEmail}
//                   </p>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="card-actions justify-end mt-6">
//                 <button
//                   type="submit"
//                   className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Update;



import React, { use } from "react";
import { Authcontext } from "../Auth/Authcontext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const {
    _id,
    title,
    description,
    plantType,
    difficulty,
    imageUrl,
    availability,
    category,
  } = useLoaderData();
  console.log(title);

  const { user } = use(Authcontext);
  const userName = user?.displayName || "Anonymous";
  const userEmail = user?.email;

  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const upData = Object.fromEntries(formData.entries());
    console.log(upData);

    fetch(`http://localhost:3000/tips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-12 pb-6">
        <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
          <div className="card-body p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Update Garden Tip
            </h2>

            <form onSubmit={handleupdate} className="space-y-4">
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                />
              </div>

              {/* Plant Type/Topic */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Plant Type/Topic
                  </span>
                </label>
                <input
                  type="text"
                  name="plantType"
                  defaultValue={plantType}
                  className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                />
              </div>

              {/* Difficulty Level */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Difficulty Level
                  </span>
                </label>
                <select
                  name="difficulty"
                  defaultValue={difficulty}
                  className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Description
                  </span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  className="textarea textarea-bordered h-32 w-full bg-base-200 rounded-lg focus:bg-base-100"
                  placeholder="Share your gardening tip in detail..."
                  required
                ></textarea>
              </div>

              {/* Images URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Image URL (optional)
                  </span>
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  defaultValue={imageUrl}
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                />
              </div>

              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Category
                  </span>
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Composting">Composting</option>
                  <option value="Plant Care">Plant Care</option>
                  <option value="Vertical Gardening">Vertical Gardening</option>
                  <option value="Indoor Gardening">Indoor Gardening</option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Soil Health">Soil Health</option>
                </select>
              </div>

              {/* Availability */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Availability
                  </span>
                </label>
                <select
                  name="availability"
                  defaultValue={availability}
                  className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                >
                  <option value="Public">Public</option>
                  <option value="Hidden">Hidden</option>
                </select>
              </div>

              {/* User Info (read-only) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Submitted By
                  </span>
                </label>
                <div className="bg-base-200 p-3 rounded-lg border border-base-300">
                  <p className="text-base-content">
                    <span className="font-semibold">Name:</span> {userName}
                    <br />
                    <span className="font-semibold">Email:</span> {userEmail}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-end mt-6">
                <button
                  type="submit"
                  className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
                >
                  Update Tip
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;