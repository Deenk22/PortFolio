import {motion} from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="wrapper bg-white-section1 flex flex-col justify-evenly items-center xl:grid xl:grid-cols-2 xl:items-center"
    >
      <motion.div
        initial={{opacity: 0, x: 32}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="flex flex-col m-auto text-center xl:text-left my-8 xl:ml-8"
      >
        <div className="mt-6 xl:mt-4 flex flex-col">
          <p className="text-lg text-black-font font-main mt-8 xl:mt-0 ml-1">
            Hello! I´m
          </p>
          <h2 className="text-7xl text-black-font font-main -ml-1">
            Santi Muñoz
          </h2>
          <h2 className="text-2xl mt-2 font-main">
            Full Stack Developer /{" "}
            <span className="text-hover-font">Designer</span>
          </h2>
          <p className="text-base xl:max-w-[90%] mt-4 xl:mt-2 px-12 xl:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repudiandae accusantium sit reprehenderit neque impedit beatae
            delectus illum pariatur porro? Possimus.
          </p>
        </div>
        <div className="mt-6 mb-8 xl:mb-0 flex justify-center xl:justify-start gap-4">
          <button type="button" className="button-hover">
            Contact
          </button>
          <button type="button" className="button-hover">
            CV
          </button>
        </div>
      </motion.div>
      <div className="flex justify-end">
        <motion.img
          initial={{opacity: 0, y: 64}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="h-[60vh] xl:h-[100vh] mb-16 xl:mb-0"
          src="./src/assets/deenk.jpg"
          alt="Deenk"
        />
      </div>
    </section>
  );
}
