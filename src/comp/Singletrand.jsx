


import React from 'react';

const Singeltrand = ({ tip }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-green-200 transform hover:-translate-y-1">
      {/* Image with gradient overlay */}
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={tip.imageUrl} 
          alt={tip.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      <div className="p-6">
        {/* Title with decorative underline */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-green-800 mb-1 relative inline-block">
            {tip.title || "Untitled Tip"}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-green-200 transform scale-x-75 origin-left"></span>
          </h2>
        </div>
        
        {/* Description with fade effect */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 transition-all duration-300 hover:line-clamp-none">
          {tip.description}
        </p>

        {/* Tags with hover effects */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-600 px-3 py-1 rounded-full text-xs text-white font-medium hover:bg-green-700 transition-colors cursor-default">
            {tip.category}
          </span>
          <span className="bg-blue-500 px-3 py-1 rounded-full text-xs text-white font-medium hover:bg-blue-600 transition-colors cursor-default">
            {tip.difficulty}
          </span>
          <span className="bg-yellow-500 px-3 py-1 rounded-full text-xs text-white font-medium hover:bg-yellow-600 transition-colors cursor-default">
            {tip.plantType}
          </span>
        </div>

        {/* Author section with icon */}
        <div className="flex items-center text-sm text-gray-700 mb-4">
          <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="font-medium">By:</span> {tip.authorName}
        </div>

        {/* Footer with animated like button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            {tip.availability}
          </span>
          <button className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors group">
            <span className="font-semibold">{tip.totalLiked}</span>
            <svg 
              className="w-5 h-5 group-hover:scale-110 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singeltrand;