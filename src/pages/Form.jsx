// import React, { use } from 'react';
// import { Authcontext } from '../Auth/Authcontext';

// const Form = () => {
//     const {user} = use(Authcontext)
//     const userName = user?.displayName || "Anonymous";
//     const userEmail = user?.email;

//     const handleSubmitTips = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);
//         const tipsData = Object.fromEntries(formData.entries());
//         console.log(tipsData);

//     tipsData.authorName = user?.displayName || "Anonymous";
//     tipsData.authorEmail = user?.email;

//         fetch('http://localhost:3000/tips',{
//             method: 'POST',
//             headers: {
//                 'content-type' : 'application/json'
//             },
//             body: JSON.stringify(tipsData)
//         })
//         .then(res=>{
//             console.log(res)
//         }).then(data=>{
//             console.log(data)
//         })
        
//         // Here you would typically send the data to your backend
//         // Example: 
//         // axios.post('/api/tips', tipsData).then(...)
//     }

//     return (
//         <div className="max-w-2xl mx-auto mt-12 pb-6">
//             <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//                 <div className="card-body p-6">
//                     <h2 className="text-2xl font-semibold text-green-800 mb-6">Share Your Garden Tip</h2>
                    
//                     <form onSubmit={handleSubmitTips} className="space-y-4">
//                         {/* Title */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Title</span>
//                             </label>
//                             <input 
//                                 type="text" 
//                                 name="title"
//                                 placeholder="e.g., How I Grow Tomatoes Indoors" 
//                                 className="input input-bordered w-full bg-gray-50 rounded-lg"
//                                 required
//                             />
//                         </div>

//                         {/* Plant Type/Topic */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Plant Type/Topic</span>
//                             </label>
//                             <input 
//                                 type="text" 
//                                 name="plantType"
//                                 placeholder="e.g., Tomatoes, Succulents, Organic Pest Control" 
//                                 className="input input-bordered w-full bg-gray-50 rounded-lg"
//                                 required
//                             />
//                         </div>

//                         {/* Difficulty Level */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Difficulty Level</span>
//                             </label>
//                             <select 
//                                 name="difficulty"
//                                 className="select select-bordered w-full bg-gray-50 rounded-lg"
//                                 required
//                             >
//                                 <option value="">Select difficulty</option>
//                                 <option value="Easy">Easy</option>
//                                 <option value="Medium">Medium</option>
//                                 <option value="Hard">Hard</option>
//                             </select>
//                         </div>

//                         {/* Description */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Description</span>
//                             </label>
//                             <textarea 
//                                 name="description"
//                                 className="textarea textarea-bordered h-32 w-full bg-gray-50 rounded-lg" 
//                                 placeholder="Share your gardening tip in detail..."
//                                 required
//                             ></textarea>
//                         </div>

//                         {/* Images URL */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Image URL (optional)</span>
//                             </label>
//                             <input 
//                                 type="url" 
//                                 name="imageUrl"
//                                 placeholder="https://example.com/image.jpg" 
//                                 className="input input-bordered w-full bg-gray-50 rounded-lg"
//                             />
//                         </div>

//                         {/* Category */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Category</span>
//                             </label>
//                             <select 
//                                 name="category"
//                                 className="select select-bordered w-full bg-gray-50 rounded-lg"
//                                 required
//                             >
//                                 <option value="">Select category</option>
//                                 <option value="Composting">Composting</option>
//                                 <option value="Plant Care">Plant Care</option>
//                                 <option value="Vertical Gardening">Vertical Gardening</option>
//                                 <option value="Indoor Gardening">Indoor Gardening</option>
//                                 <option value="Pest Control">Pest Control</option>
//                                 <option value="Soil Health">Soil Health</option>
//                             </select>
//                         </div>

//                         {/* Availability */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Availability</span>
//                             </label>
//                             <select 
//                                 name="availability"
//                                 className="select select-bordered w-full bg-gray-50 rounded-lg"
//                                 required
//                             >
//                                 <option value="Public">Public</option>
//                                 <option value="Hidden">Hidden</option>
//                             </select>
//                         </div>

//                         {/* User Info (read-only) */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-gray-700">Submitted By</span>
//                             </label>
//                             <div className="bg-gray-100 p-3 rounded-lg">
//                                 <p className="text-gray-700">
//                                     <span  className="font-semibold">Name:</span> {userName}
//                                     <br />
//                                     <span className="font-semibold">Email:</span> {userEmail}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="card-actions justify-end mt-6">
//                             <button 
//                                 type="submit" 
//                                 className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
//                             >
//                                 Share Tip
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Form;


// import React, { use } from 'react';
// import { Authcontext } from '../Auth/Authcontext';

// const Form = () => {
//     const {user} = use(Authcontext)
//     const userName = user?.displayName || "Anonymous";
//     const userEmail = user?.email;

//     const handleSubmitTips = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);
//         const tipsData = Object.fromEntries(formData.entries());
//         console.log(tipsData);

//     tipsData.authorName = user?.displayName || "Anonymous";
//     tipsData.authorEmail = user?.email;

//         fetch('http://localhost:3000/tips',{
//             method: 'POST',
//             headers: {
//                 'content-type' : 'application/json'
//             },
//             body: JSON.stringify(tipsData)
//         })
//         .then(res=>{
//             console.log(res)
//         }).then(data=>{
//             console.log(data)
//         })
        
//         // Here you would typically send the data to your backend
//         // Example: 
//         // axios.post('/api/tips', tipsData).then(...)
//     }

//     return (
//         <div className="max-w-2xl mx-auto mt-12 pb-6">
//             <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
//                 <div className="card-body p-6">
//                     <h2 className="text-2xl font-semibold text-primary mb-6">Share Your Garden Tip</h2>
                    
