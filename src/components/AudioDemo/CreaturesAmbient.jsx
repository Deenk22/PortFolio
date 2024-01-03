import {useRef, useState} from "react";
import {GiRaiseZombie} from "react-icons/gi";
import {GiShamblingZombie} from "react-icons/gi";

export default function CreaturesAmbient({t}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("assets/audio/creaturesAmbient.ogg"));

  const handlePlaySound = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex justify-center md:justify-end items-center gap-3 md:mr-4 mb-8 md:mb-4 md:mt-32">
      <p className="font-main text-sm text-black-font dark:text-white-section1">
        {isPlaying ? t("mensajeZombie01") : t("mensajeZombie02")}
      </p>
      <button
        type="button"
        value={"Play Sound"}
        onClick={handlePlaySound}
        className="dark:bg-white-section1 bg-black-font rounded-full font-main text-sm text-white-section1 dark:text-black-font p-3"
      >
        {isPlaying ? (
          <div className="flex gap-2">
            {t("buttonZombie2")} <GiShamblingZombie className="text-xl" />
          </div>
        ) : (
          <div className="flex gap-2">
            {t("buttonZombie")} <GiRaiseZombie className="text-xl" />
          </div>
        )}
      </button>
    </div>
  );
}
