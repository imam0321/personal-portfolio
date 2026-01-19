import { Link } from "react-router-dom";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";
import ProjectModal from "../../../components/Modals/ProjectModal";
import { useState } from "react";
import ProjectCard from "../../../components/Cards/ProjectCard";

import { projects } from "../../../data/projects";
const Projects = () => {
  const [modal, setModal] = useState([]);

  const props = {
    img: 'https://cdn.lordicon.com/fpmskzsv.json',
    text: 'My Projects',
  };
  return (
    <section id="projects" className="mb-20">
      <SectionTitle props={props} />
      <SectionHead>
        Featured <span className="text-primary">Projects</span>
      </SectionHead>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8">
        {projects?.slice(0, 4).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            setModal={setModal}
          />
        ))}
      </div>
      <div className="mt-16 flex justify-end">
        <Link
          to="/projects"
          className="text-xl flex items-center gap-2 icon hover:text-primary transition duration-300"
        >
          All Projects
          <lord-icon
            target="a"
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            class="current-color"
            style={{ width: '25px', height: '25px', margintTop: '4px' }}
          ></lord-icon>
        </Link>
      </div>
      <ProjectModal data={modal} setModal={setModal} />
    </section>
  )
};

export default Projects;