//                     <form onSubmit={handleSubmitTips} className="space-y-4">
//                         {/* Title */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Title</span>
//                             </label>
//                             <input 
//                                 type="text" 
//                                 name="title"
//                                 placeholder="e.g., How I Grow Tomatoes Indoors" 
//                                 className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
//                                 required
//                             />
//                         </div>

//                         {/* Plant Type/Topic */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Plant Type/Topic</span>
//                             </label>
//                             <input 
//                                 type="text" 
//                                 name="plantType"
//                                 placeholder="e.g., Tomatoes, Succulents, Organic Pest Control" 
//                                 className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
//                                 required
//                             />
//                         </div>

//                         {/* Difficulty Level */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Difficulty Level</span>
//                             </label>
//                             <select 
//                                 name="difficulty"
//                                 className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
//                                 required
//                             >
//                                 <option value="">Select difficulty</option>
//                                 <option value="Easy">Easy</option>
//                                 <option value="Medium">Medium</option>
//                                 <option value="Hard">Hard</option>
//                             </select>
//                         </div>

//                         {/* Description */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Description</span>
//                             </label>
//                             <textarea 
//                                 name="description"
//                                 className="textarea textarea-bordered h-32 w-full bg-base-200 rounded-lg focus:bg-base-100" 
//                                 placeholder="Share your gardening tip in detail..."
//                                 required
//                             ></textarea>
//                         </div>

//                         {/* Images URL */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Image URL (optional)</span>
//                             </label>
//                             <input 
//                                 type="url" 
//                                 name="imageUrl"
//                                 placeholder="https://example.com/image.jpg" 
//                                 className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
//                             />
//                         </div>

//                         {/* Category */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Category</span>
//                             </label>
//                             <select 
//                                 name="category"
//                                 className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
//                                 required
//                             >
//                                 <option value="">Select category</option>
//                                 <option value="Composting">Composting</option>
//                                 <option value="Plant Care">Plant Care</option>
//                                 <option value="Vertical Gardening">Vertical Gardening</option>
//                                 <option value="Indoor Gardening">Indoor Gardening</option>
//                                 <option value="Pest Control">Pest Control</option>
//                                 <option value="Soil Health">Soil Health</option>
//                             </select>
//                         </div>

//                         {/* Availability */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Availability</span>
//                             </label>
//                             <select 
//                                 name="availability"
//                                 className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
//                                 required
//                             >
//                                 <option value="Public">Public</option>
//                                 <option value="Hidden">Hidden</option>
//                             </select>
//                         </div>

//                         {/* User Info (read-only) */}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-medium text-base-content">Submitted By</span>
//                             </label>
//                             <div className="bg-base-200 p-3 rounded-lg border border-base-300">
//                                 <p className="text-base-content">
//                                     <span  className="font-semibold">Name:</span> {userName}
//                                     <br />
//                                     <span className="font-semibold">Email:</span> {userEmail}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="card-actions justify-end mt-6">
//                             <button 
//                                 type="submit" 
//                                 className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
//                             >
//                                 Share Tip
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Form;






import React from 'react';
import { Authcontext } from '../Auth/Authcontext';

const Form = () => {
    const { user } = React.useContext(Authcontext);
    const userName = user?.displayName || "Anonymous";
    const userEmail = user?.email;

    const handleSubmitTips = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const tipsData = Object.fromEntries(formData.entries());

        // Add extra fields
        tipsData.authorName = userName;
        tipsData.authorEmail = userEmail;
        tipsData.totalLiked = 0; // ✅ Default like count

        fetch('http://localhost:3000/tips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tipsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Tip shared successfully!");
                form.reset(); // Optional reset
            });
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 pb-6">
            <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
                <div className="card-body p-6">
                    <h2 className="text-2xl font-semibold text-primary mb-6">Share Your Garden Tip</h2>
                    
                    <form onSubmit={handleSubmitTips} className="space-y-4">
                        {/* Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input 
                                type="text" 
                                name="title"
                                placeholder="e.g., How I Grow Tomatoes Indoors" 
                                className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                                required
                            />
                        </div>

                        {/* Plant Type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Plant Type/Topic</span>
                            </label>
                            <input 
                                type="text" 
                                name="plantType"
                                placeholder="e.g., Tomatoes, Succulents, Organic Pest Control" 
                                className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                                required
                            />
                        </div>

                        {/* Difficulty */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Difficulty Level</span>
                            </label>
                            <select 
                                name="difficulty"
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
                                <span className="label-text">Description</span>
                            </label>
                            <textarea 
                                name="description"
                                className="textarea textarea-bordered h-32 w-full bg-base-200 rounded-lg focus:bg-base-100" 
                                placeholder="Share your gardening tip in detail..."
                                required
                            ></textarea>
                        </div>

                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL (optional)</span>
                            </label>
                            <input 
                                type="url" 
                                name="imageUrl"
                                placeholder="https://example.com/image.jpg" 
                                className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                            />
                        </div>

                        {/* Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select 
                                name="category"
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
                                <span className="label-text">Availability</span>
                            </label>
                            <select 
                                name="availability"
                                className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                                required
                            >
                                <option value="Public">Public</option>
                                <option value="Hidden">Hidden</option>
                            </select>
                        </div>

                        {/* Read-only user info */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Submitted By</span>
                            </label>
                            <div className="bg-base-200 p-3 rounded-lg border border-base-300">
                                <p>
                                    <span className="font-semibold">Name:</span> {userName}
                                    <br />
                                    <span className="font-semibold">Email:</span> {userEmail}
                                </p>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="card-actions justify-end mt-6">
                            <button 
                                type="submit" 
                                className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700"
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
