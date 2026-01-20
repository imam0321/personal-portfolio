import { Link } from "react-router-dom";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";


const AboutMe = () => {
  const props = {
    img: 'https://cdn.lordicon.com/bhfjfgqz.json',
    text: 'About Me',
  };
  return (
    <section id="about" className="mb-24">
      <SectionTitle props={props} />
      <SectionHead>
        Every great design starts with an even{' '}
        <span className="text-primary font-extrabold tracking-tight">better story</span>
      </SectionHead>

      <div className="flex flex-col lg:flex-row gap-12 items-start mt-10">
        <div className="flex-1 space-y-8 relative pl-8 border-l-2 border-primary/40">
          <p className="text-accent text-base md:text-lg leading-relaxed max-w-[800px] font-medium opacity-80">
            I started web programming out of self-interest and quickly discovered a passion for building elegant digital experiences. There's a certain magic in turning a blank screen into a functional, user-centric application.
          </p>
          <p className="text-accent text-base md:text-lg leading-relaxed max-w-[800px] font-medium opacity-80">
            Over the past year, I've dedicated myself to mastering the modern web stack. From crafting pixel-perfect frontends to architecting robust backends, I've completed over 20 diverse projects, each teaching me something new about scalability and user experience.
          </p>
          <div className="flex pt-4">
            <Link
              to="https://drive.google.com/file/d/1R8uxEwoUpp2xo_Wecc5lRSuKuPs6se3K/view"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <button className="flex items-center gap-4 py-4 px-10 glass-card rounded-2xl border-white/5 bg-gradient-to-br from-neutral-900/90 to-neutral-900/70 hover:border-primary/50 transition-all duration-300 text-white font-bold uppercase tracking-widest text-xs shadow-2xl">
                <lord-icon
                  src="https://cdn.lordicon.com/egiwmiit.json"
                  trigger="hover"
                  colors="primary:#03c988"
                  style={{ width: '24px', height: '24px' }}
                ></lord-icon>
                View My Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;