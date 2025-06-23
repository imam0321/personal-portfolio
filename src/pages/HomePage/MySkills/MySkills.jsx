import SkillCard from "../../../components/Cards/SkillCard";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";

const skills = [
  {
    _id: '639e0fba72b5829b8d47eb17',
    setsName: 'Frontend',
    skillSet: [
      {
        id: 1,
        name: 'React',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      },
      {
        id: 2,
        name: 'Next.js',
        icon: 'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
      },
      {
        id: 5,
        name: 'Redux',
        icon: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
      },
      {
        id: 6,
        name: 'shadcn/ui',
        icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
      },
      {
        id: 7,
        name: 'Material UI',
        icon: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
      },
      {
        id: 9,
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      },
      {
        id: 10,
        name: 'Bootstrap',
        icon: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
      },
      {
        id: 11,
        name: 'HTML',
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      },
      {
        id: 12,
        name: 'CSS',
        icon: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
      },
    ]
  },
  {
    _id: '639e0fba72b5829b8d47eb18',
    setsName: 'Backend',
    skillSet: [
      {
        id: 1,
        name: 'Node JS',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png',
      },
      {
        id: 2,
        name: 'Express',
        icon: 'https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png',
      },
      {
        id: 3,
        name: 'Firebase',
        icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
      },
      {
        id: 4,
        name: 'NextAuth.js',
        icon: 'https://next-auth.js.org/img/logo/logo-sm.png',
      },
      {
        id: 5,
        name: 'JWT Auth',
        icon: 'https://media-exp1.licdn.com/dms/image/D4D12AQHW9aRSWIOMxQ/article-cover_image-shrink_600_2000/0/1657421703592?e=2147483647&v=beta&t=nKygyfSDFwgPdEoC-nEkogMS0527SBa8z8D_FqUr-us',
      },
    ],
  },
  {
    _id: '639e0fba72b5829b8d47eb19',
    setsName: 'Tools',
    skillSet: [
      {
        id: 1,
        name: 'GitHub',
        icon: 'https://cdn.simpleicons.org/github/ffffff',
      },
      {
        id: 2,
        name: 'Postman',
        icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      },
      {
        id: 3,
        name: 'Netlify',
        icon: 'https://cdn.worldvectorlogo.com/logos/netlify.svg',
      },
      {
        id: 4,
        name: 'Vercel',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968885.png',
      },
    ]
  },
  {
    _id: '639e0fba72b5829b8d47eb1a',
    setsName: 'Database',
    skillSet: [
      {
        id: 1,
        name: 'PostgreSQL',
        icon: 'https://www.postgresql.org/media/img/about/press/elephant.png',
      },
      {
        id: 2,
        name: 'Mongo DB',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3629020-3030245.png',
      },
    ],
  },
];

const MySkills = () => {
  const props = {
    img: 'https://cdn.lordicon.com/svbmmyue.json',
    text: 'My Skills',
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