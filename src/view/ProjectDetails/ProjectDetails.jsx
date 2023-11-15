import ProjectDetailsView from "./ProjectDetailsView";
import {projects} from "../../constants";
import {useParams} from "react-router-dom";

export default function ProjectDetails() {
  const {id} = useParams();
  const project = projects.find((item) => item.id === id);

  return (
    <>
      <ProjectDetailsView project={project} />
    </>
  );
}
