import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import {Autoplay, EffectCoverflow, FreeMode} from "swiper/modules";
import {useState} from "react";
import {Link} from "react-router-dom";
import {projects} from "../../constants";
import {RxArrowTopRight} from "react-icons/rx";

export default function Carrousel({t, translation}) {
  const [isActive, setIsActive] = useState(false);

  const toggleChangeColor = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly items-center mt-32 lg:mt-0">
      <div className="flex flex-col items-left mb-6 lg:mb-0">
        <h1 className="text-white-section1 text-5xl font-main">
          {t("título")}
        </h1>
        <p className="text-white-section1 text-lg font-main">
          {t("título2Part1")}{" "}
          <span className="text-hover-font text-xl">{t("título2Part2")}</span>
        </p>
        <button className="button" onClick={toggleChangeColor}>
          {isActive ? t("negro") : t("blanco")}
        </button>
      </div>
      <Swiper
        modules={[FreeMode, Autoplay, EffectCoverflow]}
        grabCursor={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
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
        autoplay={{delay: 4500}}
        className="max-w-[96%] lg:max-w-[56%] lg:h-screen lg:py-40 mx-0"
      >
        {projects.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div className="text-white-section1 responsive-px responsive-py h-[416px] w-[304px] sm:h-[352px] sm:w-[320px] md:h-[352px] md:w-[384px] lg:h-[352px] lg:w-[256px] xl:h-[250px] transition-all">
                <div
                  className={
                    isActive
                      ? "absolute inset-0 bg-white-section1 opacity-70 rounded-xl transition-all duration-300"
                      : "absolute inset-0 bg-black-deenk opacity-70 rounded-xl transition-all duration-300"
                  }
                />
                <div className="relative flex flex-col gap-4">
                  <h1
                    className={
                      isActive
                        ? "text-xl md:text-2xl xl:text-3xl font-main text-black-font"
                        : "text-xl md:text-2xl xl:text-3xl font-main text-white-section1"
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
                    {translation(item.translate)}
                  </p>
                </div>
                <div>
                  <Link to={`projectdetails/${item.id}`}>
                    <RxArrowTopRight
                      fontSize={"2em"}
                      className="absolute bottom-7 left-2 xl:left-4 text-white-section1 opacity-90"
                    />
                    <p className="absolute text-sm md:text-base bottom-2 left-3 xl:left-5 text-white-section1 opacity-80">
                      {t("goTo")}
                    </p>
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
