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
      <div className="flex flex-col gap-3 py-6 px-3 border-[1px] border-accent rounded-full">
        {navItems?.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            className="icon"
            data-title={link?.split('#')[1]}
          >
            <lord-icon
              src={icon}
              trigger="hover"
              class="current-color"
              style={{ width: '24px', height: '24px' }}
            ></lord-icon>
          </a>
        ))}
      </div>
      <div className="px-3 py-2 border-[1px] border-accent rounded-full">
        <a
          href="https://drive.google.com/file/d/1-rI2m1DEDKjFacnEea25YRQqkvvCT_CC/view"
          target="_blank"
          rel="noreferrer"
          className="icon"
          data-title="Resume"
        >
          <lord-icon
            src="https://cdn.lordicon.com/winbdcbm.json"
            trigger="hover"
            class="current-color"
            style={{ width: '24px', height: '24px', paddingTop: '2px' }}
          ></lord-icon>
        </a>
      </div>


    </section>
  );
};

export default Navbar;
