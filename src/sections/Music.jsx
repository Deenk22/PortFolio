import {useTranslation} from "react-i18next";
import AudioDemo from "../components/AudioDemo/AudioDemo";
import AudioDemoArrival from "../components/AudioDemo/AudioDemoArrival";
import CreaturesAmbient from "../components/AudioDemo/CreaturesAmbient";
import {imageCard} from "../constants/imageCards";

export default function Music() {
  const {t} = useTranslation(["sectionMusic"]);

  return (
    <section id="music" className="wrapper bg-light-mode dark:bg-dark-mode">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 p-8 mt-16 md:mt-24 md:mb-16">
        <h1 className="font-main text-7xl text-black-font dark:text-white-section1 mb-8 md:mb-0 md:w-[38%] text-center">
          After The Earth
        </h1>

        <p className="font-main text-black-font dark:text-white-section1 md:w-[38%] mb-8 md:mb-0">
          <strong className="text-darkgray-pt dark:text-hover-font text-xl mr-1">
            {t("soundDesign")}
          </strong>{" "}
          {t("descripción")}
        </p>
      </div>
      <div className="bg-black-font mb-24 opacity-80">
        <div className="flex flex-row justify-center items-center px-4 img-animations">
          {imageCard.map((img) => {
            const {title, src, link} = img;
            return (
              <div key={title}>
                <a href={link} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={title}
                    className="opacity-90 hover:opacity-100 duration-200 w-[100%] md:w-[512px]"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mb-12">
        <h2 className="font-main text-4xl dark:text-white-section1 text-black-font text-center">
          <strong>{t("consejo")} </strong>
          <span className="opacity-50">{t("consejo2")}</span>
        </h2>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 justify-evenly items-center mb-12 md:mb-16 md:p-8 px-4">
        <div className="border-2 border-black-font dark:border-black-font rounded-lg p-8">
          <AudioDemo t={t} />
        </div>
        <div className="border-2 border-black-font dark:border-black-font rounded-lg p-8">
          <AudioDemoArrival t={t} />
        </div>
      </div>
      <CreaturesAmbient t={t} />
    </section>
  );
}
