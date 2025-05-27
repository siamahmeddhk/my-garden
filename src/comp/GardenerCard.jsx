import React, { useState, useEffect } from 'react';

const GardenerCard = ({ gardener }) => {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden animate-pulse">
       
        <div className="w-full h-56 bg-gray-200"></div>
        
        <div className="p-5 space-y-4">
          {/* Name placeholder */}
          <div className="h-7 bg-gray-200 rounded-full w-3/4"></div>
          
          {/* Bio placeholder */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
          </div>
          
          {/* Stats grid placeholder */}
          <div className="grid grid-cols-2 gap-3 my-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="h-3 bg-gray-200 rounded-full w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded-full w-2/3"></div>
              </div>
            ))}
          </div>
          
        
          <div className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          className="w-full h-56 object-cover transition-opacity duration-300" 
          src={gardener.image} 
          alt={gardener.name}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl font-bold text-green-800">{gardener.name}</h2>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            gardener.status === 'Active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {gardener.status}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 italic mb-4 line-clamp-2">{gardener.bio}</p>

        <div className="grid grid-cols-2 gap-3 text-sm my-3">
          <div className="bg-green-50 p-2 rounded-lg">
            <p className="font-medium text-gray-700">Age</p>
            <p className="text-green-700">{gardener.age}</p>
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            <p className="font-medium text-gray-700">Gender</p>
            <p className="text-green-700">{gardener.gender}</p>
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            <p className="font-medium text-gray-700">District</p>
            <p className="text-green-700">{gardener.district}</p>
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            <p className="font-medium text-gray-700">Experience</p>
            <p className="text-green-700">{gardener.experiences} yrs</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          <span className="text-green-700 font-semibold flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {gardener.totalSharedTips} Tips
          </span>
          <button className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;