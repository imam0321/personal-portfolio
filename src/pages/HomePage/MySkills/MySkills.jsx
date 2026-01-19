import SkillCard from "../../../components/Cards/SkillCard";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";

const skills = [
  {
    _id: 'skills-1',
    setsName: 'Languages & Tools',
    skillSet: [
      { id: 1, name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { id: 2, name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png' },
      { id: 3, name: 'Python', icon: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
      { id: 4, name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
      { id: 5, name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' },
      { id: 6, name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
    ]
  },
  {
    _id: 'skills-2',
    setsName: 'Frontend Development',
    skillSet: [
      { id: 1, name: 'Next.js', icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
      { id: 2, name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
      { id: 3, name: 'Redux', icon: 'https://cdn.worldvectorlogo.com/logos/redux.svg' },
      { id: 4, name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
      { id: 5, name: 'Shadcn UI', icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
      { id: 6, name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
      { id: 7, name: 'CSS3', icon: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png' },
    ]
  },
  {
    _id: 'skills-3',
    setsName: 'Backend & Database',
    skillSet: [
      { id: 1, name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
      { id: 2, name: 'Express.js', icon: 'https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png' },
      { id: 3, name: 'Passport.js', icon: 'https://cdn.worldvectorlogo.com/logos/passport.svg' },
      { id: 4, name: 'MongoDB', icon: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png' },
      { id: 5, name: 'PostgreSQL', icon: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
      { id: 6, name: 'Prisma', icon: 'https://cdn.worldvectorlogo.com/logos/prisma-2.svg' },
    ]
  }
];

const MySkills = () => {
  const props = {
    img: 'https://cdn.lordicon.com/svbmmyue.json',
    text: 'Proficiency',
  };

  return (
    <section id="skills" className="mb-32">
      <SectionTitle props={props} />
      <SectionHead>
        My <span className="text-primary">Advantages</span>
      </SectionHead>
      <div className="grid grid-cols-1 gap-20">
        {skills.map((sets, index) => (
          <SkillCard key={index} index={index} sets={sets} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;