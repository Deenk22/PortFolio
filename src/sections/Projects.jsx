export default function Project() {
  return (
    <section id="projects" className="wrapper bg-black-deenk h-screen">
      <h1 className="text-center text-6xl font-main mt-8">Projects</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-32">
        <div className="flex flex-col items-center">
          <h1>Project1</h1>
          <img src="./src/assets/probando/01.png" width={502} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <h1>Project1</h1>
          <img src="./src/assets/probando/01.png" width={502} alt="" />
        </div>
      </div>
    </section>
  );
}
