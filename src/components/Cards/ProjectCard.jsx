import '../../assets/styles/project-card.css'

const ProjectCard = ({ project, setModal, index }) => {
	const { name, img, liveLink, description, technologies } = project;
	return (
		<div
			className="group relative overflow-hidden glass-card rounded-3xl transition-all duration-700 hover:border-primary/40 bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-900/70 border-white/5 shadow-2xl"
			data-aos="fade-up"
			data-aos-delay={`${((index) % 2) * 100}`}
		>
			<div className="aspect-[16/10] overflow-hidden m-4 rounded-2xl shadow-inner">
				<img
					src={img}
					alt={name}
					className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
				/>
			</div>

			<div className="p-8 pt-4">
				<div className="flex flex-wrap gap-2 mb-6">
					{technologies?.slice(0, 3).map((tech, i) => (
						<span key={i} className="text-xs uppercase tracking-wider font-bold py-1.5 px-4 glass-card rounded-lg text-primary/90 border-white/5 bg-primary/5">
							{tech}
						</span>
					))}
				</div>

				<div className="relative pl-6 border-l-2 border-primary/40 mb-6">
					<h1 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
						{name}
					</h1>
				</div>

				<p className="text-accent text-sm line-clamp-2 mb-8 leading-relaxed opacity-80 font-medium">
					{description}
				</p>

				<div className="flex items-center gap-4">
					<a
						href={liveLink}
						target="_blank"
						rel="noreferrer"
						className="btn btn-sm btn-primary rounded-xl px-8 hover:scale-105 transition-all duration-300 border-none text-slate-900 font-bold shadow-lg shadow-primary/20"
					>
						Live Site
					</a>
					<label
						htmlFor="project-modal"
						onClick={() => setModal(project)}
						className="btn btn-sm btn-outline glass-card hover:bg-white/10 rounded-xl px-8 transition-all duration-300 border-white/10 text-white cursor-pointer"
					>
						Details
					</label>
				</div>
			</div>
		</div>
	)
};

export default ProjectCard;