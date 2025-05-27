// import React, { useEffect, useState } from 'react';
// import Singeltrand from './Singletrand';

// const Tranding = () => {
    

//    const [alldata, setalldata] = useState([])
//    useEffect(()=>{
//     fetch('https://y-gray-seven.vercel.app/trandtips')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         setalldata(data)
//     })
//    },[])

//     return (
//         <div>
//                <div>
//       <h1>This is Trending</h1>
//       <div className=''>
//         {alldata.map(tip => (
//            <Singeltrand tip = {tip}></Singeltrand>  
//         ))}
//       </div>
//     </div>
//         </div>
//     );
// };

// export default Tranding;

import React, { useEffect, useState, useRef } from 'react';
import Singeltrand from './Singletrand';

const Tranding = () => {
    const [alldata, setalldata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        fetch('https://y-gray-seven.vercel.app/trandtips')
            .then(res => res.json())
            .then(data => {
                setalldata(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header with navigation arrows */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-green-800">Trending Now</h1>
                        <p className="text-gray-600">Discover popular gardening tips</p>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <button 
                            onClick={() => {
                                scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                            }}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-green-100 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => {
                                scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                            }}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-green-100 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="flex space-x-2">
                            {[...Array(3)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="w-4 h-4 bg-green-400 rounded-full animate-bounce"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                ></div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="relative">
                        {/* Scrollable container */}
                        <div 
                            ref={scrollContainerRef}
                            className="flex space-x-6 pb-8 overflow-x-auto scroll-snap-type-x-mandatory scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100"
                            style={{
                                scrollSnapType: 'x mandatory',
                                WebkitOverflowScrolling: 'touch',
                            }}
                        >
                            {alldata.map((tip, index) => (
                                <div 
                                    key={index}
                                    className="flex-shrink-0 w-80 scroll-snap-align-start transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="relative h-full bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
                                        <Singeltrand tip={tip} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Gradient fade effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-green-50 to-transparent pointer-events-none"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-green-50 to-transparent pointer-events-none"></div>
                    </div>
                )}

                {/* Scroll indicator (dots) */}
                <div className="flex justify-center mt-6 space-x-2">
                    {alldata.slice(0, Math.min(5, alldata.length)).map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => {
                                scrollContainerRef.current.scrollTo({
                                    left: index * 320,
                                    behavior: 'smooth'
                                });
                            }}
                            className="w-3 h-3 rounded-full bg-green-200 hover:bg-green-600 transition-colors"
                        ></button>
                    ))}
                </div>
            </div>

            {/* Custom scrollbar styling */}
            <style jsx global>{`
                .scrollbar-thin::-webkit-scrollbar {
                    height: 8px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: #f0fdf4;
                    border-radius: 4px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background-color: #86efac;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default Tranding;