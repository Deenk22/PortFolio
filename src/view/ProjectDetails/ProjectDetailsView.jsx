import ProjectsCarrousel from "../../components/ProjectsCarrousel/ProjectsCarrouse";
import ColoursCards from "../../components/ColoursCards/ColoursCards";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {idColor} from "../../constants/colours";
import {RxGithubLogo} from "react-icons/rx";
import {RiChatSmile3Fill} from "react-icons/ri";
import {useTranslation} from "react-i18next";

export default function ProjectDetailsView({project, goBack}) {
  const {t} = useTranslation(["projectDetails"]);
  const {t: translation} = useTranslation(["projects"]);
  const {id} = useParams();
  const {title, translate, img, colours, githubLink} = project;
  const textColorClass = idColor[id] || "";

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8, ease: "easeInOut"}}
      className="wrapper"
    >
      <div className="flex flex-col xl:flex-row justify-evenly items-center gap-8 mt-32 xl:mt-48">
        <div className=" flex flex-col item-start">
          <div>
            <h1
              className={`font-main text-6xl sm:text-7xl font-semibold ${textColorClass}`}
            >
              {title}
            </h1>
            <p className="font-main text-base text-white-section1 w-[70%] mt-2">
              {translation(translate)}
            </p>
            <button className="button mt-6 w-32" onClick={goBack} type="button">
              {t("botón")}
            </button>
            <div className="flex flex-row items-center gap-2 mt-6">
              <img
                src="../src/assets/svg/PowerToys.svg"
                width={24}
                alt="Power Toys Icon"
              />
              <p className="font-main text-base text-white-section1">
                {t("usar")}{" "}
                <strong className="bg-gradient-to-r from-blue-powert to-green-powert text-transparent bg-clip-text">
                  {t("powerToys")}
                </strong>{" "}
                {t("conseguirColor")}
              </p>
              <RiChatSmile3Fill className="text-xl text-white-section1" />
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-6">
            {colours.map((color, index) => {
              return (
                <div key={index}>
                  <ColoursCards color={color} index={index} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-start items-center gap-2 mt-6">
            <p className="font-main text-white-section1 text-sm">
              {t("repositorio")}
            </p>
            <a href={githubLink} target="_blank" rel="noreferrer">
              <RxGithubLogo
                size={"2rem"}
                className="text-black-font hover:text-github-color hover-icon-about"
              />
            </a>
          </div>
        </div>
        <div className="w-[100%] md:w-[72%] mb-8 xl:mb-0 xl:w-[64%]">
          <ProjectsCarrousel img={img} title={title} />
        </div>
      </div>
    </motion.section>
  );
}
