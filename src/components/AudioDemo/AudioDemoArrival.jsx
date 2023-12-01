import {useRef, useState} from "react";

export default function AudioDemoArrival({t}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(
    new Audio("./src/assets/audio/spacecraftlighting.ogg")
  );

  const handlePlaySound = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
      setTimeout(() => {
        setIsPlaying(false);
      }, 4000);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col item-start">
        <p className="font-main dark:text-white-section1 text-black-font">
          {t("aliens")}
        </p>
        <p className="font-main text-sm dark:text-white-section1 text-black-font dark:opacity-50">
          {t("audífonos")}
        </p>
      </div>
      <button
        type="button"
        value={"Play Sound"}
        onClick={handlePlaySound}
        className="flex items-center gap-2 dark:bg-white-section1 bg-black-font rounded-lg font-main text-sm text-white-section1 dark:text-black-font p-3"
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
    </div>
  );
}
