export default function Navbar() {
  return (
    <nav className="wrapper h-20 flex items-center justify-between">
      <a href="./" className="w-1/3 max-w-[192px]">
        <img src="./src/assets/logo.png" alt="" className="w-64" />
      </a>
      <input type="checkbox" id="navbar" className="peer hidden" />
      <label
        htmlFor="navbar"
        className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"
      ></label>
      <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
        <ul className="absolute inset-x-0 top-24 p-12 bg-white w-[90%] m-auto rounded-md h-max text-center grid gap-6 font-bold shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
        </ul>
      </div>
      <a
        href="#"
        className="button shadow-sm shadow-blue-300/70 hidden lg:block"
      >
        Get Started
      </a>
    </nav>
  );
}
