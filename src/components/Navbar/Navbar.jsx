import {navLinks} from "../../constants";
import {motion} from "framer-motion";

export default function Navbar() {
  return (
    <nav className="wrapper h-32 flex items-center sticky top-0 z-20">
      <input type="checkbox" id="navbar" className="peer hidden" />
      <label
        htmlFor="navbar"
        className="bg-open-menu rounded-xl w-6 h-6 bg-cover bg-center peer-checked:bg-close-menu transition-all z-10 md:hidden"
      ></label>
      <div className="fixed flex justify-center inset-0 bg-black-deenk/70 md:bg-transparent translate-x-full peer-checked:translate-x-0 transition-transform duration-500 md:static md:translate-x-0 md:bg-none">
        <motion.ul
          initial={{opacity: 0, x: 32}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5, ease: "easeInOut"}}
          className="absolute inset-y-0 p-8 bg-black-deenk w-[80%] m-auto rounded-2xl md:rounded-none md:rounded-tr-lg h-max text-center grid gap-4 md:w-max md:bg-black-deenk/20 md:p-4 md:grid-flow-col md:static backdrop-blur-lg backdrop-opacity-100 shadow-lg"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className="text-white-section1 text-base font-main"
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
