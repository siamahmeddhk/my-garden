// import React from 'react';

// const Form = () => {


//     const handelsubmittips = (e) => {
//         e.preventdefault()
//         const form = e.target;
//         const formdata = new FormData(form);
//         const tipsdata = Object.fromEntries(formdata.entries());
//         console.log(tipsdata);
//     }


//     return (
//         <div>
//             <div onSubmit={handelsubmittips} className="max-w-2xl mx-auto mt-12 pb-6">
//   <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//     <div className="card-body p-6">
//       <h2 className="text-2xl font-semibold text-green-800 mb-6">Share Your Garden Tip</h2>
      
//       <form className="space-y-4">
//         {/* Title */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Title</span>
//           </label>
//           <input 
//             type="text" 
//             name="title"
//             placeholder="e.g., How I Grow Tomatoes Indoors" 
//             className="input input-bordered w-full bg-gray-50 rounded-lg"
//             required
//           />
//         </div>

//         {/* Plant Type/Topic */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Plant Type/Topic</span>
//           </label>
//           <input 
//             type="text" 
//             name="plantType"
//             placeholder="e.g., Tomatoes, Succulents, Organic Pest Control" 
//             className="input input-bordered w-full bg-gray-50 rounded-lg"
//             required
//           />
//         </div>

//         {/* Difficulty Level */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Difficulty Level</span>
//           </label>
//           <select 
//             name="difficulty"
//             className="select select-bordered w-full bg-gray-50 rounded-lg"
//             required
//           >
//             <option value="">Select difficulty</option>
//             <option value="Easy">Easy</option>
//             <option value="Medium">Medium</option>
//             <option value="Hard">Hard</option>
//           </select>
//         </div>

//         {/* Description */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Description</span>
//           </label>
//           <textarea 
//             name="description"
//             className="textarea textarea-bordered h-32 w-full bg-gray-50 rounded-lg" 
//             placeholder="Share your gardening tip in detail..."
//             required
//           ></textarea>
//         </div>

//         {/* Images URL */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Image URL (optional)</span>
//           </label>
//           <input 
//             type="url" 
//             name="imageUrl"
//             placeholder="https://example.com/image.jpg" 
//             className="input input-bordered w-full bg-gray-50 rounded-lg"
//           />
//         </div>

//         {/* Category */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Category</span>
//           </label>
//           <select 
//             name="category"
//             className="select select-bordered w-full bg-gray-50 rounded-lg"
//             required
//           >
//             <option value="">Select category</option>
//             <option value="Composting">Composting</option>
//             <option value="Plant Care">Plant Care</option>
//             <option value="Vertical Gardening">Vertical Gardening</option>
//             <option value="Indoor Gardening">Indoor Gardening</option>
//             <option value="Pest Control">Pest Control</option>
//             <option value="Soil Health">Soil Health</option>
//           </select>
//         </div>

//         {/* Availability */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Availability</span>
//           </label>
//           <select 
//             name="availability"
//             className="select select-bordered w-full bg-gray-50 rounded-lg"
//             required
//           >
//             <option value="Public">Public</option>
//             <option value="Hidden">Hidden</option>
//           </select>
//         </div>

//         {/* User Info (read-only) */}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text font-medium text-gray-700">Submitted By</span>
//           </label>
//           <div className="bg-gray-100 p-3 rounded-lg">
//             <p className="text-gray-700">
//               {/* <span className="font-semibold">Name:</span> {userName} */}
//               <br />
//               {/* <span className="font-semibold">Email:</span> {userEmail} */}
//             </p>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="card-actions justify-end mt-6">
//           <button 
//             type="submit" 
//             className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
//           >
//             Share Tip
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Form;


import React from 'react';

const Form = () => {
    // You would typically get these from your auth context or props
    const userName = "User Name"; // Replace with actual user data
    const userEmail = "user@example.com"; // Replace with actual user data

    const handleSubmitTips = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const tipsData = Object.fromEntries(formData.entries());
        console.log(tipsData);

        fetch('http://localhost:3000/tips',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(tipsData)
        })
        .then(res=>{
            console.log(res)
        }).then(data=>{
            console.log(data)
        })
        
        // Here you would typically send the data to your backend
        // Example: 
        // axios.post('/api/tips', tipsData).then(...)
    }

    return (
        <div className="max-w-2xl mx-auto mt-12 pb-6">
            <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
                <div className="card-body p-6">
                    <h2 className="text-2xl font-semibold text-green-800 mb-6">Share Your Garden Tip</h2>
                    
                    <form onSubmit={handleSubmitTips} className="space-y-4">
                        {/* Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Title</span>
                            </label>
                            <input 
                                type="text" 
                                name="title"
                                placeholder="e.g., How I Grow Tomatoes Indoors" 
                                className="input input-bordered w-full bg-gray-50 rounded-lg"
                                required
                            />
                        </div>

                        {/* Plant Type/Topic */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Plant Type/Topic</span>
                            </label>
                            <input 
                                type="text" 
                                name="plantType"
                                placeholder="e.g., Tomatoes, Succulents, Organic Pest Control" 
                                className="input input-bordered w-full bg-gray-50 rounded-lg"
                                required
                            />
                        </div>

                        {/* Difficulty Level */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Difficulty Level</span>
                            </label>
                            <select 
                                name="difficulty"
                                className="select select-bordered w-full bg-gray-50 rounded-lg"
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
                                <span className="label-text font-medium text-gray-700">Description</span>
                            </label>
                            <textarea 
                                name="description"
                                className="textarea textarea-bordered h-32 w-full bg-gray-50 rounded-lg" 
                                placeholder="Share your gardening tip in detail..."
                                required
                            ></textarea>
                        </div>

                        {/* Images URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Image URL (optional)</span>
                            </label>
                            <input 
                                type="url" 
                                name="imageUrl"
                                placeholder="https://example.com/image.jpg" 
                                className="input input-bordered w-full bg-gray-50 rounded-lg"
                            />
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Category</span>
                            </label>
                            <select 
                                name="category"
                                className="select select-bordered w-full bg-gray-50 rounded-lg"
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
                                <span className="label-text font-medium text-gray-700">Availability</span>
                            </label>
                            <select 
                                name="availability"
                                className="select select-bordered w-full bg-gray-50 rounded-lg"
                                required
                            >
                                <option value="Public">Public</option>
                                <option value="Hidden">Hidden</option>
                            </select>
                        </div>

                        {/* User Info (read-only) */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-gray-700">Submitted By</span>
                            </label>
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <p className="text-gray-700">
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
                                Share Tip
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;