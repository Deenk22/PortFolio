import {useTranslation} from "react-i18next";
import AudioDemo from "../components/AudioDemo/AudioDemo";
import AudioDemoArrival from "../components/AudioDemo/AudioDemoArrival";
import CreaturesAmbient from "../components/AudioDemo/CreaturesAmbient";
import {imageCard} from "../constants/imageCards";

export default function Music() {
  const {t} = useTranslation(["sectionMusic"]);
  return (
    <section
      id="music"
      className="wrapper bg-light-mode dark:bg-dark-mode dark:mt-8 dark:mb-8 dark:rounded-3xl"
    >
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 p-8 mt-24 md:mt-24 md:mb-16">
        <h1 className="font-main text-7xl text-black-font dark:text-white-section1 md:w-[38%] text-center">
          After The Earth
        </h1>

        <p className="font-main text-black-font dark:text-white-section1 md:w-[38%]">
          <strong className="text-darkgray-pt dark:text-hover-font text-xl mr-1">
            {t("soundDesign")}
          </strong>{" "}
          {t("descripción")}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-16 px-4">
        {imageCard.map((img) => {
          const {title, src, link} = img;
          return (
            <div key={title}>
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="rounded-xl opacity-50 hover:opacity-100 duration-200 hover:shadow-xl w-[512px]"
                />
              </a>
              <p className="font-main text-sm text-black-font dark:text-white-section1 mt-2">
                {title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 justify-evenly items-center mb-16 p-8">
        <div>
          <AudioDemo t={t} />
        </div>
        <div>
          <AudioDemoArrival t={t} />
        </div>
      </div>
      <CreaturesAmbient t={t} />
    </section>
  );
}
