import { Link } from "react-router-dom";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";
import ProjectModal from "../../../components/Modals/ProjectModal";
import { useState } from "react";
import ProjectCard from "../../../components/Cards/ProjectCard";

const projects = [
  {
  "_id": "1",
  "name": "Special Surprise – Full-Stack Gift Marketplace Platform",
  "description": "Special Surprise is a full-stack gift marketplace platform designed to make buying and delivering gifts simple, smooth, and reliable. Users can explore gift categories, schedule delivery, place orders, and make secure online payments, while Admins and Moderators manage products, users, and delivery workflows through dedicated dashboards.",
  "images": [
    "https://i.ibb.co.com/BVKpYLKG/download.png",
    "https://i.ibb.co.com/Pz96rGqt/3.png",
  ],
  "features": [
    "Role-based dashboards for Customer, Moderator, and Admin",
    "Gift categories including Birthday, Anniversary, Valentine’s Day, Mother’s Day & more",
    "Delivery scheduling & order tracking flow",
    "Secure authentication & authorization using JWT",
    "Online payment integration with SSLCommerz",
    "Responsive and clean UI for users and admin panels"
  ],
  "duration": "Nov 2025 – Jan 2026",
  "technologies": [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "JWT Authentication",
    "Zod Validation",
    "Cloudinary",
    "Nodemailer"
  ],
  "client": "https://github.com/imam0321/special-surprise-client",
  "server": "https://github.com/imam0321/special-surprise-server",
  "liveLink": "https://special-surprise-client.vercel.app",
  "img": "https://i.ibb.co.com/BVKpYLKG/download.png"
},
  {
    "_id": "2",
    "name": "Tour Matrix",
    "description": "A full-stack travel and tour booking platform built with TypeScript. Provides secure, role-based dashboards for Users, Guides, Admins, and Super Admins, allowing seamless tour browsing, bookings, and payments.",
    "images": [
      "https://i.ibb.co.com/XxvhWvF3/3.png",
      "https://i.ibb.co.com/BVPcnHkc/4.png",
      "https://i.ibb.co.com/Wv1HpG8M/5.png"
    ],
    "features": [
      "Secure role-based authentication for Users, Guides, Admins, and Super Admins.",
      "Browse, search, and book tours with detailed information.",
      "Admin dashboard to manage users, guides, bookings, and payments.",
      "OTP verification, Forget Password, social login support.",
      "Responsive design for mobile and desktop devices.",
      "Seamless integration with backend APIs and payment gateway (SSLCommerz)."
    ],
    "duration": "8 Jul, 2025 – Development Completed",
    "technologies": [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Shadcn UI",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Passport.js",
      "Cloudinary",
      "nodemailer",
      "Redis",
      "SSLCommerz"
    ],
    "client": "https://github.com/imam0321/tour-matrix-client",
    "server": "https://github.com/imam0321/tour-matrix-server",
    "liveLink": "https://tour-matrix.vercel.app/",
    "img": "https://i.ibb.co.com/ZRNTS91W/2.png"
  },
  {
    "_id": "3",
    "name": "PaySphere",
    "description": "A full-stack digital wallet application implemented in TypeScript with secure, role-based access for Users, Agents, and Admins. Simulates real-world wallet operations similar to bKash or Nagad.",
    "images": [
      "https://i.ibb.co.com/2YWgjvLt/9.png",
      "https://i.ibb.co.com/ZRCqvxq5/10.png"
    ],
    "features": [
      "Secure role-based authentication for Users, Agents, and Admins.",
      "Deposit, withdraw, send, and receive money functionality.",
      "Transaction history management with real-time updates.",
      "Responsive design for mobile and desktop devices.",
      "Scalable backend APIs for financial operations."
    ],
    "duration": "29 Jul, 2025 – Development Completed",
    "technologies": [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Shadcn UI",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    "client": "https://github.com/imam0321/paysphere-client",
    "server": "https://github.com/imam0321/PaySphere-server",
    "liveLink": "https://paysphere-client.vercel.app/",
    "img": "https://i.ibb.co.com/SDHwNpfB/8.png"
  },
  {
    _id: "4",
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
      <div className="projects">
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
