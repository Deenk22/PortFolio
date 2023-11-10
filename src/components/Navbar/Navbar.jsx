import {navLinks} from "../../constants";

export default function Navbar() {
  return (
    <nav className="wrapper h-32 flex items-center justify-between sticky top-0 z-20">
      {/* <a href="./" className="w-1/3 max-w-[192px]">
        <img src="./src/assets/logo.png" alt="" className="w-64" />
      </a> */}
      <input type="checkbox" id="navbar" className="peer hidden" />
      <label
        htmlFor="navbar"
        className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"
      ></label>
      <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
        <ul className="absolute inset-x-0 top-24 p-12 bg-black-deenk w-[90%] m-auto rounded-md h-max text-center grid gap-6 shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className="text-white-section1 font-main" href={`#${link.id}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <a
        href="#"
        className="button shadow-md shadow-blue-300/70 hidden lg:block"
      >
        Get Started
      </a> */}
    </nav>
  );
}
