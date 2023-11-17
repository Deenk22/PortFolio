import IconCard from "../components/IconCard/IconCard";
import {technologies} from "../constants/technologies";
import {motion} from "framer-motion";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="wrapper shadow-xl bg-section-stack bg-cover bg-center h-screen"
    >
      <div>
        <div className="flex flex-col justify-center items-center mt-32">
          <h1 className="text-white-section1 text-5xl font-main">Tech Stack</h1>
          <p className="text-white-section1 text-lg font-main">
            Find Your{" "}
            <span className="text-hover-font text-xl">Favorite Stack</span>
          </p>
        </div>
        <motion.div
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.2, ease: "easeInOut"}}
          className="flex flex-row justify-center items-center mt-16 gap-16"
        >
          {technologies.map((stack) => {
            const {title, src, width} = stack;
            return (
              <div
                key={title}
                className="hover:rotate-12 hover:scale-105 transition-all"
              >
                <IconCard src={src} width={width} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
