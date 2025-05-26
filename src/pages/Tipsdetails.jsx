
// import { useLoaderData } from 'react-router';
// import { IoHeart } from 'react-icons/io5';

// const Tipsdetails = () => {
//   const tip = useLoaderData();
  
 
//   return (
//     <div className="max-w-2xl mt-12 mx-auto">
//       <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//         <figure className="h-72 overflow-hidden">
//           <img
//             src={tip.imageUrl}
//             alt={tip.title}
//             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//           />
//         </figure>
//         <div className="card-body p-6">
//           <h2 className="text-3xl font-bold text-green-800">{tip.title}</h2>

//           <p className="text-gray-700 mt-3">{tip.description}</p>

//           <ul className="mt-4 text-sm text-gray-700 space-y-1">
//             <li><span className="font-medium">Category:</span> {tip.category}</li>
//             <li><span className="font-medium">Shared by:</span> {tip.authorName || "Anonymous"}</li>
//             <li><span className="font-medium">Posted:</span> {new Date(tip.date || Date.now()).toLocaleDateString()}</li>
//           </ul>

//           <div className="card-actions justify-between mt-6 items-center">
//             <div className="flex items-center gap-2 text-green-700">
           
//             </div>

          
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tipsdetails;






// import { useLoaderData } from 'react-router';
// import { IoHeart } from 'react-icons/io5';
// import { useState } from 'react';

// const Tipsdetails = () => {
//   const tip = useLoaderData();
//   const [likes, setLikes] = useState(tip.totalLiked || 0);
//   const [liked, setLiked] = useState(false);

//   const handleLike = async () => {
//     if (liked) return;

//     const newLikes = likes + 1;
//     setLikes(newLikes);
//     setLiked(true);

//     try {
//       const res = await fetch(`https://y-gray-seven.vercel.app/tips/${tip._id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ totalLiked: newLikes }),
//       });

//       if (!res.ok) {
//         throw new Error('Failed to update likes');
//       }

//     } catch (err) {
//       console.error(err);
//       // roll back if needed
//       setLikes(likes); // reset like
//       setLiked(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mt-12 mx-auto">
//       <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
//         <figure className="h-72 overflow-hidden">
//           <img
//             src={tip.imageUrl}
//             alt={tip.title}
//             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//           />
//         </figure>
//         <div className="card-body p-6">
//           <h2 className="text-3xl font-bold text-primary">{tip.title}</h2>

//           <p className="text-base-content mt-3">{tip.description}</p>

//           <ul className="mt-4 text-sm text-base-content space-y-1">
//             <li><span className="font-medium">Category:</span> {tip.category}</li>
//             <li><span className="font-medium">Shared by:</span> {tip.authorName || "Anonymous"}</li>
//             <li><span className="font-medium">Posted:</span> {new Date(tip.date || Date.now()).toLocaleDateString()}</li>
//           </ul>

//           <div className="card-actions justify-between mt-6 items-center">
//             <button
//               onClick={handleLike}
//               className={`btn btn-sm ${liked ? 'btn-success' : 'btn-outline'} btn-error flex items-center gap-2`}
//             >
//               <IoHeart className="text-lg" /> {likes} {likes === 1 ? 'Like' : 'Likes'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tipsdetails;




import { useLoaderData } from 'react-router';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const TipsDetails = () => {
  const tip = useLoaderData();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(tip.totalLiked || 0);
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (liked || isLoading) return;

    setIsLoading(true);
    const newLikes = likes + 1;
    
    try {
      // Optimistic UI update
      setLikes(newLikes);
      setLiked(true);

      const res = await fetch(`https://y-gray-seven.vercel.app/tips/${tip._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalLiked: newLikes }),
      });

      if (!res.ok) {
        throw new Error('Failed to update likes');
      }

      const data = await res.json();
      // Ensure UI matches server state
      setLikes(data.totalLiked);
    } catch (err) {
      console.error(err);
      // Rollback on error
      setLikes(likes);
      setLiked(false);
      // Show error to user
      alert('Failed to like. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mt-12 mx-auto px-4">
      <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
        <figure className="h-72 overflow-hidden">
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="text-3xl font-bold text-primary">{tip.title}</h2>
          
          <div className="badge badge-secondary">{tip.category}</div>
          
          <div className="mt-3">
            <h3 className="font-semibold">Plant Type:</h3>
            <p>{tip.plantType}</p>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">Description:</h3>
            <p className="text-base-content">{tip.description}</p>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold">Difficulty:</h3>
            <p className="capitalize">{tip.difficulty}</p>
          </div>

          <div className="divider"></div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">
                <span className="font-medium">Shared by:</span> {tip.authorName || "Anonymous"}
              </p>
              <p className="text-sm">
                <span className="font-medium">Posted:</span> {new Date(tip.date || Date.now()).toLocaleDateString()}
              </p>
            </div>
            
            <button
              onClick={handleLike}
              disabled={isLoading}
              className={`btn btn-sm ${liked ? 'btn-error' : 'btn-outline btn-error'} flex items-center gap-2`}
              aria-label={liked ? 'Unlike this tip' : 'Like this tip'}
            >
              {liked ? (
                <IoHeart className="text-lg" />
              ) : (
                <IoHeartOutline className="text-lg" />
              )}
              <span>
                {likes} {likes === 1 ? 'Like' : 'Likes'}
              </span>
              {isLoading && <span className="loading loading-spinner loading-xs"></span>}
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button 
          onClick={() => navigate(-1)} 
          className="btn btn-neutral btn-sm"
        >
          Back to Tips
        </button>
      </div>
    </div>
  );
};

export default TipsDetails;