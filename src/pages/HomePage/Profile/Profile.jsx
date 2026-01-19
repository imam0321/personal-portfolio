import { useState } from "react";
import { HiOutlineDuplicate } from "react-icons/hi";
import profile from "../../../assets/profile.jpg";
import SocialLinks from "../../../components/SocialLinks";

const Profile = () => {
  const [copied, setCopied] = useState(false);
  const email = "imam.hossain0321@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="
      w-full h-full
      rounded-3xl
      px-6 py-8
      flex flex-col items-center
      text-center
      shadow-2xl
      backdrop-blur-3xl
      bg-gradient-to-br
      from-neutral-900/95
      via-neutral-900/85
      to-neutral-900/75
      border border-white/5
    ">
      {/* ================= PROFILE IMAGE ================= */}
      <div className="relative group mb-6">
        <div className="
          absolute -inset-2 
          rounded-3xl
          bg-gradient-to-r from-primary to-primary/40
          blur opacity-25
          group-hover:opacity-40
          transition duration-700
        " />
        <img
          src={profile}
          alt="Imam Hossain"
          className="
            relative
            h-[200px] w-[200px]
            object-cover
            rounded-3xl
            shadow-2xl
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* ================= NAME & TITLE ================= */}
      <div className="space-y-2 w-full">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Imam Hossain
        </h2>

        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Software Engineer
          </span>
        </div>
      </div>

      {/* ================= EMAIL ================= */}
      <div className="mt-6 w-full space-y-3">
        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="
            relative
            w-full
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
          <span className="text-accent text-sm truncate max-w-[80%]">{email}</span>
          <HiOutlineDuplicate
            className={`
              text-lg transition-all duration-300
              ${copied ? "text-primary scale-125" : "text-accent group-hover:text-primary"}
            `}
          />
          {copied && (
            <span className="
              absolute -top-10 left-1/2 -translate-x-1/2
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

        <p className="flex items-center justify-center gap-2 text-accent text-xs tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          Dhaka, Bangladesh
        </p>
      </div>

      {/* ================= SOCIAL LINKS ================= */}
      <div className="mt-6">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Profile;
