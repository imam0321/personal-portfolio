import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";

const experiences = [
    {
        company: "APCORN Innovation",
        role: "Software Engineer (Frontend)",
        duration: "01 Jan 2025 - 31 Jul 2025",
        points: [
            "Developed and maintained the Ababil Hajj Group website, facilitating Hajj and Umrah packages, visa processing, and flight arrangements.",
            "Built Inventory Management and Employee Management dashboards, improving operational efficiency and internal workflows.",
            "Contributed to both backend and frontend development and led UI/UX improvements to enhance the overall user experience."
        ]
    },
    {
        company: "Velocita Infosys Ltd.",
        role: "Frontend Developer (Intern)",
        duration: "01 Sep 2024 - 31 Dec 2024",
        points: [
            "Developed an article-based web application with dynamic content and interactive user features using React, HTML, and Tailwind CSS.",
            "Translated Figma designs into fully responsive web pages, ensuring seamless cross-device compatibility.",
            "Improved accessibility and usability by implementing mobile-first and responsive design best practices."
        ]
    }
];

const Experience = () => {
    const props = {
        img: 'https://cdn.lordicon.com/nocovwne.json', // Thinking/Work icon
        text: 'Career Path',
    };

    return (
        <section id="experience" className="mb-32">
            <SectionTitle props={props} />
            <SectionHead>
                Work <span className="text-primary">Experience</span>
            </SectionHead>

            <div className="mt-16 space-y-12">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="group relative glass-card p-10 rounded-3xl border-white/5 bg-gradient-to-br from-neutral-900/95 via-neutral-900/85 to-neutral-900/75 shadow-2xl transition-all duration-500 hover:border-primary/30"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div className="relative pl-6 border-l-2 border-primary">
                                <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {exp.company}
                                </h3>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">
                                    {exp.role}
                                </p>
                            </div>
                            <span className="px-6 py-2 rounded-full glass-card border-white/5 text-[10px] font-bold uppercase tracking-widest text-accent bg-white/5">
                                {exp.duration}
                            </span>
                        </div>

                        <ul className="space-y-4">
                            {exp.points.map((point, idx) => (
                                <li key={idx} className="flex gap-4 text-accent text-sm leading-relaxed font-medium opacity-80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
