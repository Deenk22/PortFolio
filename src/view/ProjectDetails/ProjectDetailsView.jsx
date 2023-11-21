import {motion} from "framer-motion";
import {useParams} from "react-router-dom";
import {idColor} from "../../constants/colours";

export default function ProjectDetailsView({project, goBack}) {
  const {id} = useParams();
  const {title, contentXl, img} = project;
  const textColorClass = idColor[id] || "";

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, ease: "easeInOut"}}
      className="wrapper bg-black-deenk h-screen"
    >
      <div className="flex flex-col justify-left gap-8 mt-16 lg:flex-row lg:justify-evenly lg:gap-16 lg:mt-48 items-center px-4">
        <div className="w-[100%] lg:w-[80%]">
          <h1
            className={`font-main text-6xl sm:text-7xl font-semibold mr-4 ${textColorClass}`}
          >
            {title}
          </h1>
          <p className="font-main text-base text-white-section1 mt-3">
            {contentXl}
          </p>
          <button className="button mt-4" onClick={goBack} type="button">
            Back
          </button>
        </div>
        <motion.div
          initial={{x: 128}}
          animate={{x: 0}}
          transition={{duration: 0.4, ease: "easeInOut"}}
          className="flex flex-row justify-end"
        >
          <img
            width={"100%"}
            src={img}
            alt={title}
            className="rounded-xl transition duration-200"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
