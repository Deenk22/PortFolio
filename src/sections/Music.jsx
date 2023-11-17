export default function Music() {
  return (
    <section id="music" className="wrapper bg-black-deenk h-screen">
      <div className="mt-44 flex flex-col items-left">
        <p className="text-base text-white-section1 w-[80%] xl:w-[40%]">
          Sound design is the art and practice of creating soundtracks for a
          variety of needs. It involves specifying, acquiring or creating
          auditory elements using audio production techniques and tools.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-8">
        <div className="bg-white-section1 col-span-3 p-4 rounded-tl-3xl">
          <h1 className="text-6xl font-main items-left h-[8vh]"></h1>
        </div>
        <div className="bg-cover bg-bottom row-span-3 rounded-tr-3xl">
          <video
            className="h-full w-full object-cover rounded-2xl"
            autoPlay
            loop
            src="./src/assets/video/AftertheEarth.mp4"
          />
        </div>
        <div className="bg-yellow-bee col-span-3 p-4">
          <h1 className="text-6xl font-main h-[8vh]"></h1>
        </div>
        <div className="col-span-3 bg-hover-font p-4">
          <h1 className="text-6xl font-main h-[8vh]"></h1>
        </div>
        <div className="bg-white-section1 col-span-4 rounded-bl-3xl rounded-br-3xl p-4 h-[16vh]">
          <h1 className="text-6xl font-main h-[12vh]"></h1>
        </div>
      </div>
      <div className="mt-16 flex justify-center"></div>
    </section>
  );
}
