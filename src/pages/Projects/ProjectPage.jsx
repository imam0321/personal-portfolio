import { useState } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import ProjectModal from "../../components/Modals/ProjectModal";
import SectionHead from "../../components/Typography/SectionHead";
import SectionTitle from "../../components/Typography/SectionTitle";
import useTitle from "../../hooks/useTitle";

const projects = [
  {
    _id: "unique-id-123456",
    name: "Special Surprise - Gift Store",
    description:
      "A sleek and responsive e-commerce application for buying and gifting surprise items. Features user-friendly navigation, product filtering, and a smooth checkout experience.",
    images: [
      "https://i.ibb.co/TxDZxfvy/sp-cover-img-1.jpg",
      "https://i.ibb.co/Vcpz2R3Z/sp-cover-img-2.jpg"
    ],
    features: [
      "Browse and purchase surprise gift items with ease.",
      "Product filtering, search, and category browsing.",
      "Add to cart and checkout functionality with validation.",
      "User authentication with email and Google login.",
      "Order history and confirmation system.",
      "Responsive design for mobile and desktop devices.",
      "Built with modern frontend stack and dynamic routing."
    ],
    duration: "06 May, 2025 – Development Running",
    technologies: [
      "Next JS",
      "Tailwind CSS",
      "shadcn ui",
    ],
    client: "https://github.com/imam0321/special-surprise",
    server: "",
    liveLink: "https://special-surprise-eight.vercel.app/",
    img: "https://i.ibb.co/vxwyXJ7r/sp-cover-img.jpg"
  },
  {
    _id: "6431e0df5a895e0e9b327c22",
    name: "Attendance & Clock Time Management System",
    description:
      "A responsive web app for managing employee attendance with real-time clock in/out tracking. Integrates Google Maps-based location control and secure authentication.",
    images: [
      "https://i.ibb.co/RpRPCNwF/RL.jpg",
    ],
    features: [
      "Real-time clock in/out with work hour tracking.",
      "Location-based clock-in using Google Maps API.",
      "Email/Google-based secure login system.",
      "Admin dashboard for location setup and reports.",
      "User attendance history with daily/week view.",
      "Selfie capture during clock-in for verification.",
      "Responsive UI with Tailwind CSS & Ant Design.",
      "Data stored securely via REST API and MongoDB."
    ],
    duration: "06 October, 24 - 29 November, 22",
    technologies: [
      "HTML",
      "CSS",
      "TAilwind CSS",
      "Ant Design",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express",
      "Mongo DB",
      "Google Maps API",
    ],
    // client: 'https://github.com/shahtaz-tqldd/fashionista-client',
    client: "",
    // server: 'https://github.com/shahtaz-tqldd/fashionista-server',
    server: "",
    liveLink: "https://roliclient.vercel.app/",
    img: "https://i.ibb.co/RpRPCNwF/RL.jpg",
  },
];

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

      <div className="projects">
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