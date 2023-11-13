import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FreeMode, Pagination} from "swiper/modules";
import {ServiceData} from "../../constants";
import {RxArrowTopRight} from "react-icons/rx";

export default function Carrousel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-deenk">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white-section1 text-5xl font-main">Projects</h1>
        <p className="text-white-section1 text-lg font-main mb-16">
          Find Your{" "}
          <span className="text-hover-font text-xl">Favorite Projects</span>
        </p>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 64,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 64,
          },
        }}
        // onSlideChange={() => console.log("Changing")}
        // onSwiper={(swiper) => console.log(swiper)}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[76%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white-section1 rounded-xl px-6 py-8 h-[256px] w-[248px] md:h-[304px] md:w-[216px] lg:h-[512px] lg:w-[352px] cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${item.backgroundImage})`}}
              />
              <div className="absolute inset-0 bg-black-deenk opacity-40 group-hover:opacity-80" />
              <div className="relative flex flex-col gap-4">
                <item.icon className="text-white-section1 group-hover:text-hover-font w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-3xl font-main text-white-section1 group-hover:text-hover-font">
                  <strong>{item.title}</strong>
                </h1>
                <p className="lg:text-[16px] font-main text-white-section1">
                  {item.content}
                </p>
              </div>
              <RxArrowTopRight
                size={"2em"}
                className="absolute bottom-5 left-6 w-[35px] h-[35px]text-white group-hover:text-hover-font group-hover:rotate-45 duration-200"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
