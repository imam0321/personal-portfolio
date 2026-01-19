import { useState } from "react";
import { HiOutlineDuplicate } from "react-icons/hi";

import SocialLinks from "../../../components/SocialLinks";
import profile from "../../../assets/profile.jpg";

const HomeProfile = () => {
  const [copied, setCopied] = useState(false);
  const email = "imam.hossain0321@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full px-4 lg:hidden flex justify-center py-10">
      <div
        className="
          w-full max-w-[420px]
          rounded-3xl
          p-8
          flex flex-col items-center text-center
          text-white
          shadow-2xl
          backdrop-blur-3xl
          bg-gradient-to-br
          from-neutral-900/90
          via-neutral-900/80
          to-neutral-900/70
          border border-white/5
        "
      >
        {/* ================= IMAGE ================= */}
        <div className="relative group mb-8">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary to-primary/40 blur opacity-25 group-hover:opacity-40 transition duration-700" />
          <img
            src={profile}
            alt="Imam Hossain"
            className="
              relative
              h-[200px] w-[200px]
              object-cover
              rounded-2xl
              shadow-xl
              transition-transform duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>

        {/* ================= INFO ================= */}
        <h2 className="text-2xl font-extrabold tracking-tight">
          Imam Hossain
        </h2>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Software Engineer
          </span>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="mt-6 space-y-4 w-full">
          <button
            onClick={copyEmail}
            aria-label="Copy email address"
            className="
              relative w-full
              flex items-center justify-center gap-3
              py-3 px-4
              rounded-2xl
              bg-white/5
              border border-white/5
              hover:border-primary/40
              transition-all duration-300
              group
            "
          >
            <span className="text-accent text-xs truncate max-w-[85%]">
              {email}
            </span>

            <HiOutlineDuplicate
              className={`
                transition-all duration-300
                ${copied
                  ? "text-primary scale-125"
                  : "text-accent group-hover:text-primary"}
              `}
            />

            {copied && (
              <span className="
                absolute -top-9 left-1/2 -translate-x-1/2
                bg-primary text-slate-900
                text-[10px] font-bold
                py-1 px-3
                rounded-full
                animate-bounce
              ">
                COPIED!
              </span>
            )}
          </button>

          <p className="flex items-center justify-center gap-2 text-accent text-xs tracking-wider uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            Dhaka, Bangladesh
          </p>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="mt-8 scale-90">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
