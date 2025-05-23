import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaLeaf, FaSeedling, FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

const Notfound = () => {
  const [animate, setAnimate] = useState(false);
  const [floatingLeaves, setFloatingLeaves] = useState([]);

  useEffect(() => {
    setAnimate(true);
    // Generate random floating leaves
    const leaves = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2
    }));
    setFloatingLeaves(leaves);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating Leaves Animation */}
      {floatingLeaves.map(leaf => (
        <FaLeaf
          key={leaf.id}
          className="absolute text-green-300 opacity-30 animate-bounce"
          style={{
            left: `${leaf.left}%`,
            top: '20%',
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            fontSize: `${1 + Math.random()}rem`
          }}
        />
      ))}

      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main 404 Section */}
        <div className={`transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* 404 Number with Plant Design */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-green-100 select-none relative">
              404
              {/* Plant growing from the "0" */}
              <div className="absolute top-1/2 right-8 md:right-16 transform -translate-y-1/2">
                <FaSeedling className="text-green-500 text-4xl md:text-6xl animate-pulse" />
              </div>
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold text-green-800 mix-blend-multiply">
                Oops!
              </h2>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-8 space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">
              This Garden Path Doesn't Exist
            </h3>
            <p className="text-lg md:text-xl text-green-600 max-w-2xl mx-auto leading-relaxed">
              Looks like you've wandered into an untended part of our garden! 
              The page you're looking for seems to have been pruned away or never planted.
            </p>
          </div>

          {/* Decorative Garden Elements */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <FaLeaf className="text-green-400 text-2xl animate-pulse" />
              <FaSeedling className="text-green-500 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }} />
              <FaLeaf className="text-green-400 text-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              to="/"
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <FaHome className="group-hover:animate-bounce" />
              Back to Garden Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group bg-white hover:bg-green-50 text-green-600 border-2 border-green-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <FaArrowLeft className="group-hover:animate-pulse" />
              Go Back
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100">
            <h4 className="text-xl font-semibold text-green-800 mb-6">
              Explore Our Garden Instead
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                to="/gardeners"
                className="group p-4 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 transition-all duration-300 hover:shadow-md"
              >
                <div className="text-green-600 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  👨‍🌾
                </div>
                <h5 className="font-semibold text-green-800">Expert Gardeners</h5>
                <p className="text-sm text-green-600 mt-1">Meet our community</p>
              </Link>
              
              <Link 
                to="/browse"
                className="group p-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-all duration-300 hover:shadow-md"
              >
                <div className="text-emerald-600 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h5 className="font-semibold text-emerald-800">Garden Tips</h5>
                <p className="text-sm text-emerald-600 mt-1">Browse helpful advice</p>
              </Link>
              
              <Link 
                to="/tipsubmit"
                className="group p-4 bg-teal-50 hover:bg-teal-100 rounded-xl border border-teal-200 transition-all duration-300 hover:shadow-md"
              >
                <div className="text-teal-600 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  ✍️
                </div>
                <h5 className="font-semibold text-teal-800">Share Knowledge</h5>
                <p className="text-sm text-teal-600 mt-1">Submit your tips</p>
              </Link>
            </div>
          </div>

          {/* Fun Garden Quote */}
          <div className="mt-8 text-center">
            <p className="text-green-600 italic text-lg">
              "Every garden is a teacher, every page a lesson waiting to bloom." 🌱
            </p>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 text-green-300 opacity-50">
        <FaLeaf className="text-3xl animate-spin" style={{ animationDuration: '10s' }} />
      </div>
      <div className="absolute bottom-4 right-4 text-green-300 opacity-50">
        <FaSeedling className="text-3xl animate-pulse" />
      </div>
    </div>
  );
};

export default Notfound;