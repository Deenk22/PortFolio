import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Navigation, EffectCards} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function ProjectsCarrousel({img, title}) {
  return (
    <div>
      <Swiper
        navigation={true}
        grabCursor={true}
        freeMode={true}
        autoplay={{delay: 2500}}
        modules={[Navigation, FreeMode, Autoplay, EffectCards]}
        className="rounded-xl"
      >
        {img.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
