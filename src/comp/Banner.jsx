import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter"; //  Typewriter import

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
            
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

          
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent"></div>

           
              <div
                ref={(el) => (slideRefs.current[index] = el)}
                className="relative z-10 max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-8 m-6 ml-auto shadow-lg text-white"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
                  {/* ✅ Typewriter effect added */}
                  <Typewriter
                    words={[slide.title]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={3000}
                  />
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

