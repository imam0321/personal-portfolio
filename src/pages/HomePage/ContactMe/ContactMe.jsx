import { useState } from "react";
import Swal from "sweetalert2";
import SectionHead from "../../../components/Typography/SectionHead";
import SectionTitle from "../../../components/Typography/SectionTitle";


const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const props = { img: "https://cdn.lordicon.com/diihvcfp.json", text: "Contact Me" }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        title: "Message Sent! 🚀",
        text: "Thank you for reaching out. I'll get back to you as soon as possible!",
        icon: "success",
        background: "#171717",
        color: "#ffffff",
        confirmButtonColor: "#03c988",
        customClass: {
          popup: "rounded-3xl border border-white/5",
        },
      });
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className='mb-6 pb-20'>
      <SectionTitle props={props} />
      <SectionHead>
        Let's Work <span className='text-primary font-extrabold tracking-tight'>Together</span>
      </SectionHead>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        data-aos="fade-up"
        className="glass-card p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl backdrop-blur-3xl bg-gradient-to-br from-neutral-900/95 via-neutral-900/85 to-neutral-900/75"
      >
        <div className='flex lg:flex-row md:flex-row flex-col gap-10 mb-10'>
          <div className='lg:w-1/2 md:w-1/2 relative pl-6 border-l-2 border-primary/20'>
            <label className='text-xs font-bold uppercase tracking-widest text-accent mb-4 block'>Full Name <span className='text-primary'>*</span></label>
            <input
              name="user_name"
              type="text"
              placeholder="Elon Musk"
              className="input w-full bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-white/10 text-sm py-7"
              required
            />
          </div>
          <div className='lg:w-1/2 md:w-1/2 relative pl-6 border-l-2 border-primary/20'>
            <label className='text-xs font-bold uppercase tracking-widest text-accent mb-4 block'>Email Address <span className='text-primary'>*</span></label>
            <input
              name="user_email"
              type="email"
              placeholder="elon@spacex.com"
              className="input w-full bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-white/10 text-sm py-7"
              required
            />
          </div>
        </div>
        <div className="mb-12 relative pl-6 border-l-2 border-primary/20">
          <label className='text-xs font-bold uppercase tracking-widest text-accent mb-4 block'>Message <span className='text-primary'>*</span></label>
          <textarea
            name="message"
            className="textarea w-full h-56 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-white/10 text-sm leading-relaxed p-6"
            placeholder="Tell me about your amazing project..."
            required
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-wide btn-primary rounded-2xl hover:scale-105 transition-all duration-300 text-slate-900 font-bold border-none shadow-lg shadow-primary/30 py-4 uppercase tracking-widest text-xs h-auto disabled:bg-primary/50 disabled:text-slate-900/50"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;