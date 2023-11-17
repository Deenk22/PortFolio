import {navLinks} from "../../constants";

export default function Navbar() {
  console.log(navLinks);
  return (
    <nav className="wrapper h-32 flex items-center sticky top-0 z-20">
      <input type="checkbox" id="navbar" className="peer hidden" />
      <label
        htmlFor="navbar"
        className="bg-open-menu rounded-xl w-6 h-6 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden bg-white-section1"
      ></label>
      <div className="fixed flex justify-center inset-0 bg-black-deenk/70 md:bg-transparent translate-y-full peer-checked:translate-y-0 transition-transform duration-500 md:static md:translate-y-0 md:bg-none">
        <ul className="absolute inset-y-0 p-8 bg-black-deenk w-[80%] m-auto rounded-2xl h-max text-center grid gap-4 md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className="text-white-section1 font-main" href={`#${link.id}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
