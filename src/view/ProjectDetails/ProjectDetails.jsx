import ProjectDetailsView from "./ProjectDetailsView";
import {projects} from "../../constants";
import {useNavigate, useParams} from "react-router-dom";

export default function ProjectDetails() {
  const {id} = useParams();
  const project = projects.find((item) => item.id === id);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ProjectDetailsView project={project} goBack={goBack} />
    </>
  );
}
