import {Link} from "react-router-dom";

export default function ProjectDetailsView({project}) {
  const {title, content} = project;
  return (
    <section className="">
      <div className="mt-32 flex flex-col justify-center items-center">
        <h1 className="font-rm text-8xl text-center text-white-section1">
          {title}
        </h1>
        <p className="text-xl text-center text-white-section1 mt-4">
          {content}
        </p>
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="button" type="button">
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
}
