import { BsServer } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { MdSettingsSuggest } from "react-icons/md";


const SkillCard = ({ sets, index }) => {
  const { skillSet, setsName } = sets;
  return (
    <div className="w-full">
      <h2 className="text-2xl font-extrabold mb-10 flex items-center gap-4 text-white tracking-tight border-l-4 border-primary pl-6 py-1">
        <span className="p-3 glass-card rounded-2xl text-primary bg-white/5 border-white/5 shadow-xl">
          {index === 0 && <HiOutlineCode size={24} />}
          {index === 1 && <FaServer size={24} />}
          {index === 2 && <MdSettingsSuggest size={24} />}
          {index === 3 && <BsServer size={24} />}
        </span>
        {setsName}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-2">
        {skillSet?.map(({ icon, name }, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center p-6 glass-card rounded-3xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(3,201,136,0.1)] bg-gradient-to-br from-neutral-900/40 to-transparent border-white/5 shadow-xl"
            data-aos="fade-up"
            data-aos-delay={`${(idx % 6) * 50}`}
          >
            <div className="h-16 w-16 flex items-center justify-center rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-110">
              <img src={icon} alt={name} className="h-10 w-10 object-contain transition-all duration-500" />
            </div>
            <h1 className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-primary transition-colors duration-300 text-center">{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;