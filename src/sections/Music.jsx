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
          <h1 className="text-6xl font-main items-left">Arrival</h1>
        </div>
        <div className="bg-menu-ui bg-cover bg-bottom row-span-3 rounded-tr-3xl">
          <h1 className="text-8xl hidden">Demo02</h1>
        </div>
        <div className="bg-yellow-bee col-span-3 p-4">
          <h1 className="text-6xl font-main">Puzzle Game</h1>
        </div>
        <div className="col-span-3 bg-hover-font p-4">
          <h1 className="text-6xl font-main">Sci-Fi Robot</h1>
        </div>
        <div className="bg-white-section1 col-span-4 rounded-bl-3xl rounded-br-3xl p-4 h-[16vh]">
          <h1 className="text-6xl font-main">Menu UI Cartoon</h1>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        {/* <img
          src="./src/assets/logo/ATE-logo.png"
          width={256}
          alt="Logo After the Earth"
        /> */}
      </div>
    </section>
  );
}
