import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

export default function ProjectDetailsView({project}) {
  const {title, content, img} = project;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8, ease: "easeInOut"}}
      className="wrapper bg-black-deenk h-screen"
    >
      <div className="flex flex-col justify-center gap-16 mt-32 lg:flex-row lg:justify-evenly lg:gap-8 lg:min-h-[100vh] lg:mt-0 items-center px-32">
        <div className="">
          <h1 className="font-main text-7xl text-black-font">{title}</h1>
          <p className="font-main text-base text-black-font mt-4">{content}</p>
        </div>
        <div className="flex flex-row justify-end">
          <picture>
            {/* <source srcSet={img} /> */}
            <img
              src={img}
              alt={title}
              className="min-w-[352px] max-w-[912px] rounded-xl shadow-xl hover:shadow-black-deenk transition duration-200"
            />
          </picture>
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="button" onClick={goBack} type="button">
          Go Back
        </button>
      </div>
    </motion.section>
  );
}
