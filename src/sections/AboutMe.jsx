export default function AboutMe() {
  return (
    <section
      id="about"
      className="wrapper bg-white-section1 min-h-screen flex flex-col justify-evenly items-center  xl:grid xl:grid-cols-2 xl:items-center"
    >
      <div className=" text-black-font m-auto">
        <h4 className="text-base ml-2 -mb-1">Hello! I´m</h4>
        <h1 className="text-8xl font-main">Deenk</h1>
        <p className="text-4xl text-light-font font-main ml-1">Full Stack</p>
        <p className="text-4xl font-main ml-1">Web</p>
        <p className="text-4xl font-main ml-1">Developer</p>
      </div>
      <div className="flex justify-end">
        <img
          className="transition-all h-[60vh] mb-16 xl:h-[100vh] xl:mb-0 z-10"
          src="./src/assets/deenk.jpg"
          alt="Deenk"
        />
      </div>
    </section>
  );
}
