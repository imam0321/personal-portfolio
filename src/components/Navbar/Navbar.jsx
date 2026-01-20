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
    <nav className="h-full flex flex-col gap-3 z-30">
      {/* ===== BACK TO HOME BUTTON ===== */}
      {(path === 'blogs' || path === 'dashboard' || path === 'projects' || path === 'resource') && (
        <div className="p-2 glass-card rounded-full border border-white/10 shadow-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/70 mb-4">
          <Link to="/" aria-label="Back to Homepage" className="group">
            <lord-icon
              src="https://cdn.lordicon.com/osuxyevn.json"
              trigger="hover"
              colors="primary:#03c988"
              style={{ width: '28px', height: '28px' }}
            ></lord-icon>
          </Link>
        </div>
      )}

      {/* ===== NAV ITEMS ===== */}
      <div className="flex flex-col gap-3 py-6 pl-3 pr-1 border border-accent rounded-full">
        {navItems.map(({ icon, link, name }, index) => (
          <a
            key={index}
            href={link}
            className="icon relative group w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/10"
            onClick={(e) => scrollToSection(e, link)}
          >
            <lord-icon
              src={icon}
              trigger="hover"
              className="current-color"
              style={{ width: '24px', height: '24px' }}
            ></lord-icon>
            {/* TOOLTIP */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black/70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              {name}
            </span>
          </a>
        ))}
      </div>

      {/* ===== RESUME BUTTON ===== */}
      <div className="px-3 py-2 border border-accent rounded-full mt-4">
        <a
          href="https://drive.google.com/file/d/1R8uxEwoUpp2xo_Wecc5lRSuKuPs6se3K/view"
          target="_blank"
          rel="noreferrer"
          className="icon relative group w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/10"
        >
          <lord-icon
            src="https://cdn.lordicon.com/winbdcbm.json"
            trigger="hover"
            className="current-color"
            style={{ width: '24px', height: '24px' }}
          ></lord-icon>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black/70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Resume
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
