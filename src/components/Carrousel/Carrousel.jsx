import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import {Autoplay, EffectCoverflow, FreeMode, Pagination} from "swiper/modules";
import {useState} from "react";
import {Link} from "react-router-dom";
import {projects} from "../../constants";
import {RxArrowTopRight} from "react-icons/rx";

export default function Carrousel() {
  const [isActive, setIsActive] = useState(false);

  const toggleChangeColor = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly items-center mt-32 lg:mt-0">
      <div className="flex flex-col items-left mb-6 lg:mb-0">
        <h1 className="text-white-section1 text-5xl font-main">Projects</h1>
        <p className="text-white-section1 text-lg font-main">
          Find Your{" "}
          <span className="text-hover-font text-xl">Favorite Projects</span>
        </p>
        <button className="button" onClick={toggleChangeColor}>
          {isActive ? "Black" : "White"}
        </button>
      </div>
      <Swiper
        modules={[FreeMode, Pagination, Autoplay, EffectCoverflow]}
        centeredSlides={true}
        slidesPerView={"auto"}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 16,
          stretch: 0,
          depth: 256,
          modifier: 2,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 88,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 128,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 128,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 160,
          },
        }}
        freeMode={true}
        autoplay={{delay: 3000}}
        className="max-w-[96%] lg:max-w-[56%] lg:h-screen lg:py-40 mx-0"
      >
        {projects.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div className="text-white-section1 px-4 py-6 xl:px-6 xl:py-6 h-[320px] w-[256px] md:h-[352px] md:w-[320px] lg:h-[352px] lg:w-[256px] transition-all">
                <div
                  className={
                    isActive
                      ? "absolute inset-0 bg-white-section1 opacity-60 rounded-xl transition-all duration-300"
                      : "absolute inset-0 bg-black-deenk opacity-70 rounded-xl transition-all duration-300"
                  }
                />
                <div className="relative flex flex-col gap-4">
                  <item.icon
                    className={
                      isActive
                        ? "text-black-font w-[32px] h-[32px]"
                        : "text-white-section1 w-[32px] h-[32px]"
                    }
                  />
                  <h1
                    className={
                      isActive
                        ? "text-lg md:text-3xl font-main text-black-font"
                        : "text-lg md:text-3xl font-main text-white-section1"
                    }
                  >
                    <strong>{item.title}</strong>
                  </h1>
                  <p
                    className={
                      isActive
                        ? "text-base md:text-lg font-main text-black-deenk max-w-[50%] sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%]"
                        : "text-base md:text-lg font-main text-white-section1 opacity-50 max-w-[50%] sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[100%]"
                    }
                  >
                    {item.content}
                  </p>
                </div>
                <div>
                  <Link to={`projectdetails/${item.id}`}>
                    <RxArrowTopRight
                      size={"2em"}
                      className="absolute bottom-5 left-3 xl:left-6 text-white-section1 opacity-50"
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
