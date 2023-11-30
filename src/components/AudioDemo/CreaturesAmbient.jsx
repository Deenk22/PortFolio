import {useRef, useState} from "react";
import {GiRaiseZombie} from "react-icons/gi";
import {GiShamblingZombie} from "react-icons/gi";

export default function CreaturesAmbient({t}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(
    new Audio("./src/assets/audio/creatures-ambient.ogg")
  );

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
    <div className="flex justify-end items-center gap-3 mr-2 mb-2">
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
          <GiShamblingZombie fontSize={"1.3rem"} />
        ) : (
          <GiRaiseZombie fontSize={"1.3rem"} />
        )}
      </button>
    </div>
  );
}
