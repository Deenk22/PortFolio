import CV from "../assets/SantiagoMuñozCV.pdf";
import deenkImage from "../assets/deenk.jpg";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import {
  RxImage,
  RxEnvelopeOpen,
  RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import {ImYoutube} from "react-icons/im";
import {motion} from "framer-motion";
import {useTranslation, Trans} from "react-i18next";

const socialMedia = [
  {
    title: "linkedIn",
    href: "https://www.linkedin.com/in/santiagomu%C3%B1oz/",
    icon: (
      <RxLinkedinLogo
        size={"2rem"}
        className="text-black-font dark:text-white-section1 hover:text-linkedIn-blue hover-icon-about"
      />
    ),
  },
  {
    title: "github",
    href: "https://github.com/Deenk22",
    icon: (
      <RxGithubLogo
        size={"2rem"}
        className="text-black-font dark:text-white-section1 hover:text-github-color hover-icon-about"
      />
    ),
  },
  {
    title: "youtube",
    href: "https://www.youtube.com/@aftertheearth_/videos",
    icon: (
      <ImYoutube
        size={"2.2rem"}
        className="text-black-font dark:text-white-section1 hover:text-youtube-color hover-icon-about"
      />
    ),
  },
];

export default function AboutMe() {
  const {t, i18n} = useTranslation(["sectionAbout"]);

  const handleChangeLanguage = () => {
    i18n.language === "es"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es");
  };

  return (
    <section
      id="about"
      className="wrapper bg-light-mode dark:bg-dark-mode flex flex-col justify-evenly items-center xl:grid xl:grid-cols-2 xl:items-center dark:rounded-tl-3xl"
    >
      <motion.div
        initial={{opacity: 0, x: 32}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="flex flex-col m-auto text-center xl:text-left my-8 xl:ml-8"
      >
        <Trans>
          <div className="flex flex-col mt-6 xl:mt-4 ">
            <p className="text-lg text-black-font dark:text-white-section1 font-main mt-8 xl:mt-0 ml-1">
              {t("saludo")}
            </p>
            <h5 className="text-7xl text-black-font dark:text-white-section1 font-main -ml-1">
              Santi Muñoz
            </h5>
            <h2 className="text-2xl mt-2 font-main text-black-font dark:text-white-section1">
              {t("profesión")} /{" "}
              <span className="text-hover-font">{t("afición")}</span>
            </h2>
            <p className="text-black-font dark:text-white-section1 mt-4 xl:max-w-[90%] xl:mt-2 px-12 xl:px-0">
              {t("presentación")}
            </p>
          </div>
          <div className="mt-6 xl:mb-0 flex justify-center xl:justify-start gap-4">
            <a href="mailto: deenk.design.dev@gmail.com">
              <button
                type="button"
                className="button-hover dark:bg-hover-font dark:hover:bg-black-font dark:hover:text-white-section1"
              >
                <RxEnvelopeOpen />
                {t("contacto")}
              </button>
            </a>
            <a href={CV} download="CV-SantiagoMJ">
              <button
                type="button"
                className="button-hover dark:bg-hover-font dark:hover:bg-black-font dark:hover:text-white-section1"
              >
                <RxImage />
                CV
              </button>
            </a>
          </div>
        </Trans>
        <div className="flex flex-row justify-center xl:justify-start items-center gap-3 mt-6">
          {socialMedia.map((sm) => {
            const {title, href, icon} = sm;
            return (
              <SocialMedia key={title} href={href} icon={icon} title={title} />
            );
          })}
        </div>
      </motion.div>

      <div className="flex justify-end">
        <img
          className="h-[60vh] w-[auto] xl:h-[100vh] mb-16 xl:mb-0 rounded-xl shadow-xl xl:rounded-none xl:shadow-none"
          src={deenkImage}
          alt="Deenk Photo"
        />
      </div>
      <button type="button" onClick={handleChangeLanguage}>
        DALE
      </button>
    </section>
  );
}
