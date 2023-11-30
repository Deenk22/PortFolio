import {useTranslation} from "react-i18next";
import Carrousel from "../components/Carrousel/Carrousel";

export default function Project() {
  const {t} = useTranslation(["sectionProjects"]);
  const {t: translation} = useTranslation(["projects"]);
  return (
    <section
      id="projects"
      className="wrapper shadow-xl bg-section-bg bg-cover bg-center min-h-[88vh] md:h-screen"
    >
      <Carrousel t={t} translation={translation} />
    </section>
  );
}
