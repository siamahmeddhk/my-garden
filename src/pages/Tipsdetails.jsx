import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { IoHeart } from 'react-icons/io5';

const Tipsdetails = () => {
  const tip = useLoaderData();
  const [likes, setLikes] = useState(tip.totalLiked || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (liked) return;

    try {
      // Optimistically update UI
      setLikes(likes + 1);
      setLiked(true);

      // Send update to DB
      await fetch(`https://your-api.com/tips/${tip._id}/like`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalLiked: likes + 1 }),
      });
    } catch (error) {
      console.error('Failed to like tip:', error);
      // Rollback if needed
      setLikes(likes);
      setLiked(false);
    }
  };

  return (
    <div className="max-w-2xl mt-12 mx-auto">
      <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <figure className="h-72 overflow-hidden">
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="text-3xl font-bold text-green-800">{tip.title}</h2>

          <p className="text-gray-700 mt-3">{tip.description}</p>

          <ul className="mt-4 text-sm text-gray-700 space-y-1">
            <li><span className="font-medium">Category:</span> {tip.category}</li>
            <li><span className="font-medium">Shared by:</span> {tip.authorName || "Anonymous"}</li>
            <li><span className="font-medium">Posted:</span> {new Date(tip.date || Date.now()).toLocaleDateString()}</li>
          </ul>

          <div className="card-actions justify-between mt-6 items-center">
            <div className="flex items-center gap-2 text-green-700">
              <IoHeart className={`text-2xl ${liked ? 'text-red-600' : 'hover:text-red-400'}`} />
              <span>{likes} Likes</span>
            </div>

            <button
              onClick={handleLike}
              disabled={liked}
              className={`btn btn-sm rounded-full px-4 py-1 text-white transition ${
                liked ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {liked ? 'Liked' : 'Like Tip'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tipsdetails;

