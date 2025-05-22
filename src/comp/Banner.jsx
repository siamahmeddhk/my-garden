// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//   {
//     message: "Grow Together",
//     image: "https://images.unsplash.com/photo-1605459655213-4ad325ccead8", // Replace with your gardening image
//   },
//   {
//     message: "Urban Gardening Made Simple",
//     image: "https://images.unsplash.com/photo-1524593247600-3c5f80d5b4c9",
//   },
//   {
//     message: "Your Green Journey Starts Here",
//     image: "https://images.unsplash.com/photo-1524594071260-412c9fd7c8f7",
//   },
// ];

// const Banner = () => {
//   return (
//     <div className="w-full h-[80vh]">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-full bg-cover bg-center flex items-center justify-center text-white relative"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//               }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//               <div className="z-10 text-center px-6">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.message}</h2>
//                 <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow">
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//   {
//     message: "Grow Together",
//     image: "https://plus.unsplash.com/premium_photo-1731623107535-94ba9ba610c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbiUyMGRhcmt8ZW58MHx8MHx8fDA%3D", // Replace with your gardening image
//   },
//   {
//     message: "Urban Gardening Made Simple",
//     image: "https://images.unsplash.com/photo-1688557676493-dbea7a8e7b2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVuJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     message: "Your Green Journey Starts Here",
//     image: "https://images.unsplash.com/photo-1616247279075-c38eb2837efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVuJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D",
//   },
// ];

// const Banner = () => {
//   return (
//     <div className="w-full h-[80vh]">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//       <SwiperSlide key={index}>
//   <div className="relative w-full h-full flex items-center justify-center text-white">
//     <img
//       src={slide.image}
//       alt="Banner"
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-opacity-40"></div>
//     <div className="z-10 text-center px-6">
//       <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.message}</h2>
//       <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow">
//         Explore Now
//       </button>
//     </div>
//   </div>
// </SwiperSlide>

//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;



import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";

const slides = [
  {
    message: "Grow Together",
    image: "https://images.unsplash.com/photo-1688557676493-dbea7a8e7b2e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    message: "Urban Gardening Made Simple",
    image: "https://images.unsplash.com/photo-1688557676493-dbea7a8e7b2e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    message: "Your Green Journey Starts Here",
    image: "https://images.unsplash.com/photo-1616247279075-c38eb2837efa?auto=format&fit=crop&w=1600&q=80",
  },
];

const Banner = () => {
  const slideRefs = useRef([]);

  const animateText = (index) => {
    const el = slideRefs.current[index];
    if (el) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, duration: 1, ease: "power2.out" }
      );
    }
  };

  useEffect(() => {
    animateText(0); 
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <Swiper
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => animateText(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center">
       
              <img
                src={slide.image}
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>

              {/* Content on Left */}
              <div
                ref={(el) => (slideRefs.current[index] = el)}
                className="z-10 text-left text-white max-w-xl px-6 md:px-20 ml-auto opacity-0"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.message}
                </h2>
                <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
