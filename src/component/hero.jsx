import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero from "../assets/image/hero.png";
import hero1 from "../assets/image/hero1.png";
import hero2 from "../assets/image/hero2.png";
import hero3 from "../assets/image/hero3.png";

const slides = [
  hero,   // School Building
  hero1,  // Classroom
  hero2,  // Students
  hero3,  // Activities
];

function Hero() {
    return (
  <section id="home" className="h-screen">

    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      effect="fade"
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="h-screen"
    >

      {slides.map((image, index) => (

        <SwiperSlide key={index}>

          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}

            <div className="relative z-10 h-full flex items-center">

              <div className="max-w-7xl mx-auto w-full px-6">

                <div className="max-w-xl text-white">

                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">

                    Welcome to <br />

                    <span className="text-yellow-400">
                      Kamalam Public School
                    </span>

                  </h1>

                  <p className="text-lg md:text-xl mb-8">
                    Education • Culture • Spirituality
                  </p>

                  <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition duration-300">

                    Explore More

                  </button>

                </div>

              </div>

            </div>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  </section>
);
    
}

export default Hero;





