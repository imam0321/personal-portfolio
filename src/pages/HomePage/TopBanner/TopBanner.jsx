import SectionTitle from "../../../components/Typography/SectionTitle";


const TopBanner = () => {
  const props = {
    img: 'https://cdn.lordicon.com/osuxyevn.json',
    text: 'Introduction',
  };
  return (
    <section id="home" className="mb-32 pt-16 lg:pt-2">
      <div data-aos="fade-up" data-aos-duration="1000">
        <SectionTitle props={props} />
        <h1 className="lg:text-6xl lg:leading-tight md:text-5xl md:leading-tight text-4xl leading-tight font-extrabold tracking-tight mt-8">
          Hey! I'm <span className="text-gradient">Imam</span>,<br />
          <span className="text-white/90">Software Engineer</span>
        </h1>
        <p className="mt-8 lg:text-lg md:text-base text-sm text-accent max-w-[700px] leading-relaxed font-medium opacity-80">
          A forward-thinking software engineer who builds exceptional digital experiences. Specialized in creating scalable, user-centric web applications with clean code and modern aesthetics.
        </p>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-end md:items-end items-center mt-16">
          <div className="flex lg:gap-24 md:gap-16 gap-12">
            <div className="flex flex-col relative pl-6 border-l-2 border-primary/40">
              <span className="text-primary lg:text-6xl md:text-5xl text-4xl font-extrabold leading-none">
                1+
              </span>
              <p className="uppercase text-accent text-xs font-bold tracking-widest mt-4 leading-relaxed">
                Years of<br />Experience
              </p>
            </div>
            <div className="flex flex-col relative pl-6 border-l-2 border-primary/40">
              <span className="text-primary lg:text-6xl md:text-5xl text-4xl font-extrabold leading-none">
                20+
              </span>
              <p className="uppercase text-accent text-xs font-bold tracking-widest mt-4 leading-relaxed">
                Projects<br />Completed
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="group flex items-center gap-6 text-xl font-bold text-white hover:text-primary transition-all duration-300 lg:mt-0 md:mt-0 mt-20"
          >
            <span className="relative">
              Explore My Work
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </span>
            <lord-icon
              target="a"
              src="https://cdn.lordicon.com/rxufjlal.json"
              trigger="hover"
              class="current-color"
              style={{ width: '48px', height: '48px' }}
            ></lord-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;