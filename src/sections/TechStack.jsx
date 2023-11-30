import IconCard from "../components/IconCard/IconCard";
import {technologies} from "../constants/technologies";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="wrapper shadow-xl bg-section-stack bg-cover bg-center h-screen"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-32">
          <h1 className="text-white-section1 text-5xl font-main">Tech Stack</h1>
          <p className="text-white-section1 text-lg font-main">
            Find Your{" "}
            <span className="text-hover-font text-xl">Favorite Stack</span>
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-4 md:gap-12 justify-center items-center mt-4 md:mt-16">
          {technologies.map((stack) => {
            const {title, src, width} = stack;
            return (
              <div
                key={title}
                className="hover:rotate-12 hover:scale-105 transition-all flex justify-center items-center"
              >
                <IconCard src={src} width={width} title={title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
