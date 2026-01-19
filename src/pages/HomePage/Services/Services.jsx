import { HiOutlineCode } from "react-icons/hi";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";
import { SiNextdotjs, SiReact } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";


const Services = () => {
  const services = [
    {
      "id": 1,
      "service": "Frontend Web Development",
      "details": "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code."
    },
    {
      "id": 2,
      "service": "React & Next JS Development",
      "details": "I have worked on 6 different React JS projects, and have hands-on experience with 4 projects using Next JS."
    },
    {
      "id": 3,
      "service": "Full Stack Development",
      "details": "With the Frontend I am skilled in Node JS, Express, JWT and Firebase. Proficient in implementing Mongo DB."
    },
  ]
  const props = { img: "https://cdn.lordicon.com/ofwpzftr.json", text: "Services" }
  return (
    <section id="services" className='mb-32'>
      <SectionTitle props={props} />
      <SectionHead>
        My <span className='text-primary font-extrabold tracking-tight'>Specializations</span>
      </SectionHead>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        {
          services.map(({ service, details }, index) => <div key={index}
            className='group glass-card p-4 rounded-3xl transition-all duration-500 hover:border-primary/50 bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-900/70 border-white/5 shadow-2xl hover:shadow-[0_0_40px_rgba(3,201,136,0.1)]'
            data-aos="fade-up"
            data-aos-delay={`${((index) % 6) * 100}`}
          >
            <div className="mb-10 text-primary group-hover:scale-110 transition-transform duration-500 flex justify-center">
              <div className="p-4 glass-card rounded-2xl bg-white/5 border-white/5">
                {index === 0 && <HiOutlineCode size={40} />}
                {index === 1 && <div className="flex gap-4"><SiReact size={40} /> <SiNextdotjs size={40} /></div>}
                {index === 2 && <FiCodesandbox size={40} />}
              </div>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/40">
              <h2 className='text-xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300'>{service}</h2>
              <p className='text-accent text-sm leading-relaxed font-medium opacity-80'>{details}</p>
            </div>
          </div>
          )
        }
      </div>
    </section>
  )
};

export default Services;