import { Link } from "react-router-dom";


const MobileNav = () => {
  const items = [
    { name: 'Home', icon: 'https://cdn.lordicon.com/osuxyevn.json', link: '/#home' },
    { name: 'Experience', icon: 'https://cdn.lordicon.com/nocovwne.json', link: '/#experience' },
    { name: 'Resume', icon: 'https://cdn.lordicon.com/winbdcbm.json', link: 'https://drive.google.com/file/d/1VszwNGsnDK0jKSZl5nOj5OmanMo_lbBd/view', external: true },
    { name: 'Projects', icon: 'https://cdn.lordicon.com/fpmskzsv.json', link: '/#projects' },
  ];

  return (
    <div className="flex flex-row justify-between items-center py-5 px-8 glass-card rounded-full border-white/5 shadow-2xl backdrop-blur-3xl bg-gradient-to-br from-neutral-900/95 to-neutral-800/80">
      {items.map((item, index) => (
        item.external ? (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-1.5 transition-all duration-300 hover:text-primary"
            aria-label={item.name}
          >
            <lord-icon
              src={item.icon}
              trigger="hover"
              colors="primary:#94a3b8"
              style={{ width: '22px', height: '22px' }}
            ></lord-icon>
            <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-accent group-hover:text-primary transition-colors">{item.name}</span>
          </a>
        ) : (
          <Link
            key={index}
            to={item.link}
            className="group flex flex-col items-center gap-1.5 transition-all duration-300 hover:text-primary"
            aria-label={item.name}
          >
            <lord-icon
              src={item.icon}
              trigger="hover"
              colors="primary:#94a3b8"
              style={{ width: '22px', height: '22px' }}
            ></lord-icon>
            <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-accent group-hover:text-primary transition-colors">{item.name}</span>
          </Link>
        )
      ))}
    </div>
  );
};

export default MobileNav;