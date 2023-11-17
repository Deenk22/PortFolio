export default function ProjectDetailsView({project}) {
  const {title, content} = project;
  return (
    <section className="wrapper bg-black-font h-screen">
      <div className="mt-16 flex flex-col justify-center items-center">
        <h1 className="font-main text-8xl text-white-section1">{title}</h1>
        <p className="text-xl text-white-section1 mt-2">{content}</p>
      </div>
    </section>
  );
}
