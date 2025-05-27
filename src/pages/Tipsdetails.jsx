


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