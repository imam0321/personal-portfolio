import { useState } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import ProjectModal from "../../components/Modals/ProjectModal";
import SectionHead from "../../components/Typography/SectionHead";
import SectionTitle from "../../components/Typography/SectionTitle";
import useTitle from "../../hooks/useTitle";

import { projects } from "../../data/projects";
const ProjectPage = () => {
  useTitle('Projects');
  const [modal, setModal] = useState([]);
  const props = {
    img: 'https://cdn.lordicon.com/fpmskzsv.json',
    text: 'Projects',
  };
  return (
    <section>
      <SectionTitle props={props} />
      <SectionHead>
        My <span className="text-primary">Projects</span>
      </SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            setModal={setModal}
          />
        ))}
      </div>
      <ProjectModal data={modal} setModal={setModal} />
    </section>
  );
};

export default ProjectPage;
