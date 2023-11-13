export default function AboutMe() {
  return (
    <section
      id="about"
      className="wrapper bg-white-section1 flex flex-col justify-evenly items-center xl:grid xl:grid-cols-2 xl:items-center rounded-bl-3xl"
    >
      <div className="flex flex-col m-auto text-center xl:text-left my-8 xl:ml-8">
        <div className="mt-6 xl:mt-4 flex flex-col">
          <p className="text-base text-black-font font-main mt-8 xl:mt-0 mb-1">
            Hello! I´m
          </p>
          <h2 className="text-5xl text-black-font font-main -ml-1">
            Deenk Muñoz
          </h2>
          <h2 className="text-lg mt-2">
            Full Stack Developer /{" "}
            <span className="text-hover-font">Designer</span>
          </h2>
          <p className="text-base xl:max-w-[80%] mt-4 xl:mt-2 px-12 xl:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repudiandae accusantium sit reprehenderit neque impedit beatae
            delectus illum pariatur porro? Possimus.
          </p>
        </div>
        <div className="mt-6 mb-8 xl:mb-0 flex justify-center xl:justify-start gap-4">
          <button className="bg-black-font hover:bg-hover-font p-2 rounded-md w-28 text-white-section1">
            Contact
          </button>
          <button className="bg-black-font hover:bg-hover-font  p-2 rounded-md w-28 text-white-section1">
            CV
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          className="transition-all h-[60vh] mb-16 xl:h-[100vh] xl:mb-0"
          src="./src/assets/deenk.jpg"
          alt="Deenk"
        />
      </div>
    </section>
  );
}
