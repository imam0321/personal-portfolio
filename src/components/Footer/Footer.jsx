const Footer = () => {
  return (
    <footer className="mt-32 lg:mb-16 md:mb-16 mb-28 pt-10 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <p className="text-accent font-bold tracking-[0.1em] uppercase text-[10px] opacity-60">
          &copy; {new Date().getFullYear()} <span className="text-white opacity-100">Imam Hossain</span>. Crafted with Passion.
        </p>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
          <a href="#home" className="hover:text-primary transition-all duration-300">Home</a>
          <a href="#projects" className="hover:text-primary transition-all duration-300">Projects</a>
          <a href="#contact" className="hover:text-primary transition-all duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;