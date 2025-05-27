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



// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import gsap from "gsap";

// const slides = [
//   {
//     message: `🌱 Grow Together: A mini workshop on plant care basics 
//     📅 Date: 15 June 2025 📍 Location: Dhaka, Bangladesh`,
//     image: "/cactus.png",
//   },
//   {
//     message: `🌿 Hands-on session for repotting and decorating plants\n📅 Date: 22 June 2025\n📍 Location: Chittagong, Bangladesh`,
//     image: "/indoor.png",
//   },
//   {
//     message: `🌼 Community event to exchange plant cuttings and seeds\n📅 Date: 29 June 2025\n📍 Location: Sylhet, Bangladesh`,
//     image: "/indoor2.png",
//   },
// ];


// const Banner = () => {
//   const slideRefs = useRef([]);

//   const animateText = (index) => {
//     const el = slideRefs.current[index];
//     if (el) {
//       gsap.fromTo(
//         el,
//         { autoAlpha: 0, x: -100 },
//         { autoAlpha: 1, x: 0, duration: 1, ease: "power2.out" }
//       );
//     }
//   };

//   useEffect(() => {
//     animateText(0); 
//   }, []);

//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <Swiper
//         spaceBetween={60}
//         centeredSlides={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onSlideChange={(swiper) => animateText(swiper.realIndex)}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full flex items-center">
       
//               <img
//                 src={slide.image}
//                 alt="Banner"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* Dark Overlay Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>

//               {/* Content on Left */}
//               <div
//                 ref={(el) => (slideRefs.current[index] = el)}
//                 className="z-10 text-left text-white max-w-xl px-6 md:px-20 ml-auto opacity-0"
//               >
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                   {slide.message}
//                 </h2>
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



// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import gsap from "gsap";

// const slides = [
//   {
//     message: `🌱 Grow Together: A mini workshop on plant care basics\n📅 Date: 15 June 2025\n📍 Location: Dhaka, Bangladesh`,
//     image: "/cactus.png",
//   },
//   {
//     message: `🌿 Hands-on session for repotting and decorating plants\n📅 Date: 22 June 2025\n📍 Location: Chittagong, Bangladesh`,
//     image: "/indoor.png",
//   },
//   {
//     message: `🌼 Community event to exchange plant cuttings and seeds\n📅 Date: 29 June 2025\n📍 Location: Sylhet, Bangladesh`,
//     image: "/indoor2.png",
//   },
// ];

// const Banner = () => {
//   const slideRefs = useRef([]);

//   const animateText = (index) => {
//     const el = slideRefs.current[index];
//     if (el) {
//       gsap.fromTo(
//         el,
//         { autoAlpha: 0, x: -100 },
//         { autoAlpha: 1, x: 0, duration: 1, ease: "power2.out" }
//       );
//     }
//   };

//   useEffect(() => {
//     animateText(0);
//   }, []);

//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <Swiper
//         spaceBetween={60}
//         centeredSlides={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onSlideChange={(swiper) => animateText(swiper.realIndex)}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full flex items-center">
//               <img
//                 src={slide.image}
//                 alt="Event"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent"></div>

//               {/* Slide Content */}
//               <div
//                 ref={(el) => (slideRefs.current[index] = el)}
//                 className="z-10 text-left text-white max-w-2xl px-6 md:px-16 ml-auto opacity-0"
//               >
//                 <h2 className="text-3xl md:text-5xl font-extrabold leading-snug whitespace-pre-line mb-6 drop-shadow-lg">
//                   {slide.message}
//                 </h2>
//                 <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-lg shadow-md transition">
//                   🌿 Explore Event
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


import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";

const slides = [
  {
    title: "Grow Together Workshop",
    description: "A mini workshop on plant care basics",
    date: "15 June 2025",
    location: "Dhaka, Bangladesh",
    image: "/cactus.png",
  },
  {
    title: "Repotting & Decoration",
    description: "Hands-on session for repotting and decorating plants",
    date: "22 June 2025",
    location: "Chittagong, Bangladesh",
    image: "/indoor.png",
  },
  {
    title: "Plant Exchange Community Meetup",
    description: "Community event to exchange plant cuttings and seeds",
    date: "29 June 2025",
    location: "Sylhet, Bangladesh",
    image: "/indoor2.png",
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => animateText(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent"></div>

              {/* Content Card */}
              <div
                ref={(el) => (slideRefs.current[index] = el)}
                className="relative z-10 max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-8 m-6 ml-auto shadow-lg text-white"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mb-6 text-lg leading-relaxed flex items-start gap-3">
                  <span className="text-green-300 text-2xl">🌿</span>
                  {slide.description}
                </p>
                <p className="flex items-center gap-3 mb-2 text-base font-semibold">
                  <span className="text-green-400 text-xl">📅</span>
                  {slide.date}
                </p>
                <p className="flex items-center gap-3 text-base font-semibold">
                  <span className="text-green-400 text-xl">📍</span>
                  {slide.location}
                </p>

                <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
                  🌿 Explore Event
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
