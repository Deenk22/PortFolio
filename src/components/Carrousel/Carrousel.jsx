import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import {Autoplay, EffectCoverflow, FreeMode, Pagination} from "swiper/modules";
import {projects} from "../../constants";
import {RxArrowTopRight} from "react-icons/rx";
import {useState} from "react";

export default function Carrousel() {
  const [isActive, setIsActive] = useState(false);
  // const [isChanging, setIsChanging] = useState(false);

  const toggleChangeColor = () => {
    setIsActive(!isActive);
  };

  // const toggleSlideChange = (swiperCore) => {
  //   const {activeIndex} = swiperCore;
  //   setIsChanging(activeIndex);
  // };

  // console.log(isChanging);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center mt-4 mb-16">
        <h1 className="text-white-section1 text-5xl font-main">Projects</h1>
        <p className="text-white-section1 text-lg font-main ">
          Find Your{" "}
          <span className="text-hover-font text-xl">Favorite Projects</span>
        </p>
        <button
          className="text-base text-neutral-400 font-main bg-black-font px-8 py-2 mb-1 rounded-tr-2xl mt-4 shadow-xl hover:bg-white-section1 hover:text-black-font duration-300"
          onClick={toggleChangeColor}
        >
          {isActive ? "Black" : "White"}
        </button>
      </div>

      <Swiper
        modules={[FreeMode, Pagination, Autoplay, EffectCoverflow]}
        centeredSlides={true}
        slidesPerView={"auto"}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 18,
          stretch: 0,
          depth: 270,
          modifier: 2,
        }}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 64,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 88,
          },
        }}
        // onSlideChange={toggleSlideChange}
        // onSlideChange={(swiperCore) => {
        //   const {activeIndex, snapIndex, previousIndex, realIndex} = swiperCore;
        //   console.log({activeIndex, snapIndex, previousIndex, realIndex});
        //   console.log(swiperCore);
        // }}
        // onSwiper={(swiper) => console.log(swiper)}
        freeMode={true}
        autoplay={{delay: 3000}}
        className="max-w-[90%] lg:max-w-[62%]"
      >
        {projects.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col mb-20 text-white-section1 rounded-xl px-6 py-8 h-[256px] w-[248px] md:h-[304px] md:w-[216px] lg:h-[384px] lg:w-[320px]">
              <div
                className={
                  isActive
                    ? "absolute inset-0 bg-white-section1 opacity-70 rounded-xl transition-all duration-300"
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
                      ? "text-xl lg:text-3xl font-main text-black-font"
                      : "text-xl lg:text-3xl font-main text-white-section1"
                  }
                >
                  <strong>{item.title}</strong>
                </h1>
                <p
                  className={
                    isActive
                      ? "text-lg font-main text-black-deenk max-w-[50%] sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[100%]"
                      : "text-lg font-main text-white-section1 max-w-[50%] sm:max-w-[60%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[100%]"
                  }
                >
                  {item.content}
                </p>
              </div>
              <RxArrowTopRight
                size={"2em"}
                className="absolute bottom-5 truncate left-6 w-[35px] h-[35px]text-white group-hover:text-hover-font group-hover:rotate-45 duration-200"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
