import {imageCard} from "../constants/imageCards";

export default function Music() {
  return (
    <section id="music" className="wrapper bg-white-section1 dark:bg-dark-mode">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 p-8 mt-24 md:mt-32 md:mb-16">
        <h1 className="font-main text-7xl text-black-font dark:text-white-section1 md:w-[38%] text-center">
          After The Earth
        </h1>

        <h5 className="font-main text-black-font dark:text-white-section1 md:w-[38%]">
          <strong className="text-darkgray-pt dark:text-hover-font text-xl">
            Sound design
          </strong>{" "}
          is the art and practice of creating soundtracks for a variety of
          needs. It involves specifying, acquiring or creating auditory elements
          using audio production techniques and tools.
        </h5>
      </div>

      <div className="flex flex-col justify-evenly items-center gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 px-8 gap-4">
          {imageCard.map((item) => {
            const {title, description, src, link} = item;
            return (
              <div key={title}>
                <a
                  href={link}
                  target="_black"
                  rel="noreferrer"
                  className="mt-0 cursor-cell"
                >
                  <img src={src} alt={title} className="rounded-xl" />
                </a>
                <div className="flex flex-row justify-start items-center gap-2 mt-4">
                  <item.icon className="text-black-font dark:text-white-section1 text-4xl md:text-5xl hover:text-hover-font dark:hover:text-hover-font transition duration-200 border-2 border-black-font dark:border-white-section1 p-2 rounded-lg" />
                  <p className="font-main text-base text-black-font dark:text-white-section1 my-4 text-left">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-start rounded-xl">
          <video
            autoPlay
            loop
            src="./src/assets/video/video.mp4"
            alt="video"
            className="p-8 w-[100%]"
          />
        </div>
      </div>
    </section>
  );
}
