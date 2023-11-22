import {motion} from "framer-motion";

export default function ColoursCards({color, index}) {
  return (
    <motion.div
      initial={{opacity: 0, x: -100}}
      animate={{opacity: 1, x: 0}}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
      className={`w-24 h-24 rounded-full hover:scale-110 ${color}`}
    ></motion.div>
  );
}
