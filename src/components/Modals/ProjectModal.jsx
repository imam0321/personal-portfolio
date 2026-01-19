import { motion } from "framer-motion";
import { BsCamera } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { HiCode, HiServer } from "react-icons/hi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectModal = ({ data, setModal }) => {
  const hasData = data && !Array.isArray(data) && data?._id;

  const {
    name,
    description,
    features,
    duration,
    technologies,
    liveLink,
    client,
    server,
    images,
  } = data || {};

  return (
    <>
      <input
        type="checkbox"
        id="project-modal"
        className="modal-toggle"
        checked={!!hasData}
        onChange={() => !hasData && setModal(null)}
      />

      <div className={`modal modal-bottom md:modal-middle backdrop-blur-2xl bg-black/50 transition-all duration-500 ${hasData ? 'modal-open visible opacity-100' : 'invisible opacity-0'}`}>
        {hasData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
            modal-box
            max-w-7xl w-full
            max-h-[90vh]
            overflow-hidden
            px-6 md:px-14 py-10
            rounded-3xl
            bg-gradient-to-br
            from-neutral-900/90
            via-neutral-900/80
            to-neutral-900/70
            text-white
          "
          >
            {/* CLOSE */}
            <label
              htmlFor="project-modal"
              onClick={() => setModal(null)}
              className="btn btn-sm btn-circle absolute top-5 right-5 bg-white/10 border-white/10 text-white/80 hover:bg-white/20 hover:text-white"
            >
              ✕
            </label>

            {/* SCROLL */}
            <div className="max-h-[80vh] overflow-y-auto space-y-16">
              {/* HERO */}
              <section className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  {name}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-primary">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    {duration}
                  </span>

                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Live Website →
                    </a>
                  )}
                </div>
              </section>

              {/* OVERVIEW */}
              <section className="relative pl-6 border-l-2 border-primary/40">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-accent leading-relaxed max-w-3xl">
                  {description}
                </p>
              </section>

              {/* FEATURES */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-semibold mb-6">
                  <MdOutlineFeaturedPlayList className="text-primary" />
                  What it does
                </h2>

                <ul className="space-y-4 pl-4 border-l border-white/10">
                  {features?.map((f, i) => (
                    <li key={i} className="relative pl-6 text-sm text-accent">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              {/* STACK */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-semibold mb-6">
                  <HiCode className="text-primary" />
                  Built with
                </h2>

                <div className="flex flex-wrap gap-3">
                  {technologies?.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs uppercase tracking-widest text-primary/90"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </section>

              {/* REPOS */}
              {(client || server) && (
                <section className="space-y-3">
                  <h2 className="text-xl font-semibold flex items-center gap-3">
                    <GrGithub className="text-primary" />
                    Source
                  </h2>

                  <div className="flex flex-col gap-2 text-sm">
                    {client && (
                      <a
                        href={client}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary underline underline-offset-4"
                      >
                        Frontend Repository →
                      </a>
                    )}
                    {server && (
                      <a
                        href={server}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary underline underline-offset-4"
                      >
                        Backend Repository →
                      </a>
                    )}
                  </div>
                </section>
              )}

              {/* GALLERY */}
              <section>
                <h2 className="flex items-center gap-3 text-xl font-semibold mb-6">
                  <BsCamera className="text-primary" />
                  Screens
                </h2>

                <PhotoProvider>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {images?.map((img, i) => (
                      <PhotoView key={i} src={img}>
                        <div className="overflow-hidden rounded-2xl cursor-pointer z-50">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover hover:scale-105 transition duration-700 z-50"
                          />
                        </div>
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>
              </section>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ProjectModal;
