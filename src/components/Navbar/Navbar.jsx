import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const path = location?.pathname?.split('/')[1];

  const navItems = [
    { name: 'Home', icon: 'https://cdn.lordicon.com/osuxyevn.json', link: '/#home' },
    { name: 'About', icon: 'https://cdn.lordicon.com/bhfjfgqz.json', link: '/#about' },
    { name: 'Experience', icon: 'https://cdn.lordicon.com/nocovwne.json', link: '/#experience' },
    { name: 'Services', icon: 'https://cdn.lordicon.com/ofwpzftr.json', link: '/#services' },
    { name: 'Skills', icon: 'https://cdn.lordicon.com/svbmmyue.json', link: '/#skills' },
    { name: 'Projects', icon: 'https://cdn.lordicon.com/fpmskzsv.json', link: '/#projects' },
    { name: 'Contact', icon: 'https://cdn.lordicon.com/diihvcfp.json', link: '/#contact' },
  ];

  const scrollToSection = (e, link) => {
    e.preventDefault();
    const sectionId = link.replace('/', '');
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = link;
    }
  };

  return (
    <section className="h-full flex flex-col gap-1 z-30">
      {(path === 'blogs' || path === 'dashboard' || path === 'projects' || path === 'resource') && (
        <div className="p-2 glass-card rounded-full border-white/5 shadow-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/70">
          <Link to="/" className="group" aria-label="Back to Homepage">
            <lord-icon
              src="https://cdn.lordicon.com/osuxyevn.json"
              trigger="hover"
              colors="primary:#03c988"
              style={{ width: '28px', height: '28px', paddingTop: '2px' }}
            ></lord-icon>
          </Link>
        </div>
      )}
      <div className="flex flex-col gap-2 py-3 px-2 glass-card rounded-full border-white/5 shadow-2xl bg-gradient-to-br from-neutral-900/95 via-neutral-900/85 to-neutral-900/75">
        {navItems?.map(({ icon, link, name }, index) => (
          <a
            key={index}
            href={link}
            onClick={(e) => scrollToSection(e, link)}
            className="group relative flex items-center justify-center p-2.5 rounded-full hover:bg-white/5 transition-all duration-300"
            aria-label={`Scroll to ${name}`}
            data-title={name}
          >
            <lord-icon
              src={icon}
              trigger="hover"
              colors={`primary:${location.hash === link ? '#03c988' : '#94a3b8'}`}
              style={{ width: '28px', height: '28px' }}
            ></lord-icon>
            <span className="absolute left-full ml-4 px-3 py-1 bg-neutral-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap tracking-widest uppercase border border-white/5 shadow-2xl">
              {name}
            </span>
          </a>
        ))}
      </div>
      <div className="p-3 glass-card rounded-full border-white/5 shadow-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/70">
        <a
          href="https://drive.google.com/file/d/1VszwNGsnDK0jKSZl5nOj5OmanMo_lbBd/view"
          target="_blank"
          rel="noreferrer"
          className="group flex justify-center"
          aria-label="Download Resume"
          data-title="Resume"
        >
          <lord-icon
            src="https://cdn.lordicon.com/winbdcbm.json"
            trigger="hover"
            colors="primary:#94a3b8"
            style={{ width: '28px', height: '28px', paddingTop: '2px' }}
          ></lord-icon>
        </a>
      </div>
    </section>
  );
};

export default Navbar;